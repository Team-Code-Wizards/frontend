import type { Metadata } from 'next';

import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'dotenv/config';

import './globals.scss';

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
	const isProdaction = process.env.NODE_ENV === 'production';
	console.log(process.env.NODE_ENV);
	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
				{isProdaction && <YandexMetrica />}
				{isProdaction && <GoogleAnalytics gaId="GTM-NMKTG44L" />}
				{children}
			</body>
		</html>
	);
}
