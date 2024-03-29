import { NextRequest, NextResponse } from 'next/server';

import sendMail from '@/service/mailservice';
import middleware from '@/service/middlewareRateLimit';

// Handler for POST requests
export async function POST(req: NextRequest) {
	try {
		// Вызов middleware перед обработкой POST-запроса
		const response = await middleware(req);
		// Проверка, прошло ли middleware успешно
		if (response.status !== 200) {
			// Если middleware вернуло ошибку, возвращаем эту ошибку клиенту
			return response;
		}

		// Если middleware прошло успешно, обрабатываем POST-запрос
		const body = await req.json();
		sendMail(body);
		return NextResponse.json({ message: 'письмо отправлено' }, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
		}
	}
}
