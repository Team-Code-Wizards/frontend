import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';

import AttachmentIcon from '&/images/contacts/attachment.svg';
import ClearInputIcon from '&/images/icons/ClearInputIcon';
import DeleteIcon from '&/images/icons/DeleteIcon';
import { contactsSchema } from '@/constants/Contacts/contactsSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

export default function ContactsForm() {
	const {
		register,
		resetField,
		handleSubmit,
		watch,
		formState: { errors, dirtyFields, isValid, isDirty },
	} = useForm({
		defaultValues: {
			clientName: '',
			clientTel: '',
			clientEmail: '',
			clientMessage: '',
			clientFile: '',
		},
		mode: 'onChange',
		resolver: yupResolver(contactsSchema),
	});

	const file = watch('clientFile');
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

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
					id="fileContacts"
					accept=".doc,.docx"
				/>
				<label
					className={styles['contacts-form-file-input-label']}
					htmlFor="fileContacts"
				>
					Прикрепить ТЗ
				</label>
				{file && (
					<span className={styles['contacts-form-file-name']}>
						<Image src={AttachmentIcon} alt="" />
						{/* {file[0].name} */}
						<button
							className={styles['contacts-form-file-name__button']}
							onClick={() => resetField('clientFile')}
						>
							<DeleteIcon />
						</button>
					</span>
				)}

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
