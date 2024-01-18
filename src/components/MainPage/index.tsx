import ComponentsContainer from '../ComponentsContainer';
import Services from '../Services';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<ComponentsContainer>
				<Services />
			</ComponentsContainer>
			<Choice />
			<ComponentsContainer>
				<div
					style={{
						height: '200px',
						width: '100vw',
					}}
				/>
			</ComponentsContainer>
		</main>
	);
}
