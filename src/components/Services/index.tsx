'use client';

import { useState } from 'react';

import services from '@/constants/Services';

import ProjectDescriptionModal from '../ProjectDescriptionModal';
import WebsiteCreationModal from '@/components/WebsiteCreationModal';
import ServiceCard from './ServiceCard';

import styles from './style.module.scss';

export default function Services() {
	const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
    const [isPrDescriptionModalOpen, setPrDescriptionModalOpen] = useState(false);
    const [activeService, setActiveService] = useState('');

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
			<WebsiteCreationModal open={openCreationModal} close={handleCloseCreationModal} />
			<div className={styles['services']}>
				<h2 className={styles['services__title']}>Услуги</h2>
				<div className={styles['services__cards']}>
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
							openCreationModal={handleOpenCreationModal}
							handlerAskBtn={handlerAskBtn}
						/>
					))}
				</div>
			</div>

			{openCreationModal && (
				<WebsiteCreationModal open={handleOpenCreationModal} close={handleCloseCreationModal} />
			)}
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
