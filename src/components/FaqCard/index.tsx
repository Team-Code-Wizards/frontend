import PlusIcon from '@/images/icons/Plus';

import { IFaqCardProps } from './interface';
import styles from './styles.module.scss';

function FaqCard({ item }: IFaqCardProps) {
	return (
		<li className={styles['faq-card']}>
			<details>
				<summary className={styles['faq-card__header']}>
					<h4 className={styles['faq-card__title']}>{item.title}</h4>
					<PlusIcon />
				</summary>
				<p className={styles['faq-card__description']}>{item.description}</p>
			</details>
		</li>
	);
}

export default FaqCard;
