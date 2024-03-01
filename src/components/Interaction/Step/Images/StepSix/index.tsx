import Image from 'next/image';

// import bubble1Mobile from '&/images/interaction/stepSix/bubble-1-1280.webp';
import bubble1 from '&/images/interaction/stepSix/bubble-1.webp';
import bubble2 from '&/images/interaction/stepSix/bubble-2.webp';

import styles from './style.module.scss';

export default function StepSix(inView: boolean, isActive: boolean) {
	console.log(isActive);
	return (
		<div className={styles['step-six']}>
			{/* <div className={`${styles['step-six']} ${inView && styles['step-six_inview']}`} > */}
			<Image
				// className={`${styles['image']} ${styles['image_one']}`}
				className={`${styles['image']} ${styles['image__one']} ${inView && styles['image__one_inview']}`}
				src={bubble1}
				alt={'Диалоговое окно'}
			/>
			<Image
				// className={`${styles['image']} ${styles['image_two']}`}
				className={`${styles['image']} ${styles['image__two']} ${inView && styles['image__two_inview']}`}
				src={bubble2}
				alt={'Ответ'}
			/>
		</div>
	);
}
