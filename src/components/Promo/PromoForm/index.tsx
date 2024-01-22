import Input from '@/components/Contacts/ContactsForm/Input';
import IInput from '@/components/Contacts/ContactsForm/Input/interface';

import IPromoForm from './interface';
import style from './style.module.scss';

//TODO Обновить ключ после слияния с develop

export default function Form({ onSubmit }: IPromoForm) {
	const inputs: IInput[] = [
		{
			inputType: 'default',
			wrapperClassName: style['promo-form__input-box'],
			labelClassName: style['promo-form__input-label'],
			className: style['promo-form__input'],
			clearInputStyleKey: 'promo-input-clear-btn',
			type: 'text',
			labelText: 'Имя',
			placeholder: 'Иван',
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
			name: 'clientTel',
		},
	];
	return (
		<form onSubmit={onSubmit} className={style['promo-form']}>
			<p className={style['promo-form__title']}>
				Не желаете тратить время на чтение длинных текстов? <br />
				<span className={style['promo-form__message']}>
					Просто оставьте свои данные и мы свяжемся с вами в ближайшее время и
					ответим на все ваши вопросы
				</span>
			</p>
			{inputs.map((el) => (
				<Input key={el.name} {...el} />
			))}
			<button className={style['promo-form__button']} type="submit">
				Отправить
			</button>
		</form>
	);
}
