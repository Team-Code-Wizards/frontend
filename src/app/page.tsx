import Header from '@/components/Header';

import styles from './style.module.scss';

console.log();
export default function Home() {
	return (
		<main className={styles['.main']}>
			<Header />
		</main>
	);
}