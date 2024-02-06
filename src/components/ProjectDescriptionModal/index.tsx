import { SetStateAction } from 'react';

import Image from 'next/image';

import services from '@/constants/Services';

import IconClose from '../../../public/images/modal/IconClose';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

export default function ProjectDescriptionModal({
	id,
	close,
}: {
	id: string;
	close: (value: SetStateAction<boolean>) => void;
}) {
	const info = services.filter((service) => service.id === id)[0];

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
				<h2 className={styles['modal__title']}>{info.title}</h2>
				<div className={styles['modal__description']}>
					<p>{info.description}</p>
				</div>
				<div className={styles['modal__example']}>
					<Image src={info.image} alt="Landing image" />
					<button type="submit" className={styles['modal__btn']}>
						Заказать
					</button>
				</div>
			</div>
		</ModalBackground>
	);
}
