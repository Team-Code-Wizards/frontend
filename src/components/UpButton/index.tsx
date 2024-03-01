import Link from 'next/link';

import UpButtonIcon from '&/images/icons/UpButton';

import styles from './style.module.scss';

interface IUpButton {
	inView: boolean;
}
export default function UpButton({ inView }: IUpButton) {
	return (
		<Link
			href="#promo"
			className={`${styles[`up-btn${inView ? '_inview' : ''}`]}`}
			aria-label="Up"
		>
			<UpButtonIcon />
		</Link>
	);
}
