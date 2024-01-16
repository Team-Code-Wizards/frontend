import React from 'react';

import styles from './styles.module.scss';

export default function Error() {
	return (
		<div className={styles['container']}>
			<h1>404</h1>
			<p>Такой страницы не существует.</p>
			<button>Вернуться на главную</button>
		</div>
	);
}
