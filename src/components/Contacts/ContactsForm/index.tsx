// с контектсом 2
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import { inputs } from '@/constants/Contacts';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from './Input';
import styles from './styles.module.scss';

export const schema = yup.object().shape({
	name: yup.string().min(2, 'Минимум 2 символа').trim(),
	tel: yup
		.number()
		.required('Введите номер телефона')
		.min(10)
		.positive()
		.integer(),
});
interface IFormInput {
	name: string;
	tel: number;
	email: string;
	message: string;
	file: string;
}

export default function ContactsForm() {
	//
	const methods = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	const { formState } = useForm();

	// const { handleSubmit, register } = useForm<IFormInput>();
	const onSubmit = (data: IFormInput) => console.log(data);
	// const onSubmit = (data) => console.log(data);
	//
	return (
		<div className={styles['form-box']}>
			<FormProvider {...methods}>
				<form
					className={styles['form']}
					onSubmit={methods.handleSubmit(onSubmit)}
					// onSubmit={handleSubmit(onSubmit)}
				>
					{/* <input {...register('name')} /> */}
					{inputs.map((el) => (
						<Input key={`key${el.id}`} {...el} formState={formState} />
					))}
					<span className={styles['form__notice']}>
						*В формате Документ Word
					</span>
					<button className={styles['form__button']} type="submit">
						Отправить
					</button>
					<span className={styles['form__notice']}>
						Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
						персональных данных.
					</span>
				</form>
			</FormProvider>
		</div>
	);
}

// // С КОНТЕКСТОМ

// import { SubmitHandler, useForm } from 'react-hook-form';
// import { FieldValues, FormProvider } from 'react-hook-form';
// import { inputs } from '@/constants/Contacts';
// import Input from './Input';
// import IContactsFormProps from './interface';
// import styles from './styles.module.scss';

// interface IFormInput {
// 	name: string;
// 	tel: number;
// 	email: string;
// 	message: string;
// 	file: string;
// }

// export default function ContactsForm() {
// 	//
// 	const methods = useForm<IFormInput>();
// 	const { handleSubmit, register } = useForm<IFormInput>();
// 	const onSubmit = (data: IFormInput) => console.log(data);
// 	// const onSubmit = (data) => console.log(data);
// 	//
// 	return (
// 		<div className={styles['form-box']}>
// 			<FormProvider {...methods}>
// 				<form
// 					className={styles['form']}
// 					onSubmit={methods.handleSubmit(onSubmit)}
// 					// onSubmit={handleSubmit(onSubmit)}
// 				>
// 					{/*  */}
// 					{/* <input {...register('name')} /> */}
// 					{/*  */}
// 					{inputs.map((el) => (
// 						<Input key={`key${el.id}`} {...el} />
// 					))}
// 					<span className={styles['form__notice']}>
// 						*В формате Документ Word
// 					</span>
// 					<button className={styles['form__button']} type="submit">
// 						Отправить
// 					</button>
// 					<span className={styles['form__notice']}>
// 						Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
// 						персональных данных.
// 					</span>
// 				</form>
// 			</FormProvider>
// 		</div>
// 	);
// }

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
