import styles from './style.module.scss';

export default function Contacts() {
	return (
		<section className={styles['contacts']}>
			<h1 className={styles['contacts__title']}>Контакты</h1>
			<div className={styles['contacts__body']}></div>
		</section>
	);
}
