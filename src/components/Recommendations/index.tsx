import Image from 'next/image';

import { recommendationsPreviews } from '@/constants/Recommendations';
import ArrowChevronIcon from '@/images/icons/ArrowChevronIcon';
import circle from '@/images/recommendations/circle.svg';
import { v4 as uuidv4 } from 'uuid';

import RecommendationPreview from './RecommendationPreview';
import styles from './style.module.scss';

export default function Recommendations() {
	return (
		<section className={styles['recommendations']}>
			<div className={styles['recommendations__container']}>
				<div className={styles['recommendations__header']}>
					<h2 className={styles['recommendations__title']}>
						Отзывы и рекомендации
					</h2>
					<div className={styles['recommendations__arrows']}>
						<button className={styles['arrow-btn']} type="button">
							<ArrowChevronIcon direction="left" />
						</button>
						<button className={styles['arrow-btn']} type="button">
							<ArrowChevronIcon direction="right" />
						</button>
					</div>
				</div>

				<div className={styles['card__container']}>
					{recommendationsPreviews.map((item) => {
						return <RecommendationPreview key={uuidv4()} {...item} />;
					})}
				</div>

				<div className={styles['card__details']}>
					<Image
						className={styles['card__details_circle']}
						src={circle}
						alt="circle"
					/>

					<div className={styles['card__details__container']}>
						<h3 className={styles['card__details_title']}>Рент-зона</h3>
						<h4 className={styles['card__details_information']}>
							Аренда строительной техники
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
