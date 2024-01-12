import Image from 'next/image';

import { IGuaranteeCardProps } from './interface';
import styles from './styles.module.scss';

function GuaranteeCard({ item }: IGuaranteeCardProps) {
	return (
		<li className={styles['guarantee-card']}>
			<Image
				// src={`../../images/guaranteeIcons/${item.pathIcon}`}
				src={item.pathIcon}
				alt={item.title}
				className={styles['guarantee-card__image']}
			/>
			{/* <img src={'../../images/guaranteeIcons/coherent.png'} /> */}
			<div>
				<h4>{item.title}</h4>
				<p>{item.description}</p>
			</div>
		</li>
	);
}

export default GuaranteeCard;
