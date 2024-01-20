import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Portfolio from '../Portfolio';
import Services from '../Services';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<>
			{/* Header */}
			<main className={styles.main}>
				<ComponentsContainer>
					<AboutUs />
					<Services />
					<Portfolio />
				</ComponentsContainer>
				{/* Этапы создания */}
				{/* Отзывы и рекомендации */}
				<Choice />
				<Guarantee />
				<Interaction />
				{/* Тех арсенал */}
				<ComponentsContainer>
					{/* FAQ */}
					<Contacts />
					<Footer />
				</ComponentsContainer>
			</main>
		</>
	);
}
