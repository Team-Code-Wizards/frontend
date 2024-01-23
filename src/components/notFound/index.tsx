import styles from './styles.module.scss';

export default function NotFound() {
	return (
		<div className={styles['container']}>
			<h1 className={styles['container_name']}>404</h1>
			<p className={styles['container_description']}>
				Такой страницы не существует.
			</p>
			<button className={styles['container_button']}>
				Вернуться на главную
			</button>
		</div>
	);
}
