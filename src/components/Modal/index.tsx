import ModalInput from '../ModalInput';
import styles from './style.module.scss';

export default function Modal() {
	return (
		<div
			style={{
				position: 'fixed',
				backgroundColor: '#33333399',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			<div className={styles['modal']}>
				<h2 className={styles['modal__title']}>Заявка на создание сайта</h2>
				<form className={styles['modal__form']}>
					<ModalInput />
					<button className={styles['modal__btn']}>Отправить</button>
				</form>
			</div>
		</div>
	);
}
