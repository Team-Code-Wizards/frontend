import { useEffect } from 'react';

import { IStepProps } from './interface';
import styles from './style.module.scss';

const Step = ({ item, inView }: IStepProps): React.ReactElement => {
	useEffect(() => {
		console.log(`Step ${inView}`);
	}, [inView]);

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
				<div className={`${styles[`step__image${inView ? '_inview' : ''}`]}`}>
					<picture>
						{item.changeMobile && (
							<source
								media="(max-width: 391px)"
								srcSet={`/images/interaction/${item.modifier}-390px.webp`}
							/>
						)}
						{item.modifier !== 'support' && (
							<source
								media="(max-width: 835px)"
								srcSet={`/images/interaction/${item.modifier}.webp`}
							/>
						)}
						{item.changeLaptop && (
							<source
								media="(max-width: 1280px)"
								srcSet={`/images/interaction/${item.modifier}-1280px.webp`}
							/>
						)}
						{/* <div
							className={`${styles[`${item.imageClassName}${inView ? '_inview' : ''}`]}`}
						>
							{item.image}
						</div> */}
						{item.image(inView)}
					</picture>
				</div>
			</div>
		</>
	);
};

export default Step;
