'use client';

import { useEffect, useState } from 'react';

import { portfolioCards } from '@/constants/Portfolio';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import PortfolioCard from './Card';
import styles from './styles.module.scss';

export default function Portfolio() {
	const [width, setWidth] = useState(1440);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	const pagination = {
		el: '#portfolio-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['portfolio__pagination-bullet']}'></span>`;
		},
	};

	let slidesPerView: number | 'auto' = 'auto';
	if (width < 390) {
		slidesPerView = 1;
	}

	return (
		<section id="portfolio" className={styles['portfolio__container']}>
			<h2 className={styles['portfolio__title']}>Портфолио</h2>
			<div className={styles['portfolio__btn-group']}>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-back"
					aria-label="Previous slide"
				>
					<ArrowChevronIcon direction="left" />
				</button>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-forward"
					aria-label="Next slide"
				>
					<ArrowChevronIcon direction="right" />
				</button>
			</div>

			<Swiper
				spaceBetween={20}
				breakpoints={{
					1441: {
						slidesPerView: 3,
					},
				}}
				slidesPerView={slidesPerView}
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '#swiper-forward',
					prevEl: '#swiper-back',
				}}
				pagination={pagination}
				rewind
				className={styles['portfolio__card-box']}
			>
				{portfolioCards.map((el) => (
					<SwiperSlide
						className={styles['portfolio__card-box_item']}
						style={{ width: 'fit-content' }}
						key={el.title}
					>
						<PortfolioCard key={el.id} {...el} />
					</SwiperSlide>
				))}
			</Swiper>
			<div id="portfolio-pagination" className={styles.portfolio__pagination} />
		</section>
	);
}
