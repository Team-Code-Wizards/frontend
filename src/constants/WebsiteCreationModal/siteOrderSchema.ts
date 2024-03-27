import * as Yup from 'yup';

export const siteOrderSchema = Yup.object().shape({
	name: Yup.string()
		.required('Введите имя')
		.matches(/^[а-яА-Яa-zA-Z]{2}[а-яА-Яa-zA-Z\s]{0,50}$/, 'Неверный формат'),
	tel: Yup.string()
		.required('Введите номер телефона')
		.matches(/^\+?(\d[\s-]?){11}$/g, 'Неверный формат номера телефона'),
	messenger: Yup.string().required('Поле обязательно к заполнению'),
	siteOrder: Yup.string().required('Поле обязательно к заполнению'),
});
