import { v4 as uuidv4 } from 'uuid';

import SparklesIcon from '../../../../public/images/icons/SparklesIcon';
import Card from './Card';
import ICardLine from './interface';
import style from './style.module.scss';

export default function CardLine({ title, cards }: ICardLine) {
	return (
		<div className={style['card-line__container']}>
			<h4 className={style['card-line__title']}>
				<SparklesIcon />
				<span>{title}</span>
			</h4>
			<ul className={style['card-line__list']}>
				{cards.map((el) => (
					<Card key={uuidv4()} {...el} />
				))}
			</ul>
		</div>
	);
}
