import Image from 'next/image';

import closeImage from '../../images/popup/close.svg';
import successImage from '../../images/popup/success.svg';
import styles from './style.module.scss';

export default function successPopup() {
	return (
		<div className={styles['popup-background']}>
			<Image
				src={successImage}
				alt={'успех'}
				className={styles['popup-icon_success']}
			/>
			<Image
				src={closeImage}
				alt={'закрыть'}
				className={styles['popup-icon_close']}
			/>
			<p className={styles['popup-text_success']}>Заявка успешно отправлена!</p>
		</div>
	);
}
