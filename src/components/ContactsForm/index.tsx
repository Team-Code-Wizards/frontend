import { IContactsFormProps } from './interface';
import styles from './style.module.scss';

//TODO добавить кнопку очистки инпутов когда они активны

//TODO разделить на копоненты

export default function ContactsForm({ onSubmit }: IContactsFormProps) {
	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={onSubmit}>
				<input
					className={styles['form__input']}
					type="text"
					name="clientName"
					placeholder="Имя"
				/>
				<input
					className={styles['form__input']}
					type="tel"
					name="clientTel"
					placeholder="Телефон"
				/>
				<input
					className={styles['form__input']}
					type="email"
					name="clientEmail"
					placeholder="E-mail"
				/>
				<textarea
					className={styles['form__input']}
					name="clientMessage"
					placeholder="Сообщение"
				/>
				<input
					className={styles['form__input']}
					type="file"
					id="file"
					name="clientFile"
					accept=".doc"
				/>
				<label className={styles['label']} htmlFor="file">
					Прикрепить ТЗ
				</label>
				<span className={styles['form__notice']}>*В формате Документ Word</span>
				<button className={styles['form__button']} type="submit">
					Отправить
				</button>
				<span className={styles['form__notice']}>
					Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
					персональных данных.
				</span>
			</form>
		</div>
	);
}
