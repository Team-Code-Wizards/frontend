import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import axios from 'axios';

export default async function useCaptchaHandler() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const captchaHandler = async () => {
		if (!executeRecaptcha) {
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

		console.log('hook до if', response);

		if (response?.data?.success === true) {
			console.log('hook', response.data);
			return response?.data?.score;
		}
	};

	return captchaHandler;
}
