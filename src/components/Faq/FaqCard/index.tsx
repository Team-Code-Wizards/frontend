import PlusIcon from '../../../../public/images/icons/Plus';
import { IFaqCardProps } from './interface';
import styles from './styles.module.scss';

function FaqCard({
	item,
	handleClick,
}: {
	item: IFaqCardProps;
	handleClick: (question: IFaqCardProps) => void;
}) {
	return (
		<li className={styles['faq-card']}>
			<details
				open={item.active}
				onClick={(e) => {
					e.preventDefault();
					handleClick(item);
				}}
			>
				<summary className={styles['faq-card__header']} onClick={() => {}}>
					<h4 className={styles['faq-card__title']}>{item.title}</h4>
					<PlusIcon />
				</summary>
				<p className={styles['faq-card__description']}>{item.description}</p>
			</details>
		</li>
	);
}

export default FaqCard;
