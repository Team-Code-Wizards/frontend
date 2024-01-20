import IInput from '@/components/Contacts/ContactsForm/Input/interface';
import style from '@/components/Contacts/ContactsForm/style.module.scss';

export const inputs: IInput[] = [
	{
		id: 1,
		inputType: 'default',
		className: style['form__input'],
		type: 'text',
		name: 'clientName',
		placeholder: 'Имя',
	},
	{
		id: 2,
		inputType: 'default',
		className: style['form__input'],
		type: 'tel',
		name: 'clientTel',
		placeholder: 'Телефон',
	},
	{
		id: 3,
		inputType: 'default',
		className: style['form__input'],
		type: 'email',
		name: 'clientEmail',
		placeholder: 'E-mail',
	},
	{
		id: 4,
		inputType: 'textarea',
		className: style['form__input'],
		name: 'clientMessage',
		placeholder: 'Сообщение',
	},
	{
		id: 5,
		inputType: 'inputFile',
		className: style['form__input'],
		type: 'file',
		name: 'clientFile',
		accept: '.doc',
		labelText: 'Прикрепить ТЗ',
		labelClassName: style['label'],
	},
];
