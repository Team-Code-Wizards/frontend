import * as yup from 'yup';

export const promoSchema = yup.object().shape({
	name: yup
		.string()
		.required('Введите имя')
		.matches(/^[а-яА-Яa-zA-Z\s]{2,30}$/, 'Неверный формат'),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s]{10,16}$/g, 'Неверный формат'),
});
