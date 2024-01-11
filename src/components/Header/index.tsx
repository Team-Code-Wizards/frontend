import styles from '@/components/Header/style.module.scss';

export default function Header() {
	return (
		<div className={styles['header']}>
			{' '}
			Header
			<div className={styles['header__container']}> Container</div>
		</div>
	);
}
