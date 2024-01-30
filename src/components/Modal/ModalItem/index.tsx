import IconArrow from './../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';

export default function ModalItem({ item }: IModalItemProps) {
	return (
		<div className={styles['modal-item']}>
			<div className={styles['modal-item__wrappper']}>
				<h4 className={styles['modal-item__title']}>{item.title}</h4>
				{item.required && <span>*</span>}
			</div>
			{item.type === 'dropdown' && (
				<div className={styles['dropdown']}>
					<div
						className={`${styles['dropdown__wrapper']} ${styles['modal-item__item']}`}
					>
						<p>{item.placeholder}</p>
						{<IconArrow />}
					</div>
				</div>
			)}
			{item.type === 'textarea' && (
				<textarea
					rows={3}
					placeholder={item.placeholder}
					className={`${styles['modal-item__item']} ${styles['modal-item__item_message']}`}
				/>
			)}
			{item.type !== 'textarea' && item.type !== 'dropdown' && (
				<input
					placeholder={item.placeholder}
					className={styles['modal-item__item']}
					required={item.required ? true : false}
					type={item.type}
				/>
			)}
		</div>
	);
}
