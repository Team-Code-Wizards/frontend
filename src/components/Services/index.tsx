'use client';

import { useState } from 'react';

import services from '@/constants/Services';

import ProjectDescriptionModal from '../ProjectDescriptionModal';
import WebsiteCreationModal from '../WebsiteCreationModal';
import ServiceCard from './ServiceCard';
import styles from './style.module.scss';

export default function Services() {
	const [isCreationModalOpen, setCreationModalOpen] = useState(false);
	const [isPrDescriptionModalOpen, setPrDescriptionModalOpen] = useState(false);
	const [activeService, setActiveService] = useState('');

	const handlerAskBtn = (id: string) => () => {
		setActiveService(id);
		setPrDescriptionModalOpen(true);
	};

	return (
		<section id="services" className={styles.wrapper}>
			<div className={styles['services']}>
				<h2 className={styles['services__title']}>Услуги</h2>
				<div className={styles['services__cards']}>
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
							openCreationModal={setCreationModalOpen}
							handlerAskBtn={handlerAskBtn}
						/>
					))}
				</div>
			</div>
			{isCreationModalOpen && (
				<WebsiteCreationModal open={setCreationModalOpen} />
			)}
			{isPrDescriptionModalOpen && (
				<ProjectDescriptionModal
					id={activeService}
					open={setPrDescriptionModalOpen}
					order={setCreationModalOpen}
				/>
			)}
		</section>
	);
}
