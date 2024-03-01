import Image from 'next/image';

import aim from '&/images/interaction/stepOne/Frame-323.webp';
import task1 from '&/images/interaction/stepOne/Frame-324.webp';
import task2 from '&/images/interaction/stepOne/Frame-326.webp';

import styles from './style.module.scss';

export default function StepOne(inView: boolean, isActive: boolean) {
	return (
		<div
			className={`${styles['step-one']} ${inView && isActive && styles['step-one_inview']}`}
		>
			<Image
				className={`${styles[`image`]} ${inView && styles['image_inview']}`}
				src={aim}
				alt={'aim'}
			/>
			<Image
				className={`${styles[`image`]} ${inView && styles['image_inview']}`}
				src={task1}
				alt={'task1'}
			/>
			<Image
				className={`${styles[`image`]} ${inView && styles['image_inview']}`}
				src={task2}
				alt={'task2'}
			/>
		</div>
	);
}
