import Link from 'next/link';

import styles from './styles.module.scss';

export default function NotFound() {
	return (
		<div className={styles['not-found']}>
			<div className={styles['not-found__container']}>
				<h1 className={styles['name']}>404</h1>
				<p className={styles['text']}>Такой страницы не существует.</p>
				<button type="button" className={styles['btn']}>
					<Link href="/" className={styles['link']}>
						Вернуться на главную
					</Link>
				</button>
			</div>
		</div>
	);
}
