import {Controller} from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';
import ConditionalInput from '@/components/WebsiteCreationModal/ModalItem/ConditionalInput';

export default function ModalItem({
	item,
	control,
	register,
	errors
}: IModalItemProps) {

	//const {register} = useForm<IModalItem>()

	//const pattern = item.type === 'tel' ? /[0-9+()-]+/ : undefined;
	//const validation = pattern ? { pattern: { value: pattern, message: 'Неверный формат' } } : {};
	//const validationRules = item.type === 'tel' ? { pattern: pattern, message: 'Неверный формат' } : {};
	console.log('ModalItem:',errors)

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
                 <ConditionalInput item={item} register={register} errors={errors}/>
				)}
			</div>
	);
}
