import dynamic from 'next/dynamic';

import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import MainPromo from '../MainPromo/MainPromo';
import Navbar from '../Navbar';
import Popup from '../Popup';
import Portfolio from '../Portfolio';
import Services from '../Services';
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

export default function MainPage() {
	return (
		<main className={styles.main}>
			<MainPromo />
			<ComponentsContainer>
				<AboutUs />
				<Services />
				<Portfolio />
			</ComponentsContainer>
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
			<Navbar />
		</main>
	);
}
