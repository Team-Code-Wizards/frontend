import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import ClearInputIcon from '&/images/icons/ClearInputIcon';
import DoneIcon from '&/images/icons/DoneIcon';
import ErrorIcon from '&/images/icons/ErrorIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// import ClearInputButton from './Input/ClearInputButton';
// import { FormProvider } from 'react-hook-form';
// import { inputs } from '@/constants/Contacts';
// import Input from './Input';
// import IContactsFormProps from './interface';
import styles from './styles.module.scss';

export const schema = yup.object().shape({
	clientName: yup.string().notRequired(),
	clientTel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?\d{10,}$/g, 'Неверный формат номера телефона'),
	clientEmail: yup
		.string()
		.required('Введите Email')
		.matches(/.+@.+\..+/i, 'Неверный формат Email'),
	clientMessage: yup.string().notRequired(),
	clientFile: yup.mixed().notRequired(),
});
// interface IFormInput {
// 	clientName?: string | undefined | null;
// 	clientTel: string;
// 	clientEmail: string;
// 	clientMessage?: string | undefined | null;
// 	clientFile?: string | undefined | null | object;
// }

export default function ContactsForm() {
	const {
		register,
		resetField,
		handleSubmit,
		formState,
		formState: { errors, dirtyFields, isValid, isDirty },
		reset,
	} = useForm({
		defaultValues: {
			clientName: '',
			clientTel: '',
			clientEmail: '',
			clientMessage: '',
			clientFile: '',
		},
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		reset();
	};
	useEffect(() => {
		// console.log(isDirty);
		console.log(formState);

		// console.log(`value ${getValues('clientTel')}`);
	}, [formState]);

	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
				<span className={styles['input-box']}>
					<input
						{...register('clientName')}
						type="text"
						className={styles['contacts-form-input']}
						placeholder="Имя"
					/>
					{dirtyFields?.clientName && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('clientName')}
						>
							<ClearInputIcon />
						</button>
					)}
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('clientTel')}
						type="tel"
						className={`${styles['contacts-form-input']} ${
							errors.clientTel && styles['contacts-form-input_error']
						} ${
							!errors.clientTel &&
							dirtyFields?.clientTel &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Телефон"
					/>
					{dirtyFields?.clientTel && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('clientTel')}
						>
							<ClearInputIcon />
						</button>
					)}
					<span className={styles['input-error-message']}>
						{errors.clientTel?.message}
					</span>
					<span className={styles['input-validation-icon']}>
						{errors.clientTel && <ErrorIcon />}
						{!errors.clientTel && dirtyFields?.clientTel && <DoneIcon />}
					</span>
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('clientEmail')}
						type="email"
						className={`${styles['contacts-form-input']} ${
							errors.clientEmail && styles['contacts-form-input_error']
						} ${
							!errors.clientEmail &&
							dirtyFields?.clientEmail &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Email"
					/>
					{dirtyFields?.clientEmail && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('clientEmail')}
						>
							<ClearInputIcon />
						</button>
					)}
					<span className={styles['input-error-message']}>
						{errors.clientEmail?.message}
					</span>
					<span className={styles['input-validation-icon']}>
						{errors.clientEmail && <ErrorIcon />}
						{!errors.clientEmail && dirtyFields?.clientEmail && <DoneIcon />}
					</span>
				</span>

				<span className={styles['textarea-box']}>
					<textarea
						{...register('clientMessage')}
						className={styles['contacts-form-input']}
						placeholder="Сообщение"
					/>
					{dirtyFields?.clientMessage && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('clientMessage')}
						>
							<ClearInputIcon />
						</button>
					)}
				</span>

				<input
					{...register('clientFile')}
					className={styles['contacts-form-input']}
					type="file"
					id="file"
					accept=".doc"
				/>
				<label
					className={styles['contacts-form-file-input-label']}
					htmlFor="file"
				>
					Прикрепить ТЗ
				</label>

				<span className={styles['form__notice']}>*В формате Документ Word</span>
				<button
					className={`${styles['form__button']} ${
						!isValid && isDirty && styles['form__button_disabled']
					}`}
					type="submit"
				>
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
// import { inputs } from '@/constants/Contacts';

// import Input from './Input';
// import IContactsFormProps from './interface';
// import styles from './styles.module.scss';

// export default function ContactsForm({ onSubmit }: IContactsFormProps) {
// 	return (
// 		<div className={styles['form-box']}>
// 			<form className={styles['form']} onSubmit={onSubmit}>
// 				{inputs.map((el) => (
// 					<Input key={`key${el.id}`} {...el} />
// 				))}
// 				<span className={styles['form__notice']}>*В формате Документ Word</span>
// 				<button className={styles['form__button']} type="submit">
// 					Отправить
// 				</button>
// 				<span className={styles['form__notice']}>
// 					Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
// 					персональных данных.
// 				</span>
// 			</form>
// 		</div>
// 	);
// }
