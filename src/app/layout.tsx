import type { Metadata } from 'next';

// import { Inter } from 'next/font/google'
import './globals.scss';

// Важно
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Code Wizards',
	description:
		'Мы не просто создаем сайты. Мы строим цифровые пространства, где каждая строчка кода - это мелодия успеха вашего бизнеса',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className="body">{children}</body>
		</html>
	);
}
