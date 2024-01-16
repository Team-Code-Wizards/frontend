import Image from 'next/image';

import closeImage from '../../images/popup/close.svg';
import failureImage from '../../images/popup/failure.svg';
import styles from './style.module.scss';

export default function failurePopup() {
	return (
		<div className={styles['popup-background']}>
			<Image
				src={failureImage}
				alt={'ошибка'}
				className={styles['popup-icon_failure']}
			/>
			<Image
				src={closeImage}
				alt={'закрыть'}
				className={styles['popup-icon_close']}
			/>
			<p className={styles['popup-text_failure']}>Ошибка отправки!</p>
		</div>
	);
}
