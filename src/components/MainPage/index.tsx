import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq/index';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
import Portfolio from '../Portfolio';
import Promo from '../Promo';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* <Modal /> */}
			<Navbar />
			<Promo />
			<ComponentsContainer>
				{/*<ProjectDescriptionModal />*/}
				<AboutUs />
				<Services />
				<Portfolio />
			</ComponentsContainer>
			<StageCreate />
			{/* Отзывы и рекомендации */}
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
