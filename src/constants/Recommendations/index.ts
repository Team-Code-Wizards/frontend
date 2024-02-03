import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';

import centerSlide from '../../../public/images/recommendations/center-slide.webp';
import leftSlide from '../../../public/images/recommendations/left-slide.webp';
import middleSlide from '../../../public/images/recommendations/middle-slide.webp';
import rightSlide from '../../../public/images/recommendations/right-slide.webp';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: '1997bad5-2faa-460b-8a13-10e50a1fbb8f',
		title: 'Василёк',
		info: 'Ивановский трикотаж',
		image: leftSlide,
		isActive: false,
	},
	{
		id: '1997bad5-2faa-460b-8a13-10e50a1fbb8f',
		title: 'Магия кода',
		info: 'Сайт команды',
		image: middleSlide,
		isActive: false,
	},
	{
		id: '1997bad5-2faa-460b-8a13-10e50a1fbb8f',
		title: 'Чистый город',
		info: 'Вывоз мусора',
		image: rightSlide,
		isActive: false,
	},
	{
		id: '1997bad5-2faa-460b-8a13-10e50a1fbb8f',
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: centerSlide,
		isActive: false,
	},
];
