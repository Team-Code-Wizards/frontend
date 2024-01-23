import Image from 'next/image';

import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	image,
	width,
	height,
	className,
}: IRecommendationPreview) {
	return (
		<>
			<div className={styles['card__image']}>
				<Image
					src={image}
					width={width}
					height={height}
					alt="video-preview"
					className={styles[`card__image${className}`]}
				/>
			</div>
		</>
	);
}
