import ComponentsContainer from '../ComponentsContainer';
import Footer from '../Footer';
import Interaction from '../Interaction/index';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<Choice />
			<Interaction />
			<ComponentsContainer>{<Footer />}</ComponentsContainer>
		</main>
	);
}
