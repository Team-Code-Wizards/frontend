import { portfolioCards } from '@/constants/Portfolio';
import { v4 as uuidv4 } from 'uuid';

import ArrwoChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import PortfolioCard from './Card';
import styles from './styles.module.scss';

export default function Portfolio() {
	return (
		<section id="portfolio" className={styles['portfolio__container']}>
			<h2 className={styles['portfolio__title']}>Портфолио</h2>
			<div className={styles['portfolio__btn-group']}>
				<button className={styles['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="left" />
				</button>
				<button className={styles['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="right" />
				</button>
			</div>
			<div className={styles['portfolio__card-box']}>
				{portfolioCards.map((el) => (
					<PortfolioCard key={uuidv4()} {...el} />
				))}
			</div>
		</section>
	);
}
