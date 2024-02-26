import type { Metadata } from 'next';

// import { Inter } from 'next/font/google';
import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';

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
		<html lang="ru" style={{ scrollBehavior: 'smooth' }}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMKTG44L');</script>
			<body className="body">
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMKTG44L"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
				<YandexMetrica />
				{children}
			</body>
		</html>
	);
}
