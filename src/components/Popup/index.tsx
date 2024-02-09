'use client';

import Image from 'next/image';

import failureImage from '../../../public/images/popup/failure.svg';
import successImage from '../../../public/images/popup/success.svg';
import { useInfoMsg } from '../InfoMsgContext';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

export default function Popup() {
	const { infoMsg, hideInfoMsg } = useInfoMsg();

	const className = infoMsg
		? styles['popup__icon_success']
		: styles['popup__icon_failure'];
	return (
		<>
			{typeof infoMsg === 'boolean' && (
				<ModalBackground>
					<div className={styles.popup}>
						<div className={styles['popup__background']}>
							<button
								onClick={hideInfoMsg}
								className={styles['popup__icon_close']}
								aria-label="закрыть"
								type="button"
							></button>
							<div className={styles['popup__info']}>
								<Image
									src={infoMsg ? successImage : failureImage}
									alt="icon"
									className={className}
									width={75}
								/>
								<p
									className={
										infoMsg
											? styles['popup__message_success']
											: styles['popup__message_failure']
									}
								>
									{infoMsg ? 'Заявка успешно отправлена!' : 'Ошибка отправки!'}
								</p>
							</div>
						</div>
					</div>
				</ModalBackground>
			)}
		</>
	);
}
