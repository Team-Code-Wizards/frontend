import IInput from '@/components/Contacts/ContactsForm/Input/interface';
import style from '@/components/Contacts/ContactsForm/style.module.scss';

export const inputs: IInput[] = [
	{
		inputType: 'default',
		className: style['form__input'],
		type: 'text',
		name: 'clientName',
		placeholder: 'Имя',
	},
	{
		inputType: 'default',
		className: style['form__input'],
		type: 'tel',
		name: 'clientTel',
		placeholder: 'Телефон',
	},
	{
		inputType: 'default',
		className: style['form__input'],
		type: 'email',
		name: 'clientEmail',
		placeholder: 'E-mail',
	},
	{
		inputType: 'textarea',
		className: style['form__input'],
		name: 'clientMessage',
		placeholder: 'Сообщение',
	},
	{
		inputType: 'inputFile',
		className: style['form__input'],
		type: 'file',
		name: 'clientFile',
		accept: '.doc',
		labelText: 'Прикрепить ТЗ',
		labelClassName: style['label'],
	},
];
