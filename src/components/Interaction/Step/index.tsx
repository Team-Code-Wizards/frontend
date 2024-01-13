import { IStepProps } from './interface';
import styles from './style.module.scss';

const Step = ({ item }: IStepProps): React.ReactElement => {
	return (
		<>
			<div className={styles.main}>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
			</div>
		</>
	);
};

export default Step;
