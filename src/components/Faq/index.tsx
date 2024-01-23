import { FaqData } from '@/constants/Faq';
import { v4 as uuidv4 } from 'uuid';

import FaqCard from '../FaqCard';
import styles from './styles.module.scss';

function Faq() {
	return (
		<section className={styles.faq}>
			<h2 className={styles.faq__title}>Часто задаваемые вопросы&nbsp;(FAQ)</h2>
			<ul className={styles.faq__list}>
				{FaqData.map((item) => {
					return <FaqCard key={uuidv4()} item={item} />;
				})}
			</ul>
		</section>
	);
}

export default Faq;
