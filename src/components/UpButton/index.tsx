import Link from 'next/link';

import UpButtonIcon from '&/images/icons/UpButton';

import styles from './style.module.scss';

interface IUpButton {
	inView: boolean;
	showButton: boolean;
}
export default function UpButton({ inView, showButton }: IUpButton) {
	return (
		<Link
			href="#promo"
			className={`${styles['up-btn']} ${inView && showButton ? styles['up-btn_inview'] : ''}`}
			aria-label="Up"
		>
			<UpButtonIcon />
		</Link>
	);
}
