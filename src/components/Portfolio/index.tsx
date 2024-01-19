import { portfolioCards } from '@/constants/Portfolio';
import ArrwoChevronIcon from '@/images/icons/ArrowChevronIcon';

import PortfolioCard from './Card';
import style from './style.module.scss';

export default function Portfolio() {
	return (
		<div className={style['portfolio__container']}>
			<h2 className={style['portfolio__title']}>Портфолио</h2>
			<div className={style['portfolio__btn-group']}>
				<button className={style['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="left" />
				</button>
				<button className={style['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="right" />
				</button>
			</div>
			<div className={style['portfolio__card-box']}>
				{portfolioCards.map((el) => (
					<PortfolioCard key={crypto.randomUUID()} {...el} />
				))}
			</div>
		</div>
	);
}
