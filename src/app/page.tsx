import Contacts from '@/components/Contacts';

import styles from './style.module.scss';

console.log();
export default function Home() {
	return (
		<main className={styles['main']}>
			<Contacts />
		</main>
	);
}
