import ICard from './interface';
import styles from './styles.module.scss';

export default function Card({ title, description, icons }: ICard) {
	return (
		<>
			<h5 className={styles['card__title']}>
				{...icons}
				<span>{title}</span>
			</h5>
			<p className={styles['card__description']}>{description}</p>
		</>
	);
}
