'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function GoogleCaptchaWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const recaptchaKey: string ='6LdgN5cpAAAAAPtQpHDJZAb5-Z0D-smzpXg9qln9'
	return (
		<GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? 'NOT попался DEFINED'}>
			{children}
		</GoogleReCaptchaProvider>
	);
}
