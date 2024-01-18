import style from './style.module.scss';

//TODO после слияния с девом обновить иконку

export default function Portfolio() {
	return (
		<div className={style['card__container']}>
			<div className={style['card__image']}>
				<span className={style['card__tag']}></span>
			</div>
			<a className={style['card__link']} href="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M7 17L17 7M17 7H9M17 7V15"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="square"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
			<h3 className={style['card__title']}>Любимый василек</h3>
		</div>
	);
}
