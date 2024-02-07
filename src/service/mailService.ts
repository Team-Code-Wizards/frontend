import nodemailer from 'nodemailer';

export async function sendMail() {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'jackkerouac1613@gmail.com',
			pass: 'ojobngnpmwicwsvg',
		},
	});

	const mailOptions = {
		to: 'jackkerouac1613@gmail.com',
		subject: 'TEST',
		text: 'THI IS A TEST FOR MY MEDIUM USERS',
		html: `

        `,
	};

	transporter.sendMail(mailOptions);
}
