import Input from './Input';
import IInput from './Input/interface';
import IContactsFormProps from './interface';
import styles from './style.module.scss';

//TODO добавить кнопку очистки инпутов когда они активны

//TODO разделить на компоненты

export default function ContactsForm({ onSubmit }: IContactsFormProps) {
	const inputs: IInput[] = [
		{
			inputType: 'default',
			className: styles['form__input'],
			type: 'text',
			name: 'clientName',
			placeholder: 'Имя',
		},
		{
			inputType: 'default',
			className: styles['form__input'],
			type: 'tel',
			name: 'clientTel',
			placeholder: 'Телефон',
		},
		{
			inputType: 'default',
			className: styles['form__input'],
			type: 'email',
			name: 'clientEmail',
			placeholder: 'E-mail',
		},
		{
			inputType: 'textarea',
			className: styles['form__input'],
			name: 'clientMessage',
			placeholder: 'Сообщение',
		},
		{
			inputType: 'inputFile',
			className: styles['form__input'],
			type: 'file',
			name: 'clientFile',
			accept: '.doc',
			labelText: 'Прикрепить ТЗ',
			labelClassName: styles['label'],
		},
	];

	return (
		<div className={styles['form-box']}>
			<form className={styles['form']} onSubmit={onSubmit}>
				{inputs.map((el) => (
					<Input key={crypto.randomUUID()} {...el} />
				))}
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
