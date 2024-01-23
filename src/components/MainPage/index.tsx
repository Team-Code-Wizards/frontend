import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Header from '../Header';
import Faq from '../Faq/index';
import Interaction from '../Interaction/index';
import Portfolio from '../Portfolio';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				{/*<Modal />*/}
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
				{/* Тех арсенал */}
				<TechStack />
				<ComponentsContainer>
					<Faq />
					<Contacts />
					<Footer />
				</ComponentsContainer>
			</main>
		</>
	);
}
