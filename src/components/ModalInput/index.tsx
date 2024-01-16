import styles from './style.module.scss';

export default function ModalInput() {
	return (
		<label className={styles['modal-label']}>
			<h4 className={styles['modal-label__title']}>Что-то</h4>
			<input
				placeholder="Иван Иванович"
				className={styles['modal-label__input']}
			/>
		</label>
	);
}
