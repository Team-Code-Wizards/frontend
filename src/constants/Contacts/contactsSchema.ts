import * as yup from 'yup';

export const contactsSchema = yup.object().shape({
	name: yup.string().notRequired(),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s]{10,16}$/, 'Неверный формат номера телефона'),
	mail: yup
		.string()
		.required('Введите Email')
		.matches(
			/^([a-z0-9_.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Неверный формат Email'
		),
	message: yup.string().notRequired(),
	attachments: yup.mixed(),
});
