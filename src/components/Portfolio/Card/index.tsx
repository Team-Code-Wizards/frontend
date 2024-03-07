import Image from 'next/image';

import ArrowIcon from '../../../../public/images/icons/ArrowIcon';
import IPortfolioCard from './interface';
import styles from './styles.module.scss';

export default function PortfolioCard({
	tag,
	title,
	image,
	link,
	imageNumber,
}: IPortfolioCard) {
	return (
		<>
			<div className={styles['card__image']}>
				<picture>
					<source
						media="(max-width: 835px)"
						srcSet={`/images/portfolio/image-${imageNumber}-834px.webp`}
					/>
					<source
						media="(max-width: 391px)"
						srcSet={`/images/portfolio/image-${imageNumber}-390px.webp`}
					/>
					<Image
						src={image}
						alt="portfolioIcon"
						className={styles['card__bg']}
					/>
				</picture>
				<span className={styles['card__tag']}>{tag}</span>
				<a
					className={styles['card__link']}
					href={link}
					target="blank"
					rel="noreferrer"
					aria-label="Visit site"
				>
					<ArrowIcon />
				</a>
			</div>
			<a
				className={styles['card__title']}
				href={link}
				target="blank"
				rel="noreferrer"
			>
				{title}
			</a>
		</>
	);
}
