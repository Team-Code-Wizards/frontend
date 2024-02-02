import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Portfolio from '../Portfolio';
import Promo from '../Promo';
import Recommendations from '../Recommendations';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
//import ProjectDescriptionModal from "../ProjectDescriptionModal";
//import Popup from '../Popup';
import WebsiteCreationModal from '../WebsiteCreationModal';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<WebsiteCreationModal />
			{/* <Navbar /> */}
			<Promo />
			<ComponentsContainer>
				{/* <ProjectDescriptionModal /> */}
				{/* <Popup isSuccess={true} /> */}
				<AboutUs />
				{/* <Services /> */}
				<Portfolio />
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
		</main>
	);
}
