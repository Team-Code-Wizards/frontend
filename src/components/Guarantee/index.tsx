import { dataCard } from '@/constants/Guarantee/index';

import GuaranteeCard from './GuaranteeCard/index';
import styles from './styles.module.scss';

function Guarantee() {
	return (
		<section id="guarantees" className={styles.guarantee}>
			<div className={styles.guarantee__container}>
				<h2 className={styles.guarantee__title}>Наши гарантии</h2>
				<ul className={styles.guarantee__list}>
					{dataCard.map((item) => {
						return <GuaranteeCard key={item.id} item={item} />;
					})}
				</ul>
			</div>
		</section>
	);
}

export default Guarantee;
