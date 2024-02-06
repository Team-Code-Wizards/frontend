'use client';

import { useState } from 'react';

import PlusIcon from '../../../../public/images/icons/Plus';
import { IFaqCardProps } from './interface';
import styles from './styles.module.scss';

function FaqCard({ item }: IFaqCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	function toggleDescription() {
		setIsOpen(!isOpen);
	}
	return (
		<li className={styles['faq-card']}>
			<details open={isOpen}>
				<summary
					className={styles['faq-card__header']}
					onClick={toggleDescription}
				>
					<h4 className={styles['faq-card__title']}>{item.title}</h4>
					<PlusIcon />
				</summary>
				<p className={styles['faq-card__description']}>{item.description}</p>
			</details>
		</li>
	);
}

export default FaqCard;
