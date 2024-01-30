import Input from '@/components/Contacts/ContactsForm/Input';
import { inputs } from '@/constants/Promo';
import { v4 as uuidv4 } from 'uuid';

import IPromoForm from './interface';
import styles from './styles.module.scss';

export default function Form({ onSubmit }: IPromoForm) {
	return (
		<form onSubmit={onSubmit} className={styles['promo-form']}>
			<p className={styles['promo-form__title']}>
				Не желаете тратить время на чтение длинных текстов? <br />
				<span className={styles['promo-form__message']}>
					Просто оставьте свои данные и мы свяжемся с вами в ближайшее время и
					ответим на все ваши вопросы
				</span>
			</p>
			{inputs.map((el) => (
				<Input key={uuidv4()} {...el} />
			))}
			<button className={styles['promo-form__button']} type="submit">
				Отправить
			</button>
		</form>
	);
}
