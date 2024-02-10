import * as Yup from 'yup';

export const siteOrderSchema = Yup.object().shape({
	tel: Yup.string()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s]{10,}$/g, 'Неверный формат номера телефона'),
	messenger: Yup.string().required('Поле обязательно к заполнению'),
	siteOrder: Yup.string().required('Поле обязательно к заполнению'),
});
