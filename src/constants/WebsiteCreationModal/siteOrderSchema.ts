import * as Yup from 'yup';

export const siteOrderSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Минимум 2 символа')
		.matches(/^\S.*\S$/, 'Имя не должно начинаться или заканчиваться пробелами')
		.notRequired(),
	tel: Yup.string()
		.required('Введите номер телефона')
		.matches(/^\+?\d{10,}$/g, 'Неверный формат номера телефона'),
	register: Yup.object(),
	control: Yup.object(),
});
