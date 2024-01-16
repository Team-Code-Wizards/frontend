import Choice from '@/components/Сhoice';
import Services from '@/components/Services';

import styles from './style.module.scss';

export default function Home() {
	return (
		(
		<main className={styles['main']}>
			<Choice />		
			<Services />
		</main>
	)
	);
}
