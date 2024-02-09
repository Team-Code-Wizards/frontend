'use client';

import { useEffect, useState } from 'react';

import services from '@/constants/Services';

import ArrowDownIcon from '../../../public/images/icons/ArrowDownIcon';
import styles from './style.module.scss';
import { GeoData } from './types';

export default function Services() {
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
		<section id="services" className={styles.wrapper}>
			<div className={styles['services']}>
				<h2 className={styles['services__title']}>Услуги</h2>
				<div className={styles['services__cards']}>
					{services.map((service) => (
						<div key={service.id} className={styles['service-card']}>
							<div className={styles['service-card__content']}>
								<div className={styles['service-card__right']}>
									<h4>{service.title}</h4>
									{service.content.map((text) => (
										<p key={text}>{text}</p>
									))}
									<div className={styles['service-card__prices']}>
										<p>
											<span className={styles['service-card__prices_pre']}>
												от
											</span>
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
								<div className={styles['service-card__popup']}>
									<a className={styles['service-card__popup_img']}>
										<ArrowDownIcon />
									</a>
								</div>
							</div>
							<span className={styles['service-card__btns']}>
								<button
									className={styles['service-card__btns_order']}
									type="submit"
								>
									Заказать
								</button>
								<button
									className={styles['service-card__btns_ask']}
									type="button"
								>
									?
								</button>
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
