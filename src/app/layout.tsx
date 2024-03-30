import type { Metadata } from 'next';

import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';

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
	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }} className="html">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
				<YandexMetrica />
				{/* <GoogleCaptchaWrapper> */}
				{/* <GoogleAnalytics gaId="GTM-NMKTG44L" /> */}
				{children}
				{/* </GoogleCaptchaWrapper> */}
			</body>
		</html>
	);
}
