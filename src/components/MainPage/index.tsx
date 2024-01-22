import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Header from '../Header';
import Interaction from '../Interaction/index';
import Portfolio from '../Portfolio';
import Recommendations from '../Recommendations';
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
					<AboutUs />
					<Services />
					<Portfolio />
				</ComponentsContainer>
				<StageCreate />
				<Recommendations />
				<Choice />
				<Guarantee />
				<Interaction />
				{/* Тех арсенал */}
				<TechStack />
				<ComponentsContainer>
					{/* FAQ */}
					<Contacts />
					<Footer />
				</ComponentsContainer>
			</main>
		</>
	);
}
