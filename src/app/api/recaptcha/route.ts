import { NextResponse } from 'next/server';

import axios from 'axios';

export async function POST(req: Request) {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const data = await req.json();

	const { gRecaptchaToken } = data;

	let res;

	const formData = `secret=${secret}&response=${gRecaptchaToken}`;

	try {
		res = await axios.post(
			'https://www.google.com/recaptcha/api/siteverify',
			formData,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);

		return NextResponse.json({
			success: res.data.success,
		});
	} catch (e) {
		console.log('e:', e);
		if (e instanceof Error) {
			return NextResponse.json({ error: true });
		}
	}
}
