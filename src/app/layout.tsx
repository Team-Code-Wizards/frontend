import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
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
				{/* <!-- Yandex.Metrika counter --> */}
				<script type="text/javascript" >
				   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				   m[i].l=1*new Date();
				   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
				
				   ym(96308291, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
				   });
				</script>
				<noscript><div><img src="https://mc.yandex.ru/watch/96308291" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
				{/* <!-- /Yandex.Metrika counter --> */}
			</Head>
			<body className="body">{children}</body>
		</html>
	);
}
