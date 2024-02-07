import { SubmitHandler, useForm } from 'react-hook-form';

import { inputs } from '@/constants/Contacts';

import Input from './Input';
import IInput from './Input/interface';
// import IContactsFormProps from './interface';
import styles from './styles.module.scss';

export default function ContactsForm() {
	const { handleSubmit, register } = useForm<IInput>();
	const onSubmit: SubmitHandler<IInput> = (data) => console.log(data);

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
