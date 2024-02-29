import Image from 'next/image';

import aim from '&/images/interaction/stepOne/Frame-323.webp';
import task1 from '&/images/interaction/stepOne/Frame-324.webp';
import task2 from '&/images/interaction/stepOne/Frame-326.webp';

import styles from './style.module.scss';

interface IStepOne {
	inView: boolean;
}

export default function StepOne({ inView }: IStepOne) {
	return (
		<div className={`${styles[`step-one${inView ? '_inview' : ''}`]}`}>
			<Image
				className={`${styles[`image${inView ? '_inview' : ''}`]}`}
				src={aim}
				alt={'aim'}
			/>
			<Image
				className={`${styles[`image${inView ? '_inview' : ''}`]}`}
				src={task1}
				alt={'task1'}
			/>
			<Image
				className={`${styles[`image${inView ? '_inview' : ''}`]}`}
				src={task2}
				alt={'task2'}
			/>
		</div>
	);
}
