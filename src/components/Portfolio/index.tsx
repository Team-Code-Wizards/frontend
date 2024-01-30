'use client';

import { portfolioCards } from '@/constants/Portfolio';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import ArrwoChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import PortfolioCard from './Card';
import styles from './styles.module.scss';

export default function Portfolio() {
	const pagination = {
		el: '#portfolio-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['portfolio__pagination-bullet']}'></span>`;
		},
	};

	return (
		<section id="portfolio" className={styles['portfolio__container']}>
			<h2 className={styles['portfolio__title']}>Портфолио</h2>
			<div className={styles['portfolio__btn-group']}>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-back"
				>
					<ArrwoChevronIcon direction="left" />
				</button>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-forward"
				>
					<ArrwoChevronIcon direction="right" />
				</button>
			</div>

			<Swiper
				spaceBetween={20}
				breakpoints={{
					300: {
						slidesPerView: 1.1,
					},
					450: {
						slidesPerView: 1.4,
					},
					570: {
						slidesPerView: 1.9,
					},
					834: {
						slidesPerView: 2.08,
					},
					900: {
						slidesPerView: 2.7,
					},
					1280: {
						slidesPerView: 3.37,
					},
					1440: {
						slidesPerView: 3.18,
					},
				}}
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '#swiper-forward',
					prevEl: '#swiper-back',
				}}
				pagination={pagination}
				loop={true}
				className={styles['portfolio__card-box']}
			>
				{portfolioCards.map((el) => (
					<SwiperSlide className={styles['portfolio__card-box']} key={el.title}>
						<PortfolioCard key={uuidv4()} {...el} />
					</SwiperSlide>
				))}
			</Swiper>
			<div id="portfolio-pagination" className={styles.portfolio__pagination} />
		</section>
	);
}
