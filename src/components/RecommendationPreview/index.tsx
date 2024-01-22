import Image from 'next/image';

import circle from '@/images/recommendations/circle.svg';
import IRecommendationPreview from '@/interfaces/RecommendationPreview';

import styles from './style.module.scss';

export default function RecommendationPreview({
	image,
	width,
	height,
	isActive,
	className,
}: IRecommendationPreview) {
	return (
		<div className={styles['card__container']}>
			<div className={styles['card__image']}>
				<Image
					src={image}
					alt="video-preview"
					width={width}
					height={height}
					isActive={isActive}
					className={className}
				/>
			</div>
			{isActive ? (
				<div className={styles['card__details']}>
					<Image
						src={circle}
						alt="circle"
						width={100}
						height={50}
						className={styles['card__details-circle']}
					/>
					<h3 className={styles['card__details-title']}>Рент-зона</h3>
					<h4 className={styles['card__details-information']}>
						Аренда строительной техники
					</h4>
				</div>
			) : null}
		</div>
	);
}
