import SparklesIcon from '../../../../public/images/icons/SparklesIcon';
import Card from './Card';
import ICardLine from './interface';
import styles from './styles.module.scss';

export default function CardLine({ title, cards }: ICardLine) {
	return (
		<div className={styles['card-line__container']}>
			<h4 className={styles['card-line__title']}>
				<SparklesIcon />
				<span>{title}</span>
			</h4>
			<ul className={styles['card-line__list']}>
				{cards.map((el) => (
					<Card key={el.id} {...el} />
				))}
			</ul>
		</div>
	);
}
