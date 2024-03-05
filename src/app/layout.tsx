import type { Metadata } from 'next';

import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';
import 'dotenv/config';
import { GoogleAnalytics } from '@next/third-parties/google';


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

	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
        {isProdaction && <YandexMetrica /> && <GoogleAnalytics gaId="GTM-NMKTG44L" />}
				{children}
			</body>
		</html>
	);
}
