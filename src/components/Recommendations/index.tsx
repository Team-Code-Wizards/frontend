import { recommendationsPreviews } from '@/constants/Recommendations';
import { v4 as uuidv4 } from 'uuid';

import ArrowChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import RecommendationPreview from './RecommendationPreview';
import styles from './style.module.scss';

export default function Recommendations() {
	return (
		<section id="recommendation" className={styles['recommendations']}>
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
			</div>
		</section>
	);
}
