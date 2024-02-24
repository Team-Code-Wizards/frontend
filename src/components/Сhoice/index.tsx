'use client';

import { useInView } from 'react-intersection-observer';

import { data } from '@/constants/Choice';

import ChoiceCard from './ChoiceCard';
import styles from './style.module.scss';

export default function Choice() {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.2,
	});

	return (
		<section className={styles.choice}>
			<h2 className={styles.choice__title}>Почему нас выбирают:</h2>
			<ul ref={ref} className={`${styles.choice__list}`}>
				{data.map((item) => {
					return <ChoiceCard inView={inView} key={item.id} item={item} />;
				})}
			</ul>
		</section>
	);
}
