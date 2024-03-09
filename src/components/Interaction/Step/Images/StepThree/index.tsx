import { useEffect, useState } from 'react';

import Image from 'next/image';

import cursor from '&/images/interaction/stepThree/cursor.webp';
import pageTablet from '&/images/interaction/stepThree/page-1280.webp';
import page from '&/images/interaction/stepThree/page.webp';
import rectangle from '&/images/interaction/stepThree/rectangle.webp';

import styles from './style.module.scss';

export default function StepThree(inView: boolean, isActive: boolean) {
	const [width, setWidth] = useState(1440);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<div className={styles['step-three']}>
			{834 < width && width < 1281 ? (
				<Image
					className={`${styles['image']} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
					src={pageTablet}
					alt={'Сайт'}
				/>
			) : (
				<Image
					className={`${styles['image']} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
					src={page}
					alt={'Сайт'}
				/>
			)}
			<Image
				className={`${styles['image']} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
				src={cursor}
				alt={'Курсор'}
			/>
			<Image
				className={`${styles['image']} ${styles['image__three']} ${isActive && inView && styles['image__three_inview']}`}
				src={rectangle}
				alt={'Окно'}
			/>
		</div>
	);
}
