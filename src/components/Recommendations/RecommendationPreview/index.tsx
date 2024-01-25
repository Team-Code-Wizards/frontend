import Image from 'next/image';

import circle from '../../../../public/images/recommendations/circle.svg';
import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	image,
	className,
}: IRecommendationPreview) {
	return className === '_center' ? (
		<div className={styles['main-card-container']}>
			<Image
				src={image}
				alt="video-preview"
				className={styles[`card-image${className}`]}
			/>
			<div className={styles['card__details']}>
				<Image
					className={styles['card__details_circle']}
					src={circle}
					alt="circle"
				/>
				<div className={styles['card__details__container']}>
					<h3 className={styles['card__details_title']}>Рент-зона</h3>
					<h4 className={styles['card__details_information']}>
						Аренда строительной техники
					</h4>
				</div>
			</div>
		</div>
	) : (
		<Image
			src={image}
			alt="video-preview"
			className={styles[`card-image${className}`]}
		/>
	);
}
