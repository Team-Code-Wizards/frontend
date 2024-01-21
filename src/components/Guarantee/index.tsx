import { dataCard } from '@/constants/Guarantee/index';
import { v4 as uuidv4 } from 'uuid';

import GuaranteeCard from '../GuaranteeCard/index';
import styles from './styles.module.scss';

function Guarantee() {
	return (
		<section className={styles.guarantee}>
			<div className={styles.guarantee__container}>
				<h2 className={styles.guarantee__title}>Наши гарантии</h2>
				<ul className={styles.guarantee__list}>
					{dataCard.map((item) => {
						return <GuaranteeCard key={uuidv4()} item={item} />;
					})}
				</ul>
			</div>
		</section>
	);
}

export default Guarantee;
