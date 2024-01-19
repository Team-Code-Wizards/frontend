import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Header from '../Header';
import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<>
			{/* Header */}
			<Header />
			<main className={styles.main}>
				{/* <ComponentsContainer > */}
				{/* О нас */}
				{/* Услуги */}
				{/* Портфолио */}
				{/* </ComponentsContainer> */}
				{/* Этапы создания */}
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
