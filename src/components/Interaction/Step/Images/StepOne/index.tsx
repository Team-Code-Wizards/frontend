import Image from 'next/image';

import aim from '&/images/interaction/stepOne/Frame-323.webp';
import task1 from '&/images/interaction/stepOne/Frame-324.webp';
import task2 from '&/images/interaction/stepOne/Frame-326.webp';

import styles from './style.module.scss';

export default function StepOne() {
	return (
		<div className={styles['step-one']}>
			<Image className={styles['image']} src={aim} alt={'aim'} />
			<Image className={styles['image']} src={task1} alt={'task1'} />
			<Image className={styles['image']} src={task2} alt={'task2'} />
		</div>
	);
}
