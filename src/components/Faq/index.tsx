import { FaqData } from '@/constants/Faq';

import FaqCard from './FaqCard';
import styles from './styles.module.scss';

function Faq() {
	return (
		<section className={styles.faq}>
			<h2 className={styles.faq__title}>
				Часто задаваемые вопросы &#40;FAQ&#41;
			</h2>
			<ul className={styles.faq__list}>
				{FaqData.map((item) => {
					return <FaqCard key={item.id} item={item} />;
				})}
			</ul>
		</section>
	);
}

export default Faq;
