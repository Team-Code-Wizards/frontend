import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ModalBackgrondProps {
	children: ReactNode;
	onClick?: () => void;
}

export default function ModalBackground({
	children,
	onClick,
}: ModalBackgrondProps) {
	const handlerClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (event.target === event.currentTarget && onClick) onClick();
	};

	return (
		<div
			onClick={(event) => handlerClick(event)}
			className={styles['modal-background']}
		>
			{children}
		</div>
	);
}
