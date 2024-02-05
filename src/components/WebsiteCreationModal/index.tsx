import IconClose from '&/images/modal/IconClose';
import { data } from '@/constants/WebsiteCreationModal';

import ModalBackground from '../ModalBackground';
import ModalItem from './ModalItem';
import styles from './style.module.scss';

export default function WebsiteCreationModal() {
	return (
		<ModalBackground>
			<div className={styles['modal']}>
				<button type="button" className={styles['modal__close-btn']}>
					<IconClose />
				</button>
				<h3 className={styles['modal__title']}>Заявка на создание сайта</h3>
				<form className={styles['modal__form']}>
					{data.map((item) => {
						return <ModalItem key={item.id} item={item} />;
					})}
					<button type="submit" className={styles['modal__btn']}>
						Отправить
					</button>
				</form>
			</div>
		</ModalBackground>
	);
}
