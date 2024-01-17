import ComponentsContainer from '../ComponentsContainer';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<ComponentsContainer>
				<div
					style={{
						height: '200px',
						width: '1440px',
					}}
				/>
			</ComponentsContainer>
			<Choice />
			<ComponentsContainer>
				<div
					style={{
						height: '200px',
						width: '1440px',
					}}
				/>
			</ComponentsContainer>
		</main>
	);
}
