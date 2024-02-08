'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { inputs } from '@/constants/Contacts';

import Input from './Input';
import { InputNames } from './Input/interface';
import styles from './styles.module.scss';

type TContactsFormData = {
	clientName: InputNames.NAME;
	clientTel: InputNames.PHONE;
	clientMessage: InputNames.MESSAGE;
	clientEmail: InputNames.EMAIL;
	clientFile: InputNames.FILE;
};

export default function ContactsForm() {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues | TContactsFormData> = (data) =>
		console.log(data);

	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
				{inputs.map((el) => (
					<Input key={`key${el.id}`} {...el} register={register} />
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
