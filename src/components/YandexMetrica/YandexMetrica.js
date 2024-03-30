'use client';

import { useEffect } from 'react';

const YandexMetrikaCounter = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			(function (m, e, t, r, i, k, a) {
				m[i] =
					m[i] ||
					function () {
						(m[i].a = m[i].a || []).push(arguments);
					};
				m[i].l = 1 * new Date();
				for (var j = 0; j < document.scripts.length; j++) {
					if (document.scripts[j].src === r) {
						return;
					}
				}
				k = e.createElement(t);
				a = e.getElementsByTagName(t)[0];
				k.async = 1;
				k.src = r;
				a.parentNode.insertBefore(k, a);
			})(
				window,
				document,
				'script',
				'https://mc.yandex.ru/metrika/tag.js',
				'ym'
			);
			ym(96891676, 'init', {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
				triggerEvent: true,
			});
		}
	}, []);

	return (
		<noscript>
			<div>
				<img
					src="https://mc.yandex.ru/watch/96891676"
					style={{ position: 'absolute', left: '-9999px' }}
					alt=""
				/>
			</div>
		</noscript>
	);
};
export default YandexMetrikaCounter;
// 'use client';

// import { useEffect } from 'react';

// const YandexMetrika = () => {
// 	useEffect(() => {
// 		// Функция для загрузки скрипта метрики
// 		const loadScript = (url, callback) => {
// 			const script = document.createElement('script');
// 			script.src = url;
// 			script.async = true;
// 			script.onload = callback;
// 			document.body.appendChild(script);
// 		};

// 		// Инициализация метрики после загрузки скрипта
// 		const initializeMetrika = () => {
// 			window.ym(96891676, 'init', {
// 				clickmap: true,
// 				triggerEvent: true,
// 				trackLinks: true,
// 				accurateTrackBounce: true,
// 				webvisor: true,
// 			});
// 		};

// 		// Проверка, был ли уже загружен скрипт
// 		const existingScript = Array.from(
// 			document.getElementsByTagName('script')
// 		).find((script) => script.src === 'https://mc.yandex.ru/metrika/tag.js');

// 		if (!existingScript) {
// 			loadScript('https://mc.yandex.ru/metrika/tag.js', initializeMetrika);
// 		} else {
// 			initializeMetrika();
// 		}
// 	}, []);

// 	return (
// 		<>
// 			{/* Yandex.Metrika counter */}
// 			<script
// 				type="text/javascript"
// 				dangerouslySetInnerHTML={{
// 					__html: `
//             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//             m[i].l=1*new Date();
//             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
//             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//             ym(96891676, "init", {
//               clickmap:true,
//               trackLinks:true,
//               accurateTrackBounce:true,
//               webvisor:true
//             });
//           `,
// 				}}
// 			/>
// 			<noscript>
// 				<div>
// 					<img
// 						src="https://mc.yandex.ru/watch/96891676"
// 						style={{ position: 'absolute', left: '-9999px' }}
// 						alt=""
// 					/>
// 				</div>
// 			</noscript>
// 			{/* /Yandex.Metrika counter */}
// 		</>
// 	);
// };

// export default YandexMetrika;
