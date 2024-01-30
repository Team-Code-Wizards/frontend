import { data } from '@/constants/Choice';
import { v4 as uuidv4 } from 'uuid';

import ChoiceCard from './ChoiceCard';
import styles from './style.module.scss';

export default function Choice() {
	return (
		<section className={styles.choice}>
			<h2 className={styles.choice__title}>Почему нас выбирают:</h2>
			<ul className={styles.choice__list}>
				{data.map((item) => {
					return <ChoiceCard key={uuidv4()} item={item} />;
				})}
			</ul>
		</section>
	);
}
