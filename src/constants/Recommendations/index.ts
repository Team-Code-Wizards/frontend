import IRecomendationPreview from '@/components/Recommendations/RecommendationPreview/interface';
import styles from '@/components/Recommendations/RecommendationPreview/style.module.scss';

import centerSlide from '../../images/recommendations/center-slide.png';
import leftSlide from '../../images/recommendations/left-slide.png';
import rightSlide from '../../images/recommendations/right-slide.png';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: 0,
		title: '',
		width: 264,
		height: 314,
		info: '',
		image: leftSlide,
		className: styles['card__image_left'],
	},
	{
		id: 1,
		title: 'Рент-зона',
		width: 712,
		height: 423,
		info: 'Аренда строительной техники',
		image: centerSlide,
		className: styles['card__image_center'],
	},
	{
		id: 2,
		title: '',
		width: 264,
		height: 314,
		info: '',
		image: rightSlide,
		className: styles['card__image_right'],
	},
];
