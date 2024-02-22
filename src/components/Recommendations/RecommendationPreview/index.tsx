import { useEffect, useState } from 'react';

import Image from 'next/image';

import play from '&/images/recommendations/play.svg';

import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	title,
	info,
	image,
	isActive,
	icon,
	siteUrl,
	videoUrl,
}: IRecommendationPreview) {
	const [isShowVideo, setIsShowVideo] = useState(false);
	function handleClick() {
		setIsShowVideo((prev) => !prev);
	}

	useEffect(() => {
		if (!isActive) {
			setIsShowVideo(false);
		}
	}, [isActive]);

	return isActive ? (
		isShowVideo ? (
			<div className={styles['main-card-container']}>
				<div className={styles['card-container']}>
					<video
						width="100%"
						className={styles['card-container__video']}
						controls
						src={videoUrl}
						autoPlay
					/>
					<div className={styles['card-container__glass']}></div>
				</div>
				<div className={styles['card__details']}>
					<a
						href={siteUrl}
						target="_blank"
						className={`${styles['card__details_link']} ${styles['card__details_link-avatar']}`}
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
			<div className={styles['main-card-container']}>
				<div className={styles['card-container']} onClick={handleClick}>
					<Image
						src={image}
						alt="video-preview"
						className={`${styles[`card-image`]} ${styles[`card-image_active`]}`}
					/>
					<span className={styles['card-icon-play']}>
						<Image src={play} alt="Воспроизведение видео" />
					</span>
				</div>
				<div className={styles['card__details']}>
					<a
						href={siteUrl}
						target="_blank"
						className={`${styles['card__details_link']} ${styles['card__details_link-avatar']}`}
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
		)
	) : (
		<div className={styles['card-container']}>
			<Image src={image} alt="video-preview" className={styles[`card-image`]} />
		</div>
	);
}
