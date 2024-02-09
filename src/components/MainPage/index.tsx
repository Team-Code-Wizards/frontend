import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
// import Popup from '../Popup';
import Portfolio from '../Portfolio';
import Promo from '../Promo';
import Recommendations from '../Recommendations';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
//import ProjectDescriptionModal from "../ProjectDescriptionModal";
//import Popup from '../Popup';
// import WebsiteCreationModal from '../WebsiteCreationModal';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<video controls>
				<source src="/video/video1.mov" type="video/mov" />
			</video>
			{/* <WebsiteCreationModal /> */}
			{/* <ProjectDescriptionModal /> */}
			{/* <Popup isSuccess={true} /> */}
			<Navbar />
			<Promo />
			<video controls>
				<source src="/video/video2.mp4" type="video/mp4" />
			</video>
			<ComponentsContainer>
				<AboutUs />
				<Services />
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
