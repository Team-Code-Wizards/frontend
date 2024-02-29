import Link from 'next/link';

import UpButtonIcon from '&/images/icons/UpButton';

import styles from './style.module.scss';

export default function UpButton() {
	return (
		<Link href="#promo" className={styles['up-btn']} aria-label="Up">
			<UpButtonIcon />
		</Link>
	);
}
