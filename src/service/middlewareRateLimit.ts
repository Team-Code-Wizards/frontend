import { NextRequest, NextResponse } from 'next/server';

import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
	redis: kv,
	// 5 requests from the same IP in 20 seconds
	limiter: Ratelimit.slidingWindow(2, '20 s'),
});

// Middleware function to handle rate limiting
export default async function middleware(request: NextRequest) {
	const ip = request.ip ?? '127.0.0.1';
	const { success } = await ratelimit.limit(ip);

	if (success) {
		return NextResponse.next(request);
	} else {
		throw new Error('Too many requests');
	}
}
