import Image from 'next/image';

import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	title,
	info,
	image,
	isActive,
	icon,
	siteUrl,
}: IRecommendationPreview) {
	return isActive ? (
		<div className={styles['main-card-container']}>
			<div className={styles['card-container']}>
				<Image
					src={image}
					alt="video-preview"
					className={styles[`card-image`]}
				/>
			</div>
			<div className={styles['card__details']}>
				<a
					href={siteUrl}
					target="_blank"
					className={styles['card__details_link']}
				>
					<Image src={icon} alt="avatar" />
				</a>
				<div className={styles['card__details__container']}>
					<a
						href={siteUrl}
						target="_blank"
						className={styles['card__details_link']}
					>
						<h3 className={styles['card__details_title']}>{title}</h3>
					</a>
					<h4 className={styles['card__details_information']}>{info}</h4>
				</div>
			</div>
		</div>
	) : (
		<div className={styles['card-container']}>
			<Image src={image} alt="video-preview" className={styles[`card-image`]} />
		</div>
	);
}
