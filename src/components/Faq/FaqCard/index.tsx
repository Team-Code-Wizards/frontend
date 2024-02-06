import PlusIcon from '../../../../public/images/icons/Plus';
import { IFaqCardProps } from './interface';
// import { IFaqData } from "@/constants/Faq/type";
import styles from './styles.module.scss';

// import { useEffect, useState } from "react";

function FaqCard({
	item,
	handleClick,
}: {
	item: IFaqCardProps;
	handleClick: (question: IFaqCardProps) => void;
}) {
	// const [open, setOpen] = useState(item.active);
	//   useEffect(() => {
	//     console.log(item);
	//   }, [item]);

	//   const onToggle = () => {
	//     setOpen(!open);
	//   };

	return (
		<li className={styles['faq-card']}>
			<details
				open={item.active}
				onClick={(e) => {
					e.preventDefault();
					//          onToggle();
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
