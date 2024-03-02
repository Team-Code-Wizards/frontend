import { useEffect, useState } from 'react';

import Image from 'next/image';

import aimSmall from '&/images/interaction/stepOne/aim-390.webp';
import aimLess from '&/images/interaction/stepOne/aim-1280.webp';
import aimBig from '&/images/interaction/stepOne/aim.webp';
import task1Small from '&/images/interaction/stepOne/task1-390.webp';
import task1Less from '&/images/interaction/stepOne/task1-1280.webp';
import task1Big from '&/images/interaction/stepOne/task1.webp';
import task2Small from '&/images/interaction/stepOne/task2-390.webp';
import task2Less from '&/images/interaction/stepOne/task2-1280.webp';
import task2Big from '&/images/interaction/stepOne/task2.webp';

import styles from './style.module.scss';

export default function StepOne(inView: boolean, isActive: boolean) {
	const [width, setWidth] = useState(1440);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	let aimSrc = aimBig;
	let task1Src = task1Big;
	let task2Src = task2Big;

	if (width > 1280 || (width < 835 && width > 390)) {
		aimSrc = aimBig;
		task1Src = task1Big;
		task2Src = task2Big;
	} else if (width < 1281 && width > 834) {
		aimSrc = aimLess;
		task1Src = task1Less;
		task2Src = task2Less;
	} else if (width < 391) {
		aimSrc = aimSmall;
		task1Src = task1Small;
		task2Src = task2Small;
	}

	return (
		<div className={styles['step-one']}>
			<Image
				className={`${styles[`image`]} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
				src={aimSrc}
				alt={'aim'}
			/>
			<Image
				className={`${styles[`image`]} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
				src={task1Src}
				alt={'task1'}
			/>
			<Image
				className={`${styles[`image`]} ${styles['image__three']} ${isActive && inView && styles['image__three_inview']}`}
				src={task2Src}
				alt={'task2'}
			/>
		</div>

		// <div
		// 	//className={`${styles['step-one']} ${isActive && inView && styles['step-one_inview']}`}
		// 	className={styles['step-one']}
		// >
		// 	{width > 1280 || (width < 835 && width > 390) &&
		// 		<div className={`${styles['step-one']} ${isActive && inView && styles['step-one_inview']}`}>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
		// 				src={aimBig}
		// 				alt={'aim'}
		// 			/>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
		// 				src={task1Big}
		// 				alt={'task1'}
		// 			/>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__three']} ${isActive && inView && styles['image__three_inview']}`}
		// 				src={task2Big}
		// 				alt={'task2'}
		// 			/>
		// 		</div>
		// }
		//
		// 	{width < 1281 && width > 834 &&
		// 		<div className={`${styles['step-one']} ${isActive && inView && styles['step-one_inview']}`}>
		// 		<Image
		// 			className={`${styles[`image`]} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
		// 			src={aimLess}
		// 			alt={'aim'}
		// 		/>
		// 		<Image
		// 			className={`${styles[`image`]} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
		// 			src={task1Less}
		// 			alt={'task1'}
		// 		/>
		// 		<Image
		// 			className={`${styles[`image`]} ${styles['image__three']} ${isActive && inView && styles['image__three_inview']}`}
		// 			src={task2Less}
		// 			alt={'task2'}
		// 		/>
		// 		</div>
		// 	}
		//
		// 	{width < 391 &&
		// 		<div className={`${styles['step-one']} ${isActive && inView && styles['step-one_inview']}`}>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__one']} ${isActive && inView && styles['image__one_inview']}`}
		// 				src={aimSmall}
		// 				alt={'aim'}
		// 			/>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__two']} ${isActive && inView && styles['image__two_inview']}`}
		// 				src={task1Small}
		// 				alt={'task1'}
		// 			/>
		// 			<Image
		// 				className={`${styles[`image`]} ${styles['image__three']} ${isActive && inView && styles['image__three_inview']}`}
		// 				src={task2Small}
		// 				alt={'task2'}
		// 			/>
		// 		</div>
		// 	}

		// {/*<Image*/}
		// {/*	className={`${styles[`image`]} ${inView && styles['image_inview']}`}*/}
		// {/*	src={aim}*/}
		// {/*	alt={'aim'}*/}
		// {/*/>*/}
		// {/*<Image*/}
		// {/*	className={`${styles[`image`]} ${inView && styles['image_inview']}`}*/}
		// {/*	src={task1}*/}
		// {/*	alt={'task1'}*/}
		// {/*/>*/}
		// {/*<Image*/}
		// {/*	className={`${styles[`image`]} ${inView && styles['image_inview']}`}*/}
		// {/*	src={task2}*/}
		// {/*	alt={'task2'}*/}
		// {/*/>*/}
		// </div>
	);
}
