import * as yup from 'yup';

export const promoSchema = yup.object().shape({
	name: yup.string().notRequired(),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s]{10,13}$/, 'Неверный формат номера телефона'),
});
