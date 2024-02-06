import { Controller } from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';

export default function ModalItem({
	item,
	register,
	control,
}: IModalItemProps) {
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
					<Controller
						name={item.name}
						control={control}
						rules={{ required: item.required }}
						render={({ field }) => (
							<div className={styles['select-container']}>
								<select
									{...field}
									className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
									required={item.required}
								>
									{item.options?.map((option) => (
										<option key={option.label} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								<div className={styles['icon-arrow']}>
									<IconArrow />
								</div>
							</div>
						)}
					/>
				</div>
			) : (
				<input
					placeholder={item.placeholder}
					className={styles['modal-item__input']}
					required={item.required}
					type={item.type}
					pattern={item.pattern ? item.pattern : undefined}
					{...register(item.name)}
				/>
			)}
		</div>
	);
}
