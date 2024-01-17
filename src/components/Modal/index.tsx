import { data } from '@/constans/Modal';

import ModalItem from '../ModalItem';
import styles from './style.module.scss';

export default function Modal() {
	return (
		<div className={styles['modal-back']}>
			<div className={styles['modal']}>
				<h2 className={styles['modal__title']}>Заявка на создание сайта</h2>
				<div className={styles['modal__wrapper']}>
					{data.map((item) => {
						return <ModalItem key={item.title} item={item} />;
					})}
					<button className={styles['modal__btn']}>Отправить</button>
				</div>
			</div>
		</div>
	);
}
