import IRecomendationPreview from '@/interfaces/RecommendationPreview';

import circle from '../../images/recommendations/circle.svg';
import secondSlide from '../../images/recommendations/slide-center.jpg';
import firstSlide from '../../images/recommendations/slide-left.jpg';
import thirdSlide from '../../images/recommendations/видео 1.jpg';

export const recommendationsPreviews: IRecomendationPreview[] = [
	{
		id: 0,
		title: '',
		info: '',
		image: firstSlide,
		tag: '',
		width: 300,
		height: 200,
	},
	{
		id: 1,
		title: 'Рент-зона',
		info: 'Аренда строительной техники',
		image: secondSlide,
		tag: circle,
		width: 712,
		height: 423,
	},
	{
		id: 2,
		title: '',
		info: '',
		image: thirdSlide,
		tag: '',
		width: 300,
		height: 200,
	},
];
