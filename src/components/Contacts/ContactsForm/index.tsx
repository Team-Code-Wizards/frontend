import { inputs } from '@/constants/Contacts';

import Input from './Input';
import IContactsFormProps from './interface';
import styles from './styles.module.scss';

export default function ContactsForm({ onSubmit }: IContactsFormProps) {
	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={onSubmit}>
				{inputs.map((el) => (
					<Input key={`key${el.id}`} {...el} />
				))}
				<span className={styles['form__notice']}>*В формате Документ Word</span>
				<button className={styles['form__button']} type="submit">
					Отправить
				</button>
				<span className={styles['form__notice']}>
					Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
					персональных данных.
				</span>
			</form>
		</div>
	);
}
