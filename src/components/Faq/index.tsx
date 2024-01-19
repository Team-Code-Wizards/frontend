import { FaqData } from '@/constants/Faq/index';

import FaqCard from '../FaqCard/index';
import styles from './styles.module.scss';

function Faq() {
	return (
		<section className={styles.faq}>
			<h2 className={styles.faq__title}>Часто задаваемые вопросы&nbsp;(FAQ)</h2>
			<ul className={styles.faq__list}>
				{FaqData.map((item) => {
					return <FaqCard key={item.title} item={item} />;
				})}
			</ul>
		</section>
	);
}

export default Faq;
