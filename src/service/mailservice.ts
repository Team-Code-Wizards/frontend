import nodemailer from 'nodemailer';

import { ISendMailItem } from './type';

export default function sendMail({
	description,
	name,
	phone,
	mail,
	messanger,
	choice,
	message,
	attachments,
}: ISendMailItem) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'sheila.gutmann28@ethereal.email',
			pass: 'dRKBjtunBJBNXCw6nh',
		},
	});

	const mailOptions = {
		from: 'new-client-wizards@yandex.ru',
		to: 'email@code-wizards.team',
		subject: 'Заявка на создание сайта',
		html: `
          <h2>Заявка на создание сайта</h2>
          ${description ? '<h3>Примечание:</h3> <p>Связаться и ответить на вопросы</p>' : ''}
          ${name ? `<h3>Имя:</h3> <p>${name}</p>` : ''}
          ${phone ? `<h3>Номер:</h3> <p>${phone}</p>` : ''}
          ${mail ? `<h3>Mail:</h3> <p>${mail}</p>` : ''}
          ${messanger ? `<h3>Мессенджеры:</h3> <p>${messanger}</p>` : ''}
          ${choice ? `<h3>Выбор сайта:</h3> <p>${choice}</p>` : ''}
          ${message ? `<h3>Сообщение:</h3> <p>${message}</p>` : ''}
          ${attachments ? `<h3>Приложение:</h3>` : ''}
        `,
		attachments: [
			{
				filename: attachments?.filename,
				path: attachments?.path,
			},
		],
	};

	transporter.sendMail(mailOptions);
}
