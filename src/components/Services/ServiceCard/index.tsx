import { SetStateAction, useState } from 'react';

import ArrowDownIcon from '../../../../public/images/icons/ArrowDownIcon';
import { Service } from './interface';
import styles from './style.module.scss';

export default function ServiceCard({
	service,
	openCreationModal,
	handlerAskBtn,
}: {
	service: Service;
	openCreationModal: (value: SetStateAction<boolean>) => void;
	handlerAskBtn: (id: string) => () => void;
}) {
	const [isShown, setIsShown] = useState(false);

	const toggleText = () => {
		setIsShown(!isShown);
	};

	return (
		<div className={styles['service-card']}>
			<div className={styles['service-card__content']}>
				<div className={styles['service-card__right']}>
					<h4>{service.title}</h4>
					{service.content.map((text) => (
						<p
							className={`${styles['service-card__right__item']} ${
								isShown ? styles['shown'] : ''
							}`}
							key={text}
						>
							{text}
						</p>
					))}
					<div className={styles['service-card__prices']}>
						<p>
							<span className={styles['service-card__prices_pre']}>от</span>
							<span className={styles['service-card__prices_new']}>
								{service.newPrice}$
							</span>
						</p>
						<span className={styles['service-card__prices_old']}>
							{service.oldPrice}$
						</span>
					</div>
				</div>
				<button
					onClick={toggleText}
					className={`${styles['service-card__popup']} ${
						isShown ? styles['shown'] : ''
					}`}
				>
					<ArrowDownIcon />
				</button>
			</div>
			<span className={styles['service-card__btns']}>
				<button
					onClick={() => openCreationModal(true)}
					className={styles['service-card__btns_order']}
					type="submit"
				>
					Заказать
				</button>
				<button
					onClick={handlerAskBtn(service.id)}
					className={styles['service-card__btns_ask']}
					type="button"
				>
					?
				</button>
			</span>
		</div>
	);
}
