import { NextResponse } from 'next/server';

import { sendMail } from '@/service/mailService';

export async function POST() {
	await sendMail();

	return NextResponse.json({ message: 'Succes' });
}
