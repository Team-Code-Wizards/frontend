'use client';

import { recommendationsPreviews } from '@/constants/Recommendations';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import RecommendationPreview from './RecommendationPreview';
import styles from './style.module.scss';

export default function Recommendations() {
	const pagination = {
		el: '#recommendation-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['recommendations__pagination-bullet']}'></span>`;
		},
	};

	return (
		<section className={styles['recommendations']}>
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
					effect={'coverflow'}
					slidesPerView={'auto'}
					centeredSlides={true}
					pagination={pagination}
					coverflowEffect={{
						rotate: 0,
						depth: 150,
						modifier: 2.5,
					}}
					speed={1000}
					loop
					className={styles['recommendations-swiper-container']}
					modules={[EffectCoverflow, Navigation, Pagination]}
					navigation={{
						nextEl: '#swiper-forward',
						prevEl: '#swiper-back',
					}}
					breakpoints={{
						1280: {
							coverflowEffect: {
								stretch: -60,
							},
						},
						835: {
							coverflowEffect: {
								stretch: -50,
							},
						},
						600: {
							coverflowEffect: {
								stretch: -40,
							},
						},
						0: {
							coverflowEffect: {
								stretch: -100,
							},
						},
					}}
				>
					{recommendationsPreviews.map((item) => {
						return (
							<SwiperSlide
								key={item.id}
								className={styles['recommendations-swiper-slide']}
							>
								{({ isActive }) => (
									<RecommendationPreview {...item} isActive={isActive} />
								)}
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div
					id="recommendation-pagination"
					className={styles.recommendation__pagination}
				/>
			</div>
		</section>
	);
}
