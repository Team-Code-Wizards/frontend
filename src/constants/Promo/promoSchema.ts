import * as yup from 'yup';

export const promoSchema = yup.object().shape({
	name: yup
		.string()
		.required('Введите имя')
		.matches(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z\s]{1,50}$/, 'Неверный формат'),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(
			/^\+?\d[\s-]?\d\d\d[\s-]?\d\d\d[\s-]?\d\d[\s-]?\d\d$/g,
			'Неверный формат'
		),
});
