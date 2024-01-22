import { data } from '@/constants/ModalWindow';
import IconClose from '@/images/modal/IconClose';
import { v4 as uuidv4 } from 'uuid';

import ModalBackground from '../ModalBackground';
import ModalItem from './ModalItem';
import styles from './style.module.scss';

export default function Modal() {
	return (
		<ModalBackground>
			<div className={styles['modal']}>
				<button type="button" className={styles['modal__close-btn']}>
					<IconClose />
				</button>
				<h3 className={styles['modal__title']}>Заявка на создание сайта</h3>
				<form className={styles['modal__form']}>
					{data.map((item) => {
						return <ModalItem key={uuidv4()} item={item} />;
					})}
					<button type="submit" className={styles['modal__btn']}>
						Отправить
					</button>
				</form>
			</div>
		</ModalBackground>
	);
}
