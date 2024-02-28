import Image from 'next/image';

import bottomIcon from './approach-bottom-icon.webp';
import leftIcon from './approach-left-icon.webp';
import middleIcon from './approach-middle-icon.webp';
import rightIcon from './approach-right-icon.webp';
import approach from './approach.webp';
import style from './style.module.scss';

const ApproachImage: () => JSX.Element = () => {
	return (
		<div className={style['approach-wrapper']}>
			<Image
				className={style['approach-wrapper__background']}
				src={approach}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_left']}`}
				src={leftIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_middle']}`}
				src={middleIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_right']}`}
				src={rightIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_bottom']}`}
				src={bottomIcon}
				alt="Картинка"
			/>
		</div>
	);
};

export default ApproachImage;
