import PlusIcon from '@/images/icons/Plus';

import { IFaqCardProps } from './interface';
import styles from './styles.module.scss';

function FaqCard({ item }: IFaqCardProps) {
	const plus = PlusIcon();
	return (
		<li className={styles['faq-card']}>
			<div className={styles['faq-card__header']}>
				<h4 className={styles['faq-card__title']}>{item.title}</h4>
				{plus}
			</div>
			<div className={styles['faq-card__bottom']}>
				<p className={styles['faq-card__description']}>{item.description}</p>
			</div>
		</li>
	);
}

export default FaqCard;
