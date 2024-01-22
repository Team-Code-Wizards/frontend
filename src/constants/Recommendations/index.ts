import styles from '@/components/RecommendationPreview/style.module.scss';
import IRecomendationPreview from '@/interfaces/RecommendationPreview';

import centerSlide from '../../images/recommendations/center-slide.png';
import leftSlide from '../../images/recommendations/left-slide.png';
import rightSlide from '../../images/recommendations/right-slide.png';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: 0,
		title: '',
		info: '',
		image: leftSlide,
		width: 264,
		height: 314,
		isActive: false,
		className: styles['card__image-left'],
	},
	{
		id: 1,
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: centerSlide,
		width: 712,
		height: 423,
		isActive: true,
		className: styles['card__image-center'],
	},
	{
		id: 2,
		title: '',
		info: '',
		image: rightSlide,
		width: 264,
		height: 314,
		isActive: false,
		className: styles['card__image-right'],
	},
];
