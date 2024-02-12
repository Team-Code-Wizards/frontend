import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import ClearInputIcon from '&/images/icons/ClearInputIcon';
import { useInfoMsg } from '@/components/InfoMsgContext';
import { contactsSchema } from '@/constants/Contacts/contactsSchema';
import useSubmitter from '@/service/submitter';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

export default function ContactsForm() {
	const { showFailedInfoMsg } = useInfoMsg();
	const submitter = useSubmitter();
	const {
		register,
		resetField,
		handleSubmit,
		// watch,
		reset,
		formState: { errors, dirtyFields, isValid, isDirty },
	} = useForm({
		defaultValues: {
			name: '',
			tel: '',
			mail: '',
			message: '',
			attachments: '',
		},
		mode: 'onChange',
		resolver: yupResolver(contactsSchema),
	});

	// const file = watch('attachments');

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await submitter(data)
			.then(() => {
				reset();
			})
			.catch(() => showFailedInfoMsg());
	};

	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
				<span className={styles['input-box']}>
					<input
						{...register('name')}
						type="text"
						className={styles['contacts-form-input']}
						placeholder="Имя"
					/>
					{dirtyFields?.name && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('name')}
						>
							<ClearInputIcon />
						</button>
					)}
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('tel')}
						type="tel"
						className={`${styles['contacts-form-input']} ${
							errors.tel && styles['contacts-form-input_error']
						} ${
							!errors.tel &&
							dirtyFields?.tel &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Телефон"
					/>
					{dirtyFields?.tel && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('tel')}
						>
							<ClearInputIcon />
						</button>
					)}
					<span className={styles['input-error-message']}>
						{errors.tel?.message}
					</span>
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('mail')}
						type="email"
						className={`${styles['contacts-form-input']} ${
							errors.mail && styles['contacts-form-input_error']
						} ${
							!errors.mail &&
							dirtyFields?.mail &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Email"
					/>
					{dirtyFields?.mail && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('mail')}
						>
							<ClearInputIcon />
						</button>
					)}
					<span className={styles['input-error-message']}>
						{errors.mail?.message}
					</span>
				</span>

				<span className={styles['textarea-box']}>
					<textarea
						{...register('message')}
						className={styles['contacts-form-input']}
						placeholder="Сообщение"
					/>
					{dirtyFields?.message && (
						<button
							className={styles['input-clear-btn']}
							onClick={() => resetField('message')}
						>
							<ClearInputIcon />
						</button>
					)}
				</span>

				{/* <input
					{...register('attachments')}
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
						{file[0].name}
						<button
							className={styles['contacts-form-file-name__button']}
							onClick={() => resetField('attachments')}
						>
							<DeleteIcon />
						</button>
					</span>
				)}

				<span className={styles['form__notice']}>*В формате Документ Word</span> */}
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
