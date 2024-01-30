import Image from 'next/image';

import ArrowIcon from '../../../../public/images/icons/ArrowIcon';
import IPortfolioCard from './interface';
import styles from './styles.module.scss';

export default function PortfolioCard({ tag, title, image }: IPortfolioCard) {
	return (
		<div className={styles['card__container']}>
			<div className={styles['card__image']}>
				<Image
					src={image}
					alt="portfolioIcon"
					width={500}
					className={styles['card__bg']}
				/>
				<span className={styles['card__tag']}>{tag}</span>
			</div>
			<a className={styles['card__link']} href="#">
				<ArrowIcon />
			</a>
			<h3 className={styles['card__title']}>{title}</h3>
		</div>
	);
}
