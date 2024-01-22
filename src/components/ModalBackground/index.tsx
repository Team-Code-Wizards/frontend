import { ReactNode } from 'react';

import styles from './style.module.scss';

interface ModalBackgrondProps {
	children: ReactNode;
}

export default function ModalBackground({ children }: ModalBackgrondProps) {
	return <div className={styles['modal-background']}>{children}</div>;
}
