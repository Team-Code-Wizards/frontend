'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import ComponentsContainer from '../ComponentsContainer';
import MainPromo from '../MainPromo/MainPromo';
import Navbar from '../Navbar';
import Popup from '../Popup';
import Porfolio from '../Portfolio';
import styles from './style.module.scss';

const StageCreateLazy = dynamic(() => import('../StageCreate'));
const RecommendationsLazy = dynamic(() => import('../Recommendations'));
const ChoiceLazy = dynamic(() => import('../Сhoice'));
const GuaranteeLazy = dynamic(() => import('../Guarantee/index'));
const InteractionLazy = dynamic(() => import('../Interaction/index'));
const TechStackLazy = dynamic(() => import('../TechStack'));
const FaqLazy = dynamic(() => import('../Faq'));
const ContactsLazy = dynamic(() => import('../Contacts'));
const FooterLazy = dynamic(() => import('../Footer'));
const AboutUsLazy = dynamic(() => import('../AboutUs'));
const ServicesLazy = dynamic(() => import('../Services'));

export default function MainPage() {
	const [isLoadMore, setIsLoadMore] = useState(false);
	useEffect(() => {
		setIsLoadMore(true);
	}, []);

	return (
		<main className={styles.main}>
			<MainPromo />
			<Navbar />
			<ComponentsContainer>
				<AboutUsLazy />
				<ServicesLazy />
				<Porfolio />
			</ComponentsContainer>
			{isLoadMore && (
				<>
					<StageCreateLazy />
					<RecommendationsLazy />
					<ChoiceLazy />
					<GuaranteeLazy />
					<InteractionLazy />
					<TechStackLazy />
					<ComponentsContainer>
						<FaqLazy />
						<ContactsLazy />
						<FooterLazy />
					</ComponentsContainer>
					<Popup />
				</>
			)}
		</main>
	);
}
