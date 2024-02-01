import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';

import centerSlide from '../../../public/images/recommendations/center-slide.webp';
import leftSlide from '../../../public/images/recommendations/left-slide.webp';
import rightSlide from '../../../public/images/recommendations/right-slide.webp';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		title: 'Василёк',
		info: 'Ивановский трикотаж',
		image: leftSlide,
		className: '_left',
		isActive: false,
	},
	{
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: centerSlide,
		className: '_center',
		isActive: true,
	},
	{
		title: 'Чистый город',
		info: 'Вывоз мусора',
		image: rightSlide,
		className: '_right',
		isActive: false,
	},
];
