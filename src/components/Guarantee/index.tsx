import { dataCard } from '@/constants/Guarantee/index';

import GuaranteeCard from '../GuaranteeCard/index';
import styles from './styles.module.scss';

function Guarantee() {
	return (
		<section className={styles.guarantee}>
			<div className={styles.guarantee__gradient}></div>
			<h2 className={styles.guarantee__title}>Наши гарантии</h2>
			<ul className={styles.guarantee__list}>
				{dataCard.map((item) => {
					return <GuaranteeCard key={item.title} item={item} />;
				})}
			</ul>
		</section>
	);
}

export default Guarantee;
