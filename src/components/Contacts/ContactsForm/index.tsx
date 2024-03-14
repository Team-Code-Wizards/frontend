'use client';

import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';

import AttachmentIcon from '&/images/contacts/attachment.svg';
import ClearInputIcon from '&/images/icons/ClearInputIcon';
import DeleteIcon from '&/images/icons/DeleteIcon';
import { useInfoMsg } from '@/components/InfoMsgContext';
import { contactsSchema } from '@/constants/Contacts/contactsSchema';
import useSubmitter from '@/service/submitter';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

export default function ContactsForm() {
	const [fileData, setFileData] = useState('');
	const { showFailedInfoMsg } = useInfoMsg();
	const submitter = useSubmitter();

	const { register, resetField, handleSubmit, watch, reset, formState } =
		useForm({
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

	const { 0: file } = watch('attachments');

	function readFile() {
		const fileItem = file;

		if (!fileItem) {
			console.error('No file selected.');
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(fileItem);
		reader.onload = function () {
			const fileData = reader.result;
			if (typeof fileData === 'string') {
				setFileData(fileData);
			}
		};
		reader.onerror = function (error) {
			console.error('Error reading the file: ', error);
		};
	}

	useEffect(() => {
		if (file) readFile();
	}, [file]);

	const { errors, dirtyFields, isValid } = formState;
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		if (file) {
			data.attachments = {
				filename: file.name,
				path: fileData,
			};
		}

		await submitter(data)
			.then(() => {
				reset();
				setFileData('');
			})
			.catch(() => showFailedInfoMsg());
	};

	return (
		<div className={styles['form-box']}>
			<form
				id="form-contacts"
				className={styles['form']}
				onSubmit={handleSubmit(onSubmit)}
			>
				<span className={styles['input-box']}>
					<input
						{...register('name')}
						autoComplete="name"
						type="text"
						className={`${styles['contacts-form-input']} ${
							errors.name && styles['contacts-form-input_error']
						} ${
							!errors.name &&
							dirtyFields?.name &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Имя*"
					/>
					{dirtyFields?.name && (
						<div
							className={styles['input-clear-btn']}
							onClick={() => resetField('name')}
						>
							<ClearInputIcon />
						</div>
					)}
					<span className={styles['input-error-message']}>
						{errors.name?.message}
					</span>
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('tel')}
						autoComplete="tel"
						type="tel"
						className={`${styles['contacts-form-input']} ${
							errors.tel && styles['contacts-form-input_error']
						} ${
							!errors.tel &&
							dirtyFields?.tel &&
							styles['contacts-form-input_success']
						}`}
						placeholder="Телефон*"
					/>
					{dirtyFields?.tel && (
						<div
							className={styles['input-clear-btn']}
							onClick={() => {
								resetField('tel');
							}}
						>
							<ClearInputIcon />
						</div>
					)}
					<span className={styles['input-error-message']}>
						{errors.tel?.message}
					</span>
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('mail')}
						type="email"
						autoComplete="email"
						className={`${styles['contacts-form-input']} ${
							errors.mail && styles['contacts-form-input_error']
						} ${
							!errors.mail &&
							dirtyFields?.mail &&
							styles['contacts-form-input_success']
						}`}
						placeholder="E-mail*"
					/>
					{dirtyFields?.mail && (
						<div
							className={styles['input-clear-btn']}
							onClick={() => resetField('mail')}
						>
							<ClearInputIcon />
						</div>
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
						<div
							className={styles['input-clear-btn']}
							onClick={() => resetField('message')}
						>
							<ClearInputIcon />
						</div>
					)}
				</span>
				<input
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
						<Image src={AttachmentIcon} alt="file" />
						<span className={styles['contacts-form-file-name_text']}>
							{file.name}
						</span>
						<button
							className={styles['contacts-form-file-name__button']}
							onClick={() => resetField('attachments')}
							aria-label="Delete"
						>
							<DeleteIcon />
						</button>
					</span>
				)}

				<span className={styles['form__notice']}>*В формате Документ Word</span>
				<button
					type="submit"
					className={styles['form__button']}
					disabled={!isValid}
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
