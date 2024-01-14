import Image from 'next/image';

import { IStepProps } from './interface';
import styles from './style.module.scss';

const Step = ({ item }: IStepProps): React.ReactElement => {
	return (
		<>
			<div className={styles['step']}>
				<div className={styles['step__number']}>Шаг {item.id}</div>
				<h2 className={styles['step__title']}>{item.title}</h2>
				<p className={styles['step__description']}>{item.description}</p>
				<div className={styles['step__image']}>
					<Image src={item.image} alt={item.alt} />
				</div>
			</div>
		</>
	);
};

export default Step;
