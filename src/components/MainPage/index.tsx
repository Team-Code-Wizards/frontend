'use client';

import AdvertisingPromo from '@/components/AdvertisingPromo';
import { InfoMsgProvider } from '@/components/InfoMsgContext';

// import MainPromo from '../MainPromo/MainPromo';
import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
import Popup from '../Popup';
import Porfolio from '../Portfolio';
import Recommendations from '../Recommendations';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
import Choice from '../Сhoice';
import styles from './style.module.scss';

// const StageCreateLazy = dynamic(() => import('../StageCreate'));
// const RecommendationsLazy = dynamic(() => import('../Recommendations'));
// const ChoiceLazy = dynamic(() => import('../Сhoice'));
// const GuaranteeLazy = dynamic(() => import('../Guarantee/index'));
// const InteractionLazy = dynamic(() => import('../Interaction/index'));
// const TechStackLazy = dynamic(() => import('../TechStack'));
// const FaqLazy = dynamic(() => import('../Faq'));
// const ContactsLazy = dynamic(() => import('../Contacts'));
// const FooterLazy = dynamic(() => import('../Footer'));
// const AboutUsLazy = dynamic(() => import('../AboutUs'));
// const ServicesLazy = dynamic(() => import('../Services'));

export default function MainPage() {
	return (
		<main className={styles.main}>
			<InfoMsgProvider>
				<AdvertisingPromo />
				{/* <MainPromo /> */}
				<Navbar />
				<ComponentsContainer>
					<AboutUs />
					<Services />
					<Porfolio />
				</ComponentsContainer>
				<StageCreate />
				<Recommendations />
				<Choice />
				<Guarantee />
				<Interaction />
				<TechStack />
				<ComponentsContainer>
					<Faq />
					<Contacts />
					<Footer />
				</ComponentsContainer>
				<Popup />
			</InfoMsgProvider>
		</main>
	);
}
