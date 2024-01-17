import { IModalItem } from './type';

export const data: IModalItem[] = [
	{
		title: 'Имя',
		placeholder: 'Иван Иванов',
	},
	{
		title: 'Телефон',
		placeholder: '+7 (900) 000-00-00',
		type: 'tel',
		required: true,
	},
	{
		title: 'К вашему номеру подключен Viber, WhatsApp, Telegram',
		placeholder: 'Да',
		type: 'dropdown',
		required: true,
	},
	{
		title: 'Выбор сайта',
		placeholder: 'Лендинг',
		type: 'dropdown',
		required: true,
	},
	{
		title: 'Дополнительная информация',
		placeholder: 'Сообщение (необязательно)',
		type: 'textarea',
	},
];
