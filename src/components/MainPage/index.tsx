import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* Подключаем свои компоненты тут */}
			<Choice />
			<Interaction />
		</main>
	);
}
