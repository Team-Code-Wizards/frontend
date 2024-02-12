import { ISendMailItem } from './type';

export default async function sendRequest({ ...data }: ISendMailItem) {
	try {
		const response = await fetch('api/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Не удалось отправить письмо');
		}

		return response.json();
	} catch (error) {
		throw error;
	}
}
