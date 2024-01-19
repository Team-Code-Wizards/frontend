import Contacts from '../Contacts';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* Подключаем свои компоненты тут */}

			<Choice />
			<Guarantee />
			<Interaction />
			<Contacts />
		</main>
	);
}
