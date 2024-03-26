import Image from 'next/image';

import client from '&/images/interaction/stepTwo/client.webp';
import phone from '&/images/interaction/stepTwo/phone.webp';
import team from '&/images/interaction/stepTwo/team.webp';

import style from './style.module.scss';

const StepTwo = (inView: boolean, isActive: boolean): JSX.Element => {
	return (
		<div
			className={`${style[`wrapper`]} ${isActive && inView && style[`wrapper_active`]}`}
		>
			<div className={`${style[`members`]}`}>
				<Image
					className={`${style['img']} ${style['img_client']} ${isActive && inView && style[`img_client_active`]}`}
					src={client}
					alt="Client"
				/>

				<Image
					className={`${style['img']} ${style['img_team']} ${isActive && inView && style[`img_team_active`]}`}
					src={team}
					alt="Team"
				/>
			</div>
			<Image
				className={`${style['img']} ${style['img_phone']} ${isActive && inView && style[`img_phone_active`]}`}
				src={phone}
				alt="Phone call"
			/>
		</div>
	);
};

export default StepTwo;
