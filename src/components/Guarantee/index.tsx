import { dataCard } from '@/constants/Guarantee/index';

import GuaranteeCard from '../GuaranteeCard/index';
import styles from './styles.module.scss';

function Guarantee() {
	return (
		<section className={styles.guarantee}>
			{/* На проверку создателю */}
			{/* добавил обертку для ограничения ширины контента 1280 */}
			{/* градиент перевесил на bg секции */}
			{/* <div className={styles.guarantee__gradient}></div> */}
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
