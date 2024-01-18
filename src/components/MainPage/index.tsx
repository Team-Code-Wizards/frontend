import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<ComponentsContainer>
				<div
					style={{
						height: '200px',
						width: '100vw',
					}}
				/>
			</ComponentsContainer>
			<Choice />
			<Contacts />
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
