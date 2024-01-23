import Image from 'next/image';

import ArrowIcon from '../../../../public/images/icons/ArrowIcon';
import IPortfolioCard from './interface';
import style from './style.module.scss';

export default function PortfolioCard({ tag, title, image }: IPortfolioCard) {
	return (
		<div className={style['card__container']}>
			<div className={style['card__image']}>
				<Image
					src={image}
					alt="portfolioIcon"
					width={500}
					className={style['card__bg']}
				/>
				<span className={style['card__tag']}>{tag}</span>
			</div>
			<a className={style['card__link']} href="#">
				<ArrowIcon />
			</a>
			<h3 className={style['card__title']}>{title}</h3>
		</div>
	);
}
