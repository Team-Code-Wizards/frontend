import ComponentsContainer from '../ComponentsContainer';
import Interaction from '../Interaction/index';
import Services from '../Services';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<ComponentsContainer>
				<Services />
			</ComponentsContainer>
			<Choice />
			<Interaction />
		</main>
	);
}
