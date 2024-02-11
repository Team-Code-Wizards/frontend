import { ISendMailItem } from './type';

export default async function sendRequest({ ...data }: ISendMailItem) {
	const response = await fetch('api/send-mail', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
}
