import Image from 'next/image';

// import bubble1Mobile from '&/images/interaction/stepSix/bubble-1-1280.webp';
import bubble1 from '&/images/interaction/stepSix/bubble-1.webp';
import bubble2 from '&/images/interaction/stepSix/bubble-2.webp';

import styles from './style.module.scss';

export default function StepSix() {
	return (
		<div className={styles['step-six']}>
			<Image
				className={`${styles['image']} ${styles['image_one']}`}
				src={bubble1}
				alt={'Диалоговое окно'}
			/>
			<Image
				className={`${styles['image']} ${styles['image_two']}`}
				src={bubble2}
				alt={'Ответ'}
			/>
		</div>
	);
}
