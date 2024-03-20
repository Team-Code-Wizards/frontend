import type { Metadata } from 'next';

import GoogleCaptchaWrapper from '@/app/GoogleCaptchaWrapper';
//import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';
//import { GoogleAnalytics } from '@next/third-parties/google';
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
	//const isProductionXYZtableDown = process.env.PROD === 'true';
	//const reverseisProductionXYZtableDown = !isProductionXYZtableDown
	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }} className="html">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
				<GoogleCaptchaWrapper>
					{/*{<p style={{ fontSize: '50px', color: 'white' }}>{isProductionXYZtableDown}</p>}*/}
					{/*{process.env.PROD === 'debug' && <YandexMetrica />}*/}
					{/*{process.env.PROD && <YandexMetrica />}*/}
					{/*{reverseisProductionXYZtableDown ? <GoogleAnalytics gaId="GTM-NMKTG44L" /> : <p style={{ fontSize: '50px' }}>SQL</p>}*/}
					{children}
				</GoogleCaptchaWrapper>
			</body>
		</html>
	);
}
