import { SetStateAction, useState } from 'react';

import Image from 'next/image';

import services from '@/constants/Services';

import IconClose from '../../../public/images/modal/IconClose';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

export default function ProjectDescriptionModal({
	id,
	open,
	order,
}: {
	id: string;
	open: (value: SetStateAction<boolean>) => void;
	order: (value: SetStateAction<boolean>) => void;
}) {
	const info = services.filter((service) => service.id === id)[0];
	const [modalState, setModalState] = useState(true);

	const handlerOrderClick = () => {
		setModalState(false);

		setTimeout(() => {
			open(false);
			order(true);
		}, 300);
	};

	const handlerHiding = () => {
		setModalState(false);

		setTimeout(() => {
			open(false);
		}, 300);
	};

	return (
		<ModalBackground onClick={() => handlerHiding()}>
			<div
				className={`${styles['modal']} ${modalState ? styles['modal_show'] : styles['modal_hiding']}`}
			>
				<button
					onClick={() => handlerHiding()}
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
					<button
						onClick={handlerOrderClick}
						type="submit"
						className={styles['modal__btn']}
					>
						Заказать
					</button>
				</div>
			</div>
		</ModalBackground>
	);
}
