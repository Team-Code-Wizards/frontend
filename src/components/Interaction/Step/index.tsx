import { IStepProps } from './interface';
import styles from './style.module.scss';

const Step = ({ item, inView, isActive }: IStepProps): React.ReactElement => {
	return (
		<>
			<div className={styles['step']}>
				<div className={styles['step__number']}>Шаг {item.number}</div>
				<h2 className={styles['step__title']}>{item.title}</h2>
				<p
					className={`${styles['step__description']} ${
						styles[`step__description_${item.modifier}`]
					}`}
				>
					{item.description}
				</p>
				{item.image(inView, isActive)}
			</div>
		</>
	);
};

export default Step;
