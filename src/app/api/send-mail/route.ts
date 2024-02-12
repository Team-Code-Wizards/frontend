import { NextResponse } from 'next/server';

import sendMail from '@/service/mailservice';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		sendMail(body);

		return NextResponse.json({ status: 200 });
	} catch {
		return NextResponse.json({ status: 405 });
	}
}
