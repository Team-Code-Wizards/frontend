import Image from 'next/image';

import bottomIcon from './approach-bottom-icon.webp';
import leftIcon from './approach-left-icon.webp';
import middleIcon from './approach-middle-icon.webp';
import rightIcon from './approach-right-icon.webp';
import approach from './approach.webp';
import style from './style.module.scss';

const ApproachImage = (inView: boolean): JSX.Element => {
	console.log(inView);
	return (
		<div
			className={`${style[`approach-wrapper`]} ${inView && style[`approach-wrapper_active`]}`}
		>
			<Image
				className={style[`approach-wrapper__background`]}
				src={approach}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_left']} ${inView && style[`approach-wrapper__icon_active-left`]}`}
				src={leftIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_middle']} ${inView && style[`approach-wrapper__icon_active-middle`]}`}
				src={middleIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_right']} ${inView && style[`approach-wrapper__icon_active-right`]}`}
				src={rightIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_bottom']} ${inView && style[`approach-wrapper__icon_active-bottom`]}`}
				src={bottomIcon}
				alt="Картинка"
			/>
		</div>
	);
};

export default ApproachImage;
