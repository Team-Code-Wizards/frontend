import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ClearInputButton from './Input/ClearInputButton';
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
// 	clientName: string;
// 	clientTel: number;
// 	clientEmail: string;
// 	clientMessage: string;
// 	clientFile: string;
// }

export default function ContactsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});
	// const { handleSubmit, register } = useForm<IFormInput>();
	// const onSubmit = (data: IFormInput) => console.log(data);
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
				<span className={styles['input-box']}>
					<input
						{...register('clientName')}
						type="text"
						className={styles['contacts-form-input']}
						placeholder="Имя"
						onFocus={() => setIsActive(true)}
						onBlur={() => setIsActive(false)}
					/>
					<ClearInputButton styleKey={'input-clear-btn'} isHidden={!isActive} />
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('clientTel')}
						type="tel"
						className={styles['contacts-form-input']}
						placeholder="Телефон"
						onFocus={() => setIsActive(true)}
						onBlur={() => setIsActive(false)}
					/>
					<ClearInputButton styleKey={'input-clear-btn'} isHidden={!isActive} />
					<span>{errors.clientTel?.message}</span>
				</span>

				<span className={styles['input-box']}>
					<input
						{...register('clientEmail')}
						type="email"
						className={styles['contacts-form-input']}
						placeholder="Email"
						onFocus={() => setIsActive(true)}
						onBlur={() => setIsActive(false)}
					/>
					<ClearInputButton styleKey={'input-clear-btn'} isHidden={!isActive} />
					<span>{errors.clientEmail?.message}</span>
				</span>

				<span className={styles['textarea-box']}>
					<textarea
						{...register('clientMessage')}
						className={styles['contacts-form-input']}
						placeholder="Сообщение"
						onFocus={() => setIsActive(true)}
						onBlur={() => setIsActive(false)}
					/>
					<ClearInputButton styleKey={'input-clear-btn'} isHidden={!isActive} />
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
