import * as Yup from 'yup';

export const siteOrderSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Минимум 2 символа').trim(),
	tel: Yup.number()
		.required('Введите номер телефона')
		.min(10)
		.positive()
		.integer(),
	register: Yup.object(),
	control: Yup.object(),
});
