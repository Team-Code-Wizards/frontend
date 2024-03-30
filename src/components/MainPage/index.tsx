'use client';

// import Recommendations from '../Recommendations';
// import Services from '../Services';
// import StageCreate from '../StageCreate';
// import TechStack from '../TechStack';
// import Choice from '../Сhoice';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import AdvertisingPromo from '@/components/AdvertisingPromo';
import { InfoMsgProvider } from '@/components/InfoMsgContext';

// import MainPromo from '../MainPromo/MainPromo';
import AboutUs from '../AboutUs';
// import Choice from '../Choice/index';
import ComponentsContainer from '../ComponentsContainer';
// import Contacts from '../Contacts';
// import Faq from '../Faq';
// import Footer from '../Footer';
// import Guarantee from '../Guarantee/index';
// import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
// import Popup from '../Popup';
import Porfolio from '../Portfolio';
// import Recommendations from '../Recommendations';
import Services from '../Services';
// import StageCreate from '../StageCreate';
// import TechStack from '../TechStack';
import styles from './style.module.scss';

// const ComponentsContainerLazy = dynamic(() => import('../ComponentsContainer'));
// const PorfolioLazy = dynamic(() => import('../Portfolio'), { ssr: false, });
const PopupLazy = dynamic(() => import('../Popup'), { ssr: false });
const StageCreateLazy = dynamic(() => import('../StageCreate'), { ssr: false });
const RecommendationsLazy = dynamic(() => import('../Recommendations'), {
	ssr: false,
});
const ChoiceLazy = dynamic(() => import('../Choice'), { ssr: false });
const GuaranteeLazy = dynamic(() => import('../Guarantee/index'), {
	ssr: false,
});
const InteractionLazy = dynamic(() => import('../Interaction/index'), {
	ssr: false,
});
const TechStackLazy = dynamic(() => import('../TechStack'), { ssr: false });
const FaqLazy = dynamic(() => import('../Faq'), { ssr: false });
const ContactsLazy = dynamic(() => import('../Contacts'), { ssr: false });
const FooterLazy = dynamic(() => import('../Footer'), { ssr: false });
// const AboutUsLazy = dynamic(() => import('../AboutUs'), { ssr: false, });
// const ServicesLazy = dynamic(() => import('../Services'), { ssr: false });

export default function MainPage() {
	const [isLoadMore, setIsLoadMore] = useState(false);
	useEffect(() => {
		setIsLoadMore(true);
	}, []);

	return (
		<main className={styles.main}>
			<InfoMsgProvider>
				<AdvertisingPromo />
				<Navbar />
				<ComponentsContainer>
					<AboutUs />
					<Services />
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
					</>
				)}
				<ComponentsContainer>
					{isLoadMore && (
						<>
							<FaqLazy />
							<ContactsLazy />
							<FooterLazy />
						</>
					)}
				</ComponentsContainer>
				{isLoadMore && <PopupLazy />}
			</InfoMsgProvider>
		</main>
	);
}
