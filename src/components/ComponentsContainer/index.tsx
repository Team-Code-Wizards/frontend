import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ComponentsContainerProps {
	children: ReactNode;
}

export default function ComponentsContainer({
	children,
}: ComponentsContainerProps) {
	return <section className={styles['section']}>{children}</section>;
}
