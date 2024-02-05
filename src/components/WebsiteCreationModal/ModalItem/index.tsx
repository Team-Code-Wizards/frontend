import { Controller } from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';

export default function ModalItem({ item, control }: IModalItemProps) {
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
				<Controller
					name={item.title}
					control={control}
					rules={{ required: item.required }}
					render={({ field }) => (
						<input
							{...field}
							placeholder={item.placeholder}
							className={styles['modal-item__input']}
							required={item.required}
							type={item.type}
						/>
					)}
				/>
			)}
		</div>
	);
}
