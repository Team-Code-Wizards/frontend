import ArrwoChevronIcon from '@/images/icons/ArrowChevronIcon';
import image41 from '@/images/portfolio/image-41.png';
import image42 from '@/images/portfolio/image-42.png';
import image43 from '@/images/portfolio/image-43.png';
import image44 from '@/images/portfolio/image-44.png';
import image45 from '@/images/portfolio/image-45.png';

import PortfolioCard from './Card';
import IPortfolioCard from './Card/interface';
import style from './style.module.scss';

export default function Portfolio() {
	const portfolioCards: IPortfolioCard[] = [
		{ tag: 'Интернет-магазин', title: 'Любимый василек', image: image41 },
		{ tag: 'Лендинг', title: 'Смарт ремонт', image: image42 },
		{ tag: 'Корпоративный сайт', title: 'Рент-зона', image: image43 },
		{ tag: 'Интернет-магазин', title: 'Мебель-Екатеринбург', image: image44 },
		{ tag: 'Корпоративный сайт', title: 'Чистый город', image: image45 },
	];

	return (
		<section className={style['portfolio__container']}>
			<span className={style['portfolio__title']}>Портфолио</span>
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
		</section>
	);
}
