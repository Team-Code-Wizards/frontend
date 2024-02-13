import { Controller, FieldValues } from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import styles from './style.module.scss';

export default function ModalItem({ control, register, errors }: FieldValues) {
	return (
		<div className={styles['modal-item']}>
			<h4 className={styles['modal-item__title']}>Имя</h4>
			<input
				placeholder="Иван Иванов"
				className={styles['modal-item__input']}
				type="text"
				{...register('name')}
			/>
			<p className={styles['modal-item__error']}>
				{errors && errors.name?.message}
			</p>
			<h4 className={styles['modal-item__title_required']}>Телефон</h4>
			<input
				placeholder="+7 900 000 00 00"
				className={styles['modal-item__input']}
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
					render={({ field }) => (
						<div className={styles['select-container']}>
							<select
								{...field}
								className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
							>
								<option></option>
								<option>Да</option>
								<option>Нет (лучше звонить по номеру)</option>
							</select>
							<p className={styles['modal-item__dropdown-error']}>
								{errors && errors.messenger?.message}
							</p>
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
					name="siteOrder"
					control={control}
					render={({ field }) => (
						<div className={styles['select-container']}>
							<select
								{...field}
								className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
							>
								<option></option>
								<option>Лендинг</option>
								<option>Интернет-магазин</option>
								<option>Копоративный сайт</option>
								<option>Блог или новостной сайт</option>
								<option>Фирменный сайт</option>
								<option>Сайт по вашему техническому заданию</option>
							</select>
							<p className={styles['modal-item__dropdown-error']}>
								{errors && errors.siteOrder?.message}
							</p>
							<div className={styles['icon-arrow']}>
								<IconArrow />
							</div>
						</div>
					)}
				/>
			</div>
			{errors && errors.siteOrder?.message}
			<h4 className={styles['modal-item__title']}>Дополнительная информация</h4>
			<input
				placeholder="Сообщение (не обязательно)"
				className={styles['modal-item__input']}
				type="text"
				{...register('message')}
			/>
		</div>
	);
}
