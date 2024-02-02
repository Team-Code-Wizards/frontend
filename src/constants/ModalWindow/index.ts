import { IModalItem } from './type';

export const data: IModalItem[] = [
	{
		id: '32ec6be3-2265-481a-8106-6615f94961c1',
		title: 'Имя',
		placeholder: 'Иван Иванов',
		type: 'text',
	},
	{
		id: '3bda61fa-12de-4fb7-94bf-c905904a6f97',
		title: 'Телефон',
		placeholder: '+7 (900) 000-00-00',
		type: 'tel',
		required: true,
	},
	{
		id: 'c4edfd5e-2a4e-46d8-8006-3c52e2285e0e',
		title: 'К вашему номеру подключен Viber, WhatsApp, Telegram',
		placeholder: 'Да',
		type: 'dropdown',
		required: true,
	},
	{
		id: '09e1eaa7-e356-456a-8bf2-1c021e54a6b6',
		title: 'Выбор сайта',
		placeholder: 'Лендинг',
		type: 'dropdown',
		required: true,
	},
	{
		id: '27c81fc6-5e1d-4ea3-b6fb-b3047c9918da',
		title: 'Дополнительная информация',
		placeholder: 'Сообщение (необязательно)',
		type: 'textarea',
	},
];
