import Interaction from '@/components/Interaction/index';
import Choice from '@/components/Сhoice';

import styles from './style.module.scss';

export default function Home() {
	return (
		<main className={styles['main']}>
			<Interaction />
			<Choice />
		</main>
	);
}
