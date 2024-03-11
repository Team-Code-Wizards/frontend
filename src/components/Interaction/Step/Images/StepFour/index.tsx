import Image from 'next/image';

import bottomIcon from '&/images/interaction/stepFour/approach-bottom-icon.webp';
import leftIcon from '&/images/interaction/stepFour/approach-left-icon.webp';
import middleIcon from '&/images/interaction/stepFour/approach-middle-icon.webp';
import rightIcon from '&/images/interaction/stepFour/approach-right-icon.webp';
import approach from '&/images/interaction/stepFour/approach.webp';

import style from './style.module.scss';

const StepFour = (inView: boolean, isActive: boolean): JSX.Element => {
	return (
		<div
			className={`${style[`approach-wrapper`]} ${isActive && inView && style[`approach-wrapper_active`]}`}
		>
			<Image
				className={style[`approach-wrapper__background`]}
				src={approach}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_left']} ${isActive && inView && style[`approach-wrapper__icon_active-left`]}`}
				src={leftIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_middle']} ${isActive && inView && style[`approach-wrapper__icon_active-middle`]}`}
				src={middleIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_right']} ${isActive && inView && style[`approach-wrapper__icon_active-right`]}`}
				src={rightIcon}
				alt="Картинка"
			/>
			<Image
				className={`${style['approach-wrapper__icon']} ${style['approach-wrapper__icon_bottom']} ${isActive && inView && style[`approach-wrapper__icon_active-bottom`]}`}
				src={bottomIcon}
				alt="Картинка"
			/>
		</div>
	);
};

export default StepFour;
