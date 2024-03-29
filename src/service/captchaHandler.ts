import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import axios from 'axios';

export default async function useCaptchaHandler() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const captchaHandler = async () => {
		if (!executeRecaptcha) {
			console.log('HELLO');
			return;
		}
		const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

		const response = await axios({
			method: 'post',
			url: '/api/recaptcha',
			data: {
				gRecaptchaToken,
			},
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		});

		if (response?.data?.success === true) {
			return response?.data?.success;
		}
	};

	return captchaHandler;
}
