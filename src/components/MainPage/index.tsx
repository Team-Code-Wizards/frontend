import Modal from '../Modal';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<Choice />
			<Modal />
		</main>
	);
}
