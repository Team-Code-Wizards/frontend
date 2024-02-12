import nodemailer from 'nodemailer';

import { ISendMailItem } from './type';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;

export default function sendMail({
	description,
	name,
	tel,
	mail,
	messenger,
	siteOrder,
	message,
	attachments,
}: ISendMailItem) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.yandex.ru',
		port: 465,
		secure: true,
		auth: {
			user: email,
			pass,
		},
	});

	const mailOptions = {
		from: email,
		to: emailTo,
		subject: 'Заявка на создание сайта',
		html: `
          <h2>Заявка на создание сайта</h2>
          ${
						description
							? '<h3>Примечание:</h3> <p>Связаться и ответить на вопросы</p>'
							: ''
					}
          ${name ? `<h3>Имя:</h3> <p>${name}</p>` : ''}
          ${tel ? `<h3>Номер:</h3> <p>${tel}</p>` : ''}
          ${mail ? `<h3>Mail:</h3> <p>${mail}</p>` : ''}
          ${messenger ? `<h3>Мессенджеры:</h3> <p>${messenger}</p>` : ''}
          ${siteOrder ? `<h3>Выбор сайта:</h3> <p>${siteOrder}</p>` : ''}
          ${message ? `<h3>Сообщение:</h3> <p>${message}</p>` : ''}
          ${attachments ? `<h3>Приложение:</h3>` : ''}
        `,
		attachments: attachments && [
			{
				filename: attachments?.[0].name,
				path: attachments?.[0].webkitRelativePath,
			},
		],
	};

	transporter.sendMail(mailOptions);
}
