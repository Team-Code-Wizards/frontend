'use client';

import { useEffect, useState } from 'react';

import { dataCard } from '@/constants/Guarantee/index';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import GuaranteeCard from './GuaranteeCard/index';
import styles from './styles.module.scss';

function Guarantee() {
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
		el: '#guarantee-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['guarantee__pagination-bullet']}'></span>`;
		},
	};

	return (
		<section id="guarantees" className={styles['guarantee']}>
			<div className={styles['guarantee__container']}>
				<h2 className={styles['guarantee__title']}>Наши гарантии</h2>
				<Swiper
					spaceBetween={20}
					slidesPerView="auto"
					pagination={pagination}
					rewind
					modules={[Pagination]}
					className={styles['guarantee__list']}
				>
					{dataCard.map((item, index) =>
						width < 701 ? (
							<SwiperSlide
								className={styles['guarantee__card']}
								style={{
									width: 'fit-content',
									marginLeft: index === 6 ? '0' : '20px',
								}}
								key={item.title}
							>
								<GuaranteeCard key={item.id} item={item} />
							</SwiperSlide>
						) : (
							<GuaranteeCard key={item.id} item={item} />
						)
					)}
					<div
						id="guarantee-pagination"
						className={styles['guarantee__pagination']}
					/>
				</Swiper>
			</div>
		</section>
	);
}

export default Guarantee;
