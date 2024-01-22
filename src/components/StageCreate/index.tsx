import IconClock from '@/images/stageCreate';

import styles from './style.module.scss';

export default function StageCreate() {
	return (
		<section className={styles['stage']}>
			<div className={styles['stage__block']}>
				<h2 className={styles['stage__title']}>Этапы создания сайта</h2>
				<span className={styles['stage__icon-wrapper']}>
					<IconClock />
				</span>
				<div className={styles['stage__wrapper']}>
					<button
						type="button"
						className={`${styles['stage__item']} ${styles['stage__item_active']}`}
					>
						1
					</button>
					<button type="button" className={styles['stage__item']}>
						2
					</button>
					<button type="button" className={styles['stage__item']}>
						3
					</button>
					<button type="button" className={styles['stage__item']}>
						4
					</button>
					<button type="button" className={styles['stage__item']}>
						5
					</button>
					<button type="button" className={styles['stage__item']}>
						6
					</button>
					<button type="button" className={styles['stage__item']}>
						7
					</button>
					<button type="button" className={styles['stage__item']}>
						8
					</button>
					<button type="button" className={styles['stage__item']}>
						9
					</button>
					<button type="button" className={styles['stage__item']}>
						10
					</button>
				</div>
				<h3 className={styles['stage__heading']}>Планирование</h3>
				<p className={styles['stage__description']}>
					Определение целей, целевой аудитории и основных требований к сайту,
					создание структуры сайта, и разработка технического задания.
				</p>
				<button type="button" className={styles['stage__btn']}>
					Следующий этап
				</button>
			</div>
		</section>
	);
}
