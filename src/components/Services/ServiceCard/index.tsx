import { SetStateAction, useEffect, useState } from 'react';

import ArrowDownIcon from '../../../../public/images/icons/ArrowDownIcon';
import { Service } from './interface';
import styles from './style.module.scss';
import { GeoData } from './types';

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

	const [IPAddress, setIPAddress] = useState('');
	const [geoInfo, setGeoInfo] = useState<GeoData>({});

	useEffect(() => {
		getVisitorIP();
		getIPInfo();
	}, []);

	const getVisitorIP = async () => {
		await fetch('http://api.ipify.org')
			.then((response) => response.text())
			.then((data) => setIPAddress(data))
			.catch((error) => console.error(`Не смог получить IP: ${error}`));
	};

	const getIPInfo = async () => {
		await fetch(`http://ip-api.com/json/${IPAddress}`)
			.then((response) => response.json())
			.then((data) => setGeoInfo(data))
			.catch((error) => console.log(`Не удалось получить геоданные: ${error}`));
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
								{geoInfo.country == 'Russia'
									? `${service.newPriceRu}₽`
									: `${service.newPrice}$`}
							</span>
						</p>
						<span className={styles['service-card__prices_old']}>
							{geoInfo.country == 'Russia'
								? `${service.oldPriceRu}₽`
								: `${service.oldPrice}$`}
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
