import {
	IInput,
	InputNames,
} from '@/components/Contacts/ContactsForm/Input/interface';

export const inputs: IInput[] = [
	{
		id: '2d098ac1-c086-43c9-a4b5-0f07ec8b9f9c',
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'text',
		name: InputNames.NAME,
		placeholder: 'Имя',
	},
	{
		id: 'a05b899c-0c7c-43b4-8762-63657599ff22',
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'tel',
		name: InputNames.PHONE,
		placeholder: 'Телефон',
	},
	{
		id: '70b358a0-835d-435b-aeb8-e7cb7628630e',
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'email',
		name: InputNames.EMAIL,
		placeholder: 'E-mail',
	},
	{
		id: 'c530307b-b1b1-4254-a26e-a350436c685c',
		inputType: 'textarea',
		className: 'contacts-form-input',
		wrapperStyleKey: 'textarea-box',
		clearInputStyleKey: 'textarea-clear-btn',
		name: InputNames.MESSAGE,
		placeholder: 'Сообщение',
	},
	{
		id: '9fb5f3e7-ef78-45c1-b2eb-6839a80de6ce',
		inputType: 'inputFile',
		className: 'contacts-form-input',
		labelStyleKey: 'contacts-form-file-input-label',
		type: 'file',
		name: InputNames.FILE,
		accept: '.doc',
		labelText: 'Прикрепить ТЗ',
	},
];
