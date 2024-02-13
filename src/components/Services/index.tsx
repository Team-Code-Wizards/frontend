'use client';

import { useEffect, useState } from 'react';

import WebsiteCreationModal from '@/components/WebsiteCreationModal';
import services from '@/constants/Services';

import ProjectDescriptionModal from '../ProjectDescriptionModal';
import ServiceCard from './ServiceCard';
import styles from './style.module.scss';
import { GeoData } from './types';

export default function Services() {
	const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
	const [isPrDescriptionModalOpen, setPrDescriptionModalOpen] = useState(false);
	const [activeService, setActiveService] = useState('');

	const [IPAddress, setIPAddress] = useState('');
	const [geoInfo, setGeoInfo] = useState<GeoData>({});

	useEffect(() => {
		getVisitorIP();
		getIPInfo();
	}, []);

	const getVisitorIP = async () => {
		await fetch('https://api.ipify.org')
			.then((response) => response.text())
			.then((data) => setIPAddress(data))
			.catch((error) => console.error(`Не смог получить IP: ${error}`));
	};

	const getIPInfo = async () => {
		await fetch(`https://freeipapi.com/api/json/${IPAddress}`)
			.then((response) => response.json())
			.then((data) => setGeoInfo(data))
			.catch((error) => console.log(`Не удалось получить геоданные: ${error}`));
	};

	const handlerAskBtn = (id: string) => () => {
		setActiveService(id);
		setPrDescriptionModalOpen(true);
	};
	const handleOpenCreationModal = (): void => {
		setOpenCreationModal(true);
	};

	const handleCloseCreationModal = (): void => {
		setOpenCreationModal(false);
	};

	return (
		<section id="services" className={styles.wrapper}>
			<WebsiteCreationModal
				open={openCreationModal}
				close={handleCloseCreationModal}
			/>
			<div className={styles['services']}>
				<h2 className={styles['services__title']}>Услуги</h2>
				<div className={styles['services__cards']}>
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
							geo={geoInfo}
							openCreationModal={handleOpenCreationModal}
							handlerAskBtn={handlerAskBtn}
						/>
					))}
				</div>
			</div>
			{isPrDescriptionModalOpen && (
				<ProjectDescriptionModal
					id={activeService}
					open={setPrDescriptionModalOpen}
					order={handleOpenCreationModal}
				/>
			)}
		</section>
	);
}
