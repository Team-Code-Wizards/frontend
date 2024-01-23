import IInput from '@/components/Contacts/ContactsForm/Input/interface';
import style from '@/components/Promo/PromoForm/style.module.scss';

export const inputs: IInput[] = [
	{
		inputType: 'default',
		wrapperClassName: style['promo-form__input-box'],
		labelClassName: style['promo-form__input-label'],
		className: style['promo-form__input'],
		clearInputStyleKey: 'promo-input-clear-btn',
		type: 'text',
		labelText: 'Имя',
		placeholder: 'Иван',
		id: 'promo-name-input',
		name: 'clientName',
	},
	{
		inputType: 'default',
		wrapperClassName: style['promo-form__input-box'],
		labelClassName: style['promo-form__input-label'],
		className: style['promo-form__input'],
		clearInputStyleKey: 'promo-input-clear-btn',
		type: 'tel',
		labelText: 'Телефон',
		placeholder: '+7 (900) 000-00-00',
		id: 'promo-tel-input',
		name: 'clientTel',
	},
];
