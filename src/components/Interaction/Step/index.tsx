import Image from 'next/image';

import { IStepProps } from './interface';
import styles from './style.module.scss';

const Step = ({ item }: IStepProps): React.ReactElement => {
	return (
		<>
			<div className={styles['step']}>
				<div className={styles['step__number']}>Шаг {item.number}</div>
				<h2 className={styles['step__title']}>{item.title}</h2>
				<p
					className={`${styles['step__description']} ${
						styles[`step__description_${item.modifer}`]
					}`}
				>
					{item.description}
				</p>
				<div className={styles['step__image']}>
					<picture>
						{item.changeMobile && (
							<source
								media="(max-width: 391px)"
								srcSet={`/images/interaction/${item.modifer}-390px.webp`}
							/>
						)}
						{item.changeLaptop && (
							<source
								media="(max-width: 1280px)"
								srcSet={`/images/interaction/${item.modifer}-1280px.webp`}
							/>
						)}
						<Image src={item.image} alt={item.alt} />
					</picture>
				</div>
			</div>
		</>
	);
};

export default Step;
