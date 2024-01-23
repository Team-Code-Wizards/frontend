import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';

import centerSlide from '../../images/recommendations/center-slide.png';
import leftSlide from '../../images/recommendations/left-slide.png';
import rightSlide from '../../images/recommendations/right-slide.png';

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
