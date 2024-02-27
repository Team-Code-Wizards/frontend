import IconStar from '&/images/choice/IconStar';

import { IChoiceItemProps } from './interface';
import styles from './style.module.scss';

export default function ChoiceCard({ item }: IChoiceItemProps) {
	return (
		<div
			className={`${styles['choice-card']} ${
				styles[`choice-card_${item.modifier}`]
			}`}
		>
			<div
				className={`${styles['choice-card__wrapper']} ${
					styles[`choice-card_${item.modifier}__wrapper`]
				}`}
			>
				{item.title && (
					<div
						className={`${styles['choice-card__column']} ${
							styles[`choice-card_${item.modifier}__column`]
						}`}
					>
						{item.iconFill && <IconStar fill={item.iconFill} />}
						<h4
							className={`${styles['choice-card__title']} ${
								styles[`choice-card_${item.modifier}__title`]
							}`}
						>
							{item.title}
						</h4>
					</div>
				)}
				{item.description && (
					<p
						className={`${styles['choice-card__description']} ${
							styles[`choice-card_${item.modifier}__description`]
						}`}
					>
						{item.description}
					</p>
				)}
			</div>
		</div>
	);
}
