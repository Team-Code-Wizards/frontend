import * as yup from 'yup';

export const contactsSchema = yup.object().shape({
	clientName: yup.string().notRequired(),
	clientTel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s]{10,13}$/, 'Неверный формат номера телефона'),
	clientEmail: yup
		.string()
		.required('Введите Email')
		.matches(
			/^([a-z0-9_.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Неверный формат Email'
		),
	clientMessage: yup.string().notRequired(),
	clientFile: yup.mixed().notRequired(),
});
