import Contacts from '../Contacts';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{
				/* Подключаем свои компоненты тут
				 */ <Contacts />
			}
		</main>
	);
}
