'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/Contacts/ContactsForm/Input';
import { inputs } from '@/constants/Promo';

import { TCallbackData } from '../interface';
import styles from './styles.module.scss';

export default function PromoForm() {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues | TCallbackData> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles['promo-form']}>
			<p className={styles['promo-form__title']}>
				Не желаете тратить время на чтение длинных текстов? <br />
				<span className={styles['promo-form__message']}>
					Просто оставьте свои данные и мы свяжемся с вами в ближайшее время и
					ответим на все ваши вопросы
				</span>
			</p>
			{inputs.map((inputAttribute) => (
				<Input
					key={inputAttribute.id}
					{...inputAttribute}
					register={register}
				/>
			))}
			<button className={styles['promo-form__button']} type="submit">
				Отправить
			</button>
		</form>
	);
}
