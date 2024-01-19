
import StageCreate from '../StageCreate';
import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<>
			{/* Header */}
			<main className={styles.main}>
				{/* <ComponentsContainer > */}
				<AboutUs />
				{/* Услуги */}
				{/* Портфолио */}
				{/* </ComponentsContainer> */}
				<StageCreate />
				{/* Отзывы и рекомендации */}
				<Choice />
				{/* Гарантии */}
				<Interaction />
				{/* Тех арсенал */}
				<ComponentsContainer>
					{/* FAQ */}
					<Contacts />
					{/* Footer */}
				</ComponentsContainer>
			</main>
		</>
	);
}
