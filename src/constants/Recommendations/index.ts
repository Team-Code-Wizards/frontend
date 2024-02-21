import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';

import centerSlide from '../../../public/images/recommendations/center-slide.webp';
import cloth from '../../../public/images/recommendations/cloth.svg';
import garbageTruck from '../../../public/images/recommendations/garbage-truck.svg';
import leftSlide from '../../../public/images/recommendations/left-slide.webp';
import rightSlide from '../../../public/images/recommendations/right-slide.webp';
import truck from '../../../public/images/recommendations/truck.svg';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: '1997bad5-2faa-460b-8a13-10e50a1fbb8f',
		title: 'Василек',
		info: 'Ивановский трикотаж',
		image: leftSlide,
		isActive: false,
		icon: cloth,
		siteUrl: 'https://ivanovskij-trikotazh.ru/',
		videoUrl: './video/video3.mp4',
	},
	{
		id: '83cb7c21-c399-45f0-9608-b8a4a892ecc7',
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: centerSlide,
		isActive: false,
		icon: truck,
		siteUrl: 'https://rent-zona.ru/',
		videoUrl: './video/video1.mp4',
	},
	{
		id: '57912bd4-705d-4878-8f9f-50ae2a5f69fb',
		title: 'Чистый город',
		info: 'Вывоз мусора',
		image: rightSlide,
		isActive: false,
		icon: garbageTruck,
		siteUrl: 'https://musor-krsk.ru/',
		videoUrl: './video/video2.mp4',
	},
];
