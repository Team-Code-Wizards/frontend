import IInput from '@/components/Contacts/ContactsForm/Input/interface';

export const inputs: IInput[] = [
	{
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'text',
		name: 'clientName',
		placeholder: 'Имя',
	},
	{
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'tel',
		name: 'clientTel',
		placeholder: 'Телефон',
	},
	{
		inputType: 'default',
		className: 'contacts-form-input',
		wrapperStyleKey: 'input-box',
		clearInputStyleKey: 'input-clear-btn',
		type: 'email',
		name: 'clientEmail',
		placeholder: 'E-mail',
	},
	{
		inputType: 'textarea',
		className: 'contacts-form-input',
		wrapperStyleKey: 'textarea-box',
		clearInputStyleKey: 'textarea-clear-btn',
		name: 'clientMessage',
		placeholder: 'Сообщение',
	},
	{
		inputType: 'inputFile',
		className: 'contacts-form-input',
		labelStyleKey: 'contacts-form-file-input-label',
		type: 'file',
		name: 'clientFile',
		accept: '.doc',
		labelText: 'Прикрепить ТЗ',
	},
];
