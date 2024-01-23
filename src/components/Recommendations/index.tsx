'use client';

import { recommendationsPreviews } from '@/constants/Recommendations';
import ArrowChevronIcon from '@/images/icons/ArrowChevronIcon';
import 'swiper/css';
// import IRecommendationPreview from "./RecommendationPreview/interface";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import RecommendationPreview from './RecommendationPreview';
import styles from './style.module.scss';

export default function Recommendations() {
	return (
		<div className={styles['recommendations__container']}>
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
			<div className={styles['recommendations__swiper-wrapper']}>
				<Swiper
					slidesPerView={3}
					spaceBetween={10}
					pagination={{ clickable: true }}
				>
					{recommendationsPreviews.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<RecommendationPreview {...item}></RecommendationPreview>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
