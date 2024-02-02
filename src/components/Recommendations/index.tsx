import { recommendationsPreviews } from '@/constants/Recommendations';

import ArrowChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
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
						return <RecommendationPreview key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}
