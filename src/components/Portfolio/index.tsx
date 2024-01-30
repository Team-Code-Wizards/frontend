'use client';

// import { useRef } from 'react';
import { portfolioCards } from '@/constants/Portfolio';
// import { type Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import ArrwoChevronIcon from '../../../public/images/icons/ArrowChevronIcon';
import PortfolioCard from './Card';
import styles from './styles.module.scss';

export default function Portfolio() {
	// const swiper = useSwiper();
	// const slides = useRef(null);
	// const onBtnClicked = async (direction: string) => {
	// 	const swiper = await slides.current.getSwiper();
	// 	if (direction === 'next') {
	// 		swiper.slideNext();
	// 	} else if (direction === 'prev') {
	// 		swiper.slidePrev();
	// 	}
	// };

	return (
		<section id="portfolio" className={styles['portfolio__container']}>
			<h2 className={styles['portfolio__title']}>Портфолио</h2>
			{/* <div className={styles['portfolio__btn-group']}>
				<button className={styles['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="left" />
				</button>
				<button className={styles['flipping-btn']} type="button">
					<ArrwoChevronIcon direction="right" />
				</button>
			</div> */}
			<div className={styles['portfolio__btn-group']}>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-back"
					// onClick={() => onBtnClicked('prev')}
				>
					<ArrwoChevronIcon direction="left" />
				</button>
				<button
					className={styles['flipping-btn']}
					type="button"
					id="swiper-forward"
					// onClick={() => onBtnClicked('next')}
				>
					<ArrwoChevronIcon direction="right" />
				</button>
			</div>
			{/* <div className={styles['portfolio__card-box']}>
				{portfolioCards.map((el) => (
					<PortfolioCard key={uuidv4()} {...el} />
				))}
			</div> */}

			<Swiper
				spaceBetween={20}
				slidesPerView={3.2}
				modules={[Navigation, Autoplay]}
				navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
				// navigation={{
				// 	// nextEl: '.flipping-btn_right',
				// 	// prevEl: '.flipping-btn_left',
				// 	nextEl: styles['flipping-btn_right'],
				// 	prevEl: styles['flipping-btn_left'],
				// }}
				className={styles['portfolio__card-box']}
			>
				{portfolioCards.map((el) => (
					<SwiperSlide className={styles['portfolio__card-box']} key={el.title}>
						<PortfolioCard key={uuidv4()} {...el} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
