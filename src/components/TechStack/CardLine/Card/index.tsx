import ICard from './interface';
import style from './style.module.scss';

export default function Card({ title, description, icons }: ICard) {
	return (
		<li className={style['card__box']}>
			<h5 className={style['card__title']}>
				{icons.map((el) => el)}
				<span>{title}</span>
			</h5>
			<p className={style['card__description']}>{description}</p>
		</li>
	);
}
