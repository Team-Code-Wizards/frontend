import Image from 'next/image';

import failureImage from '../../../public/images/popup/failure.svg';
import successImage from '../../../public/images/popup/success.svg';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

//Для проверки в файле MainPage нужно импортировать компонент Popup и передавать ему свойста <Popup isSuccess={false}
//или <Popup isSuccess={true} />

export default function Popup({ isSuccess }: { isSuccess: boolean }) {
	const className = isSuccess
		? styles['popup-icon_success']
		: styles['popup-icon_failure'];
	return (
		<ModalBackground>
			<div className={styles['popup-background']}>
					<Image
						src={isSuccess ? successImage : failureImage}
						alt="icon"
						className={className}
						width={75}
					/>
					<button
						className={styles['popup-icon_close']}
						aria-label="закрыть"
						type="button"
					></button>
					<p
						className={
							isSuccess
								? styles['popup-message_success']
								: styles['popup-message_failure']
						}
					>
						{isSuccess ? 'Заявка успешно отправлена!' : 'Ошибка отправки!'}
					</p>
				</div>
					</ModalBackground>
	);
}
