import * as yup from 'yup';

export const promoSchema = yup.object().shape({
	name: yup
		.string()
		.required('Введите имя')
		.matches(/^[а-яА-Яa-zA-Z]{2}[а-яА-Яa-zA-Z\s]{0,50}$/, 'Неверный формат'),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?(\d[\s-]?){11}$/g, 'Неверный формат'),
});
