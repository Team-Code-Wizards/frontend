'use client';

import { recommendationsPreviews } from '@/constants/Recommendations';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
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
						<button
							className={styles['arrow-btn']}
							type="button"
							id="swiper-back"
						>
							<ArrowChevronIcon direction="left" />
						</button>
						<button
							className={styles['arrow-btn']}
							type="button"
							id="swiper-forward"
						>
							<ArrowChevronIcon direction="right" />
						</button>
					</div>
				</div>

				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					centeredSlides={true}
					loop={true}
					className={styles['card__container']}
					modules={[Navigation, Pagination]}
					navigation={{
						nextEl: '#swiper-forward',
						prevEl: '#swiper-back',
					}}
				>
					{recommendationsPreviews.map((item) => {
						return (
							<SwiperSlide
								key={uuidv4()}
								className={styles['recommendations-swiper-slide']}
							>
								<RecommendationPreview key={uuidv4()} {...item} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
