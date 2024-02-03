import IconArrow from '../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';

export default function ModalItem({ item }: IModalItemProps) {
	return (
		<div className={styles['modal-item']}>
			<h4
				className={
					!item.required
						? styles['modal-item__title']
						: styles['modal-item__title_required']
				}
			>
				{item.title}
			</h4>
			{item.type === 'dropdown' ? (
				<div className={styles['dropdown']}>
					<p>{item.options![0]}</p>
					<IconArrow />
				</div>
			) : (
				<input
					placeholder={item.placeholder}
					className={styles['modal-item__input']}
					required={item.required}
					type={item.type}
				/>
			)}
		</div>
	);
}
