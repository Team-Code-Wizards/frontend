import Contacts from '@/components/Contacts';
import Choice from '@/components/Сhoice';

import styles from './style.module.scss';

console.log();
export default function Home() {
	return (
		<main className={styles['main']}>
			<Choice />
			<Contacts />
		</main>
	);
}
