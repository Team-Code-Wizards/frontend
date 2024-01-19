import { inputs } from '@/constants/Contacts';

import Input from './Input';
import IContactsFormProps from './interface';
import style from './style.module.scss';

export default function ContactsForm({ onSubmit }: IContactsFormProps) {
	return (
		<div className={style['form-box']}>
			<form className={style['form']} onSubmit={onSubmit}>
				{inputs.map((el) => (
					<Input key={crypto.randomUUID()} {...el} />
				))}
				<span className={style['form__notice']}>*В формате Документ Word</span>
				<button className={style['form__button']} type="submit">
					Отправить
				</button>
				<span className={style['form__notice']}>
					Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
					персональных данных.
				</span>
			</form>
		</div>
	);
}
