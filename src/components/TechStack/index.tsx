import { cardLines } from '@/constants/TechStack';
import { v4 as uuidv4 } from 'uuid';

import StarIcon from '../../../public/images/icons/StarIcon';
import CardLine from './CardLine';
import styles from './styles.module.scss';

export default function TechStack() {
	return (
		<section className={styles['tech-stack__container']}>
			<div className={styles['tech-stack__head']}>
				<div className={styles['tech-stack__banner']}>
					<h3 className={styles['tech-stack__title']}>
						Наш технический арсенал
					</h3>
					<p className={styles['tech-stack__subtitle']}>
						Взгляните на то, что лежит в основе нашей творческой энергии:
					</p>
				</div>
				<div className={styles['tech-stack__short-description']}>
					<StarIcon />
					<p>
						В создании выдающихся веб-решений мы вкладываем не только талант и
						страсть, но и прибегаем к передовым технологиям. наш блестящий стек
						технологий обеспечивает несравненное качество и производительность
						вашего сайта.
					</p>
				</div>
			</div>
			<div className={styles['tech-stack__main']}>
				{cardLines.map((el) => (
					<CardLine key={uuidv4()} {...el} />
				))}
			</div>
		</section>
	);
}
