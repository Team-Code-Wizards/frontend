import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import Head from 'next/head';

import './globals.scss';

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
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
			<body className="body">{children}</body>
		</html>
	);
}
