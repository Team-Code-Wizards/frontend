import * as yup from 'yup';

export const contactsSchema = yup.object().shape({
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
