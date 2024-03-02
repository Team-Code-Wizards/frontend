import Image from 'next/image';

import imageFour from '&/images/interaction/stepFive/testing-four.webp';
import imageOne from '&/images/interaction/stepFive/testing-one.webp';
import imageThree from '&/images/interaction/stepFive/testing-three.webp';
import imageTwo from '&/images/interaction/stepFive/testing-two.webp';

import styles from './style.module.scss';

export default function StepFive(inView: boolean, isActive: boolean) {
	return (
		<div
			className={`${styles['images']} ${inView && isActive && styles['images_inview']}`}
		>
			<div
				className={`${styles['images__lineone']} ${inView && styles['images__lineone_inview']}`}
			>
				<Image
					src={imageOne}
					width={71.55}
					height={71.55}
					alt="1"
					className={`${styles['images__lineone']} ${styles['images__lineone_one']} ${inView && styles['images__lineone_inview-one']}`}
				/>
				<Image
					src={imageTwo}
					width={71.55}
					height={71.55}
					alt="2"
					className={`${styles['images__lineone']} ${styles['images__lineone_two']} ${inView && styles['images__lineone_inview-two']}`}
				/>
			</div>
			<div
				className={`${styles['images__linetwo']} ${inView && styles['images__linetwo_inview']}`}
			>
				<Image
					src={imageThree}
					width={71.55}
					height={71.55}
					alt="3"
					className={`${styles['images__linetwo']} ${styles['images__linetwo_one']} ${inView && styles['images__linetwo_inview-one']}`}
				/>
				<Image
					src={imageFour}
					width={71.55}
					height={71.55}
					alt="4"
					className={`${styles['images__linetwo']} ${styles['images__linetwo_two']} ${inView && styles['images__linetwo_inview-two']}`}
				/>
			</div>
		</div>
	);
}
