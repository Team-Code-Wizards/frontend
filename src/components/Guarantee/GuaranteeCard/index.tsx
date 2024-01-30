import Image from 'next/image';

import { IGuaranteeCardProps } from './interface';
import styles from './styles.module.scss';

// TODO убрать в стилях сокрытие всех карточек начиная со второй для мобильных экранов
// &:nth-of-type(n+2) display: none

function GuaranteeCard({ item }: IGuaranteeCardProps) {
	return (
		<li className={styles['guarantee-card']}>
			<Image
				src={item.pathIcon}
				alt={item.title}
				width={0}
				height={0}
				className={styles['guarantee-card__image']}
			/>
			<div>
				<h3 className={styles['guarantee-card__title']}>{item.title}</h3>
				<p className={styles['guarantee-card__description']}>
					{item.description}
				</p>
			</div>
		</li>
	);
}

export default GuaranteeCard;
