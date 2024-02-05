import { useState } from 'react';
import { Controller } from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import { IModalItemProps } from './interface';
import styles from './style.module.scss';

//import {IOptions} from '@/constants/WebsiteCreationModal/type';
//import {IOptions} from '@/constants/WebsiteCreationModal/type';

export default function ModalItem({ item, control }: IModalItemProps) {
	const [value, setValue] = useState(item.options);

	const handleChange = () => {
		setValue(undefined);
	};
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
						name={item.title}
						control={control}
						rules={{ required: item.required }}
						defaultValue={value}
						render={({ field }) => (
							<select
								{...field}
								className={styles['modal-item__input']}
								required={item.required}
							>
								{item.options?.map((option) => (
									<option
										key={option.label}
										value={option.value}
										onChange={handleChange}
									>
										{option.label}
									</option>
								))}
								<IconArrow />
							</select>
						)}
					/>
				</div>
			) : (
				<Controller
					name={item.title}
					defaultValue=""
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
