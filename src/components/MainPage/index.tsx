import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<>
			{/* Header */}
			<main className={styles.main}>
				{/* <ComponentsContainer > */}
				{/* О нас */}
				{/* Услуги */}
				{/* Портфолио */}
				{/* </ComponentsContainer> */}
				{/* Этапы создания */}
				{/* Отзывы и рекомендации */}
				<Choice />
				<Guarantee />
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
