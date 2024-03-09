import { useEffect, useState } from 'react';

import Image from 'next/image';

import bubble1Tablet from '&/images/interaction/stepSix/bubble-1-1280.webp';
import bubble1 from '&/images/interaction/stepSix/bubble-1.webp';
import bubble2 from '&/images/interaction/stepSix/bubble-2.webp';

import styles from './style.module.scss';

export default function StepSix(inView: boolean, isActive: boolean) {
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
		<div className={styles['step-six']}>
			{width < 1281 ? (
				<Image
					className={`${styles['image']} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
					src={bubble1Tablet}
					alt={'Диалоговое окно'}
				/>
			) : (
				<Image
					className={`${styles['image']} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
					src={bubble1}
					alt={'Диалоговое окно'}
				/>
			)}
			<Image
				className={`${styles['image']} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
				src={bubble2}
				alt={'Ответ'}
			/>
		</div>
	);
}
