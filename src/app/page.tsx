import Guarantee from '@/components/Guarantee/index';

import styles from './style.module.scss';

export default function Home() {
	return (
		<main className={styles['.main']}>
			<Guarantee />
		</main>
	);
}
