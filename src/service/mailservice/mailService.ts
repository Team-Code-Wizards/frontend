import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.yandex.ru',
	pool: true,
	port: 465,
	secure: true,
	auth: {
		user: 'new-client-wizards@yandex.ru',
		pass: 'woycgjccsecenziy',
	},
});

export function sendEmail() {
	const mailOptions = {
		from: 'new-client-wizards@yandex.ru',
		to: 'email@code-wizards.team',
		text: 'Заявка на создание сайта',
		html: `
			<h2>Заявка на создание сайта</h2>
			<h3>Имя:</h3>
			<p>Виктор</p>
			<h3>Телефон:</h3>
			<p>8(800)55-35-35</p>
			<h3>Почта:</h3>
			<p>ruderalis@yandex.ru</p>
			<h3>Мессенджеры:</h3>
			<p>Да</p>
			<h3>Какой сайт:</h3>
			<p>Лендинг</p>
			<h3>Сообщение:</h3>
			<p>Блин, так круто</p>
		`,
	};

	transporter.sendMail(mailOptions);
}
