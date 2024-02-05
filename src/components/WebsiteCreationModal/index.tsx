import { SetStateAction } from 'react';

import IconClose from '&/images/modal/IconClose';
import { data } from '@/constants/WebsiteCreationModal';

import ModalBackground from '../ModalBackground';
import ModalItem from './ModalItem';
import styles from './style.module.scss';

export default function WebsiteCreationModal({
	close,
}: {
	close: (value: SetStateAction<boolean>) => void;
}) {
	return (
		<ModalBackground>
			<div className={styles['modal']}>
				<button
					onClick={() => close(false)}
					type="button"
					className={styles['modal__close-btn']}
				>
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
