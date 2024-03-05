import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';
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
	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
				<GoogleAnalytics gaId="GTM-NMKTG44L" />
				<YandexMetrica />
				{children}
				{/* <YandexMetrica /> */}
			</body>
		</html>
	);
}
