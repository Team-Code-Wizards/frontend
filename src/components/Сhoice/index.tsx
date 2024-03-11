'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { data } from '@/constants/Choice';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChoiceCard from './ChoiceCard';
import styles from './style.module.scss';

export default function Choice() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

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
		el: '#choice-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['choice__pagination-bullet']}'></span>`;
		},
	};

	return (
		<section ref={ref} className={styles.choice}>
			<div className={styles.choice__container}>
				<h2 className={styles.choice__title}>Почему нас выбирают:</h2>
				<Swiper
					pagination={pagination}
					rewind
					modules={[Pagination]}
					className={styles.choice__list}
					spaceBetween={30}
					slidesPerView={1}
				>
					{data.map((item) =>
						width < 701 ? (
							item.modifier !== 'planet' && (
								<SwiperSlide
									className={`${styles[`choice__slide`]} ${(item.modifier === 'presence' || item.modifier === 'flexibility') && styles[`choice__slide_${item.modifier}`]}`}
									key={item.title}
								>
									<ChoiceCard inView={inView} key={item.id} item={item} />
								</SwiperSlide>
							)
						) : (
							<ChoiceCard inView={inView} key={item.id} item={item} />
						)
					)}
					<div
						id="choice-pagination"
						className={styles['choice__pagination']}
					/>
				</Swiper>
			</div>
		</section>
	);
}
