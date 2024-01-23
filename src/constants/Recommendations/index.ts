import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';
import styles from '@/components/Recommendations/RecommendationPreview/style.module.scss';

import centerSlide from '../../images/recommendations/center-slide.png';
import leftSlide from '../../images/recommendations/left-slide.png';
import rightSlide from '../../images/recommendations/right-slide.png';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: 0,
		title: 'Василёк',
		width: 264,
		height: 314,
		info: 'Ивановский трикотаж',
		image: leftSlide,
		className: styles['_left'],
		isActive: false,
	},
	{
		id: 1,
		title: 'Рент-зона',
		width: 712,
		height: 423,
		info: 'Аренда строительной техники',
		image: centerSlide,
		className: styles['_center'],
		isActive: true,
	},
	{
		id: 2,
		title: 'Чистый город',
		width: 264,
		height: 314,
		info: 'Вывоз мусора',
		image: rightSlide,
		className: styles['_right'],
		isActive: false,
	},
];
