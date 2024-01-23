import Image from 'next/image';

import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	image,
	className,
}: IRecommendationPreview) {
	return (
		<Image
			src={image}
			alt="video-preview"
			className={styles[`card-image${className}`]}
		/>
	);
}
