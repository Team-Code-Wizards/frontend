import Input from '@/components/Contacts/ContactsForm/Input';
import { useInfoMsg } from '@/components/InfoMsgContext';
import { inputs } from '@/constants/Promo';
import sendRequest from '@/service/sendrequest';

import IPromoForm from './interface';
import styles from './styles.module.scss';

export default function Form({} /* onSubmit */ : IPromoForm) {
	const { showSuccessInfoMsg, showFailedInfoMsg } = useInfoMsg();
	const send = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = await sendRequest({ name: 'Ваня', phone: '89522194834' });
		if (res.status === 200) {
			showSuccessInfoMsg();
		} else {
			showFailedInfoMsg();
		}
	};
	return (
		<form onSubmit={send} className={styles['promo-form']}>
			<p className={styles['promo-form__title']}>
				Не желаете тратить время на чтение длинных текстов? <br />
				<span className={styles['promo-form__message']}>
					Просто оставьте свои данные и мы свяжемся с вами в ближайшее время и
					ответим на все ваши вопросы
				</span>
			</p>
			{inputs.map((el) => (
				<Input key={el.id} {...el} />
			))}
			<button className={styles['promo-form__button']}>Отправить</button>
		</form>
	);
}
