import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import styles from './style.module.scss';

//TODO Раскомментить errors

export interface IControllerProps {
	name: string;
	control: Control;
	rules?: { [key: string]: boolean };
	register: UseFormRegister<FieldValues>;
	errors?: FieldErrors<{ [key: string]: string }> | undefined;
}

export default function ModalItem({ control, register, errors }: FieldValues) {
	//const pattern = item.type === 'tel' ? /[0-9+()-]+/ : undefined;
	//const validation = pattern ? { pattern: { value: pattern, message: 'Неверный формат' } } : {};
	//const validationRules = item.type === 'tel' ? { pattern: pattern, message: 'Неверный формат' } : {};
	//console.log('ModalItem:')

	return (
		<div className={styles['modal-item']}>
			<h4 className={styles['modal-item__title']}>Имя</h4>
			<input
				placeholder="Иван Иванов"
				className={styles['modal-item__input']}
				required={false}
				type="text"
				{...register('name')}
			/>
			<p className={styles['modal-item__error']}>
				{errors && errors.name?.message}
			</p>
			<h4 className={styles['modal-item__title_required']}>Телефон</h4>
			<input
				placeholder="+7 (900) 000-00-00"
				className={styles['modal-item__input']}
				required={true}
				type="tel"
				{...register('tel')}
			/>
			<p className={styles['modal-item__error']}>
				{errors && errors.tel?.message}
			</p>
			<h4 className={styles['modal-item__title_required']}>
				К вашему номеру подключен Viber, WhatsApp, Telegram
			</h4>
			<div className={styles['dropdown']}>
				<Controller
					name="messenger"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<div className={styles['select-container']}>
							<select
								{...field}
								className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
								required={true}
							>
								<option></option>
								<option>Да</option>
								<option>Нет (лучше звонить по номеру)</option>
							</select>
							<div className={styles['icon-arrow']}>
								<IconArrow />
							</div>
						</div>
					)}
				/>
			</div>
			<h4 className={styles['modal-item__title_required']}>Выбор сайта</h4>
			<div className={styles['dropdown']}>
				<Controller
					name="site-order"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<div className={styles['select-container']}>
							<select
								{...field}
								className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
								required={true}
							>
								<option></option>
								<option>Лендинг</option>
								<option>Интернет-магазин</option>
								<option>Копоративный сайт</option>
								<option>Блог или новостной сайт</option>
								<option>Фирменный сайт</option>
								<option>Сайт по вашему техническому заданию</option>
							</select>
							<div className={styles['icon-arrow']}>
								<IconArrow />
							</div>
						</div>
					)}
				/>
			</div>
			<h4 className={styles['modal-item__title']}>Дополнительная информация</h4>
			<input
				placeholder="Дополнительная информация"
				className={styles['modal-item__input']}
				required={false}
				type="text"
				{...register('add-info')}
			/>
		</div>
	);
}
