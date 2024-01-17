import Image from 'next/image';

import failureImage from '../../images/popup/failure.svg';
import successImage from '../../images/popup/success.svg';
import styles from './style.module.scss';

//Для проверки в файле MainPage нужно импортировать компонент Popup и передавать ему свойста <Popup isSuccess={false}
//или <Popup isSuccess={true} />

export default function Popup({ isSuccess }: { isSuccess: boolean }) {
	const className = isSuccess
		? styles['popup-icon_success']
		: styles['popup-icon_failure'];
	return (
		<div className={styles['popup-background']}>
			<Image
				src={isSuccess ? successImage : failureImage}
				alt="icon"
				className={className}
			/>
			<button
				className={styles['popup-icon_close']}
				aria-label="закрыть"
			></button>
			<p
				className={
					isSuccess
						? styles['popup-message_success']
						: styles['popup-message_failure']
				}
			>
				{isSuccess ? 'Успешно отправлено!' : 'Ошибка отправки!'}
			</p>
		</div>
	);
}
