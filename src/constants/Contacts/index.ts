import IInput from '@/components/Contacts/ContactsForm/Input/interface';
import style from '@/components/Contacts/ContactsForm/style.module.scss';

export const inputs: IInput[] = [
	{
		inputType: 'default',
		className: style['form__input'],
		wrapperClassName: style['input-box'],
		clearInputStyleKey: 'input-clear-btn',
		type: 'text',
		name: 'clientName',
		placeholder: 'Имя',
	},
	{
		inputType: 'default',
		className: style['form__input'],
		wrapperClassName: style['input-box'],
		clearInputStyleKey: 'input-clear-btn',
		type: 'tel',
		name: 'clientTel',
		placeholder: 'Телефон',
	},
	{
		inputType: 'default',
		className: style['form__input'],
		wrapperClassName: style['input-box'],
		clearInputStyleKey: 'input-clear-btn',
		type: 'email',
		name: 'clientEmail',
		placeholder: 'E-mail',
	},
	{
		inputType: 'textarea',
		className: style['form__input'],
		wrapperClassName: style['textarea-box'],
		clearInputStyleKey: 'textarea-clear-btn',
		name: 'clientMessage',
		placeholder: 'Сообщение',
	},
	{
		inputType: 'inputFile',
		className: style['form__input'],
		labelClassName: style['label'],
		type: 'file',
		name: 'clientFile',
		accept: '.doc',
		labelText: 'Прикрепить ТЗ',
	},
];
