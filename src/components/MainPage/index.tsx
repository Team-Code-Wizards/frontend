import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
//import ProjectDescriptionModal from "../ProjectDescriptionModal";
import Popup from '../Popup';
import Promo from '../Promo';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* <Modal /> */}
			<Navbar />
			<Promo />
			<ComponentsContainer>
				{/* <ProjectDescriptionModal /> */}
				<Popup isSuccess={true} />
				<AboutUs />
				{/* <Services /> */}
				{/* <Portfolio /> */}
			</ComponentsContainer>
			{/* <StageCreate /> */}
			{/* <Recommendations /> */}
			{/* <Choice /> */}
			<Guarantee />
			<Interaction />
			{/* <TechStack /> */}
			<ComponentsContainer>
				{/* <Faq /> */}
				<Contacts />
				<Footer />
			</ComponentsContainer>
		</main>
	);
}
