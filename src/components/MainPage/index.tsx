import Header from '../Header';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* Подключаем свои компоненты тут */}
			<Header />
		</main>
	);
}
