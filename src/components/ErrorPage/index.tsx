import React from 'react';

import styles from './styles.module.scss';

export default function Error() {
	return (
		<main>
			<div className={styles['first-part']}>
				<section className={styles['not-found']}>
					<h1 className={styles['not-found__title']}>404</h1>
				</section>
			</div>
			<div className={styles['second-part']}>
				<p className={styles['not-found__description']}>
					Такой страницы не существует
				</p>
				<div className={styles['not-found__back-link']}>
					<button className={styles['not-found__button']} type="button">
						Вернуться на главную
					</button>
				</div>
			</div>
		</main>
	);
}
