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
		id: 'cba43bd3-128b-40db-883b-a6812c53a841',
		title: 'Магия кода',
		info: 'Сайт команды',
		image: middleSlide,
		isActive: false,
	},
	{
		id: '57912bd4-705d-4878-8f9f-50ae2a5f69fb',
		title: 'Чистый город',
		info: 'Вывоз мусора',
		image: rightSlide,
		isActive: false,
	},
	{
		id: '83cb7c21-c399-45f0-9608-b8a4a892ecc7',
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: centerSlide,
		isActive: false,
	},
];
