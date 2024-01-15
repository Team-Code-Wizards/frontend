import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ComponentContainerProps {
	children: ReactNode;
}

export default function ComponentContainer({
	children,
}: ComponentContainerProps) {
	return <section className={styles['section']}>{children}</section>;
}
