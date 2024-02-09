import { NextResponse } from 'next/server';

import { sendEmail } from '@/service/mailservice/mailService';

export async function POST(res: Response, req: Request) {
	try {
		await sendEmail();

		return NextResponse.json({ message: req.body }, { status: 200 });
	} catch {
		return NextResponse.json({ error: req.body }, { status: 500 });
	}
}
