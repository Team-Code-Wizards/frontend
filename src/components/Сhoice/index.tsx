import { data } from '@/constants/choice';

import ChoiceCard from '../ChoiceCard';
import styles from './style.module.scss';

export default function Choice() {
	return (
		<div className={styles.choice}>
			<h2 className={styles.choice__title}>Почему нас выбирают:</h2>
			<ul className={styles.choice__list}>
				{data.map((item) => {
					return <ChoiceCard key={item.title} item={item} />;
				})}
			</ul>
		</div>
	);
}
