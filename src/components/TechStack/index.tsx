import { cardLines } from '@/constants/TechStack';
import StarIcon from '@/images/icons/StarIcon';

import CardLine from './CardLine';
import style from './style.module.scss';

export default function TechStack() {
	return (
		<section className={style['tech-stack__container']}>
			<div className={style['tech-stack__head']}>
				<div className={style['tech-stack__banner']}>
					<h3 className={style['tech-stack__title']}>
						Наш технический арсенал
					</h3>
					<p className={style['tech-stack__subtitle']}>
						Взгляните на то, что лежит в основе нашей творческой энергии:
					</p>
				</div>
				<div className={style['tech-stack__short-description']}>
					<StarIcon />
					<p>
						В создании выдающихся веб-решений мы вкладываем не только талант и
						страсть, но и прибегаем к передовым технологиям. наш блестящий стек
						технологий обеспечивает несравненное качество и производительность
						вашего сайта.
					</p>
				</div>
			</div>
			<div className={style['tech-stack__main']}>
				{cardLines.map((el) => (
					<CardLine key={el.id} {...el} />
				))}
			</div>
		</section>
	);
}
