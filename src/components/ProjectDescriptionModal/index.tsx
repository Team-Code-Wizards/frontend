import Image from 'next/image';

import IconClose from '../../../public/images/modal/IconClose';
import landingImage from '../../../public/images/modal/projectDescription/landing-image.webp';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

export default function ProjectDescriptionModal() {
	return (
		<ModalBackground>
			<div className={styles['modal']}>
				<button type="button" className={styles['modal__close-btn']}>
					<IconClose />
				</button>
				<h2 className={styles['modal__title']}>Лендинг</h2>
				<div className={styles['modal__description']}>
					<p>
						Лендинг (он же посадочная страница, или landing page) - это
						одностраничный сайт, созданный для конкретной цели, например, для
						продвижения конкретного товара или услуги. Он предоставляет
						информацию, разъясняющую преимущества предложения и убеждающую
						посетителя совершить целевое действие, например, оформить заказ,
						подписаться на рассылку или скачать информационный материал.
					</p>
				</div>
				<div className={styles['modal__example']}>
					<Image src={landingImage} alt="Landing image" />
					<button type="submit" className={styles['modal__btn']}>
						Заказать
					</button>
				</div>
			</div>
		</ModalBackground>
	);
}
