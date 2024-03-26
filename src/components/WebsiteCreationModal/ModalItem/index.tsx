import { Controller, FieldValues } from 'react-hook-form';

import IconArrow from '../../../../public/images/modal/IconArrow';
import styles from './style.module.scss';

export default function ModalItem({ control, register, errors }: FieldValues) {
	return (
		<div className={styles['modal-item']}>
			<div className={styles['modal-item__left']}>
				<h4 className={styles['modal-item__title_required']}>Имя</h4>
				<div className={styles['modal-item__input-container']}>
					<input
						placeholder="Иван Иванов"
						className={styles['modal-item__input']}
						type="text"
						{...register('name')}
					/>
					<p className={styles['modal-item__error']}>
						{errors && errors.name?.message}
					</p>
				</div>
				<h4 className={styles['modal-item__title_required']}>Телефон</h4>
				<div className={styles['modal-item__input-container']}>
					<input
						placeholder="+7 900 000 00 00"
						className={styles['modal-item__input']}
						type="tel"
						{...register('tel')}
					/>
					<p className={styles['modal-item__error']}>
						{errors && errors.tel?.message}
					</p>
				</div>
				<h4 className={styles['modal-item__title_required']}>
					К вашему номеру подключен Viber, WhatsApp, Telegram
				</h4>
				<div className={styles['dropdown']}>
					<Controller
						name="messenger"
						control={control}
						render={({ field }) => (
							<div className={styles['modal-item__input-container']}>
								<select
									{...field}
									className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
								>
									<option></option>
									<option>Да</option>
									<option>Нет (лучше звонить по номеру)</option>
								</select>
								<p className={styles['modal-item__error']}>
									{errors && errors.messenger?.message}
								</p>
								<div className={styles['icon-arrow']}>
									<IconArrow />
								</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className={styles['modal-item__right']}>
				<h4 className={styles['modal-item__title_required']}>Выбор сайта</h4>
				<div className={styles['dropdown']}>
					<Controller
						name="siteOrder"
						control={control}
						render={({ field }) => (
							<div className={styles['modal-item__input-container']}>
								<select
									{...field}
									className={`${styles['modal-item__input']} ${styles['select']} ${styles['option']}`}
								>
									<option></option>
									<option>Лендинг</option>
									<option>Интернет-магазин</option>
									<option>Корпоративный сайт</option>
									<option>Блог или новостной сайт</option>
									<option>Фирменный сайт</option>
									<option>Сайт по вашему ТЗ</option>
								</select>
								<p className={styles['modal-item__error']}>
									{errors && errors.siteOrder?.message}
								</p>
								<div className={styles['icon-arrow']}>
									<IconArrow />
								</div>
							</div>
						)}
					/>
				</div>
				<h4 className={styles['modal-item__title']}>
					Дополнительная информация
				</h4>
				<div className={styles['modal-item__input-container']}>
					<input
						placeholder="Сообщение (не обязательно)"
						className={styles['modal-item__input']}
						type="text"
						{...register('message')}
					/>
				</div>
			</div>
		</div>
	);
}
