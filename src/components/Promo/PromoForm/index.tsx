'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import ClearInputIcon from '&/images/icons/ClearInputIcon';
import { useInfoMsg } from '@/components/InfoMsgContext';
import { promoSchema } from '@/constants/Promo/promoSchema';
import useSubmitter from '@/service/submitter';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

export default function Form() {
	const { showFailedInfoMsg } = useInfoMsg();
	const submitter = useSubmitter();
	const {
		register,
		resetField,
		handleSubmit,
		reset,
		formState: { errors, dirtyFields, isValid, isDirty },
	} = useForm({
		defaultValues: {
			name: '',
			tel: '',
		},
		mode: 'onChange',
		resolver: yupResolver(promoSchema),
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await submitter(data)
			.then(() => {
				reset();
			})
			.catch(() => showFailedInfoMsg());
	};

	return (
		<form
			id="form-promo"
			className={styles['promo-form']}
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className={styles['promo-form__title']}>
				Не желаете тратить время на чтение длинных текстов? <br />
				<span className={styles['promo-form__message']}>
					Просто оставьте свои данные и мы свяжемся с вами в ближайшее время и
					ответим на все ваши вопросы
				</span>
			</p>
			<span className={styles['promo-form__input-box']}>
				<label className={styles['promo-form__input-box']} htmlFor="promoName">
					Имя
				</label>
				<input
					{...register('name')}
					id="promoName"
					type="text"
					className={styles['promo-form__input']}
					placeholder="Иван"
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

			<span className={styles['promo-form__input-box']}>
				<label className={styles['promo-form__input-box']} htmlFor="promoPhone">
					Телефон
				</label>
				<input
					{...register('tel')}
					id="promoPhone"
					type="tel"
					className={`${styles['promo-form__input']} ${
						errors.tel && styles['promo-form__input_error']
					} ${
						!errors.tel &&
						dirtyFields?.tel &&
						styles['promo-form__input_success']
					}`}
					placeholder="+7 (900) 000-00-00"
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

			<button
				className={`${styles['promo-form__button']} ${
					!isValid && isDirty && styles['promo-form__button_disabled']
				}`}
				type="submit"
			>
				Отправить
			</button>
		</form>
	);
}
