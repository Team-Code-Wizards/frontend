import React from 'react';

import Image from 'next/image';

import imageFour from '&/images/interaction/testing-four.webp';
import imageOne from '&/images/interaction/testing-one.webp';
import imageThree from '&/images/interaction/testing-three.webp';
import imageTwo from '&/images/interaction/testing-two.webp';

import styles from './style.module.scss';

export default function StepFive(inView: boolean) {
	return (
		<div className={`${styles['images']} ${inView && styles['images_inview']}`}>
			<div className={styles['images__lineone']}>
				<Image
					src={imageOne}
					width={71.55}
					height={71.55}
					alt="1"
					className={styles['images__lineone_one']}
				/>
				<Image
					src={imageTwo}
					width={71.55}
					height={71.55}
					alt="2"
					className={styles['images__lineone_two']}
				/>
			</div>
			<div className={styles['images__linetwo']}>
				<Image
					src={imageThree}
					width={71.55}
					height={71.55}
					alt="3"
					className={styles['images__linetwo_one']}
				/>
				<Image
					src={imageFour}
					width={71.55}
					height={71.55}
					alt="4"
					className={styles['images__linetwo_two']}
				/>
			</div>
		</div>
	);
}
