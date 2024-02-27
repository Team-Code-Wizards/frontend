'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

import PromoApproachIcon from '&/images/icons/PromoApproachIcon';
import PromoDesgnIcon from '&/images/icons/PromoDesignIcon';
import PromoQualitycon from '&/images/icons/PromoQualityIcon';
import TelegramIcon from '&/images/icons/TelegramIcon';
import ViberIcon from '&/images/icons/ViberIcon';
import WhatsappIcon from '&/images/icons/WhatsappIcon';
import socialUrl from '@/constants/SocialURL/index';

import PromoForm from './PromoForm';
import styles from './styles.module.scss';

interface IPromoState {
	[key: string]: {
		h1: string;
		promoImage: StaticImageData;
	};
}

export default function AdvertisingPromo({ promoConfig }: IPromoState) {
	return (
		<header id="promo" className={styles['promo']}>
			<div className={styles['promo__container']}>
				<div className={styles['promo__main']}>
					<div className={styles['promo__advantages-wrapper']}>
						<div
							className={`${styles['promo__advantages-box']} ${styles['promo__advantages-box_quality']}`}
						>
							<PromoQualitycon />
							<p className={styles['promo__advantages']}>Гарантия качества</p>
						</div>
						<div
							className={`${styles['promo__advantages-box']} ${styles['promo__advantages-box_design']}`}
						>
							<PromoDesgnIcon />
							<p className={styles['promo__advantages']}>Уникальный дизайн</p>
						</div>
						<div
							className={`${styles['promo__advantages-box']} ${styles['promo__advantages-box_approach']}`}
						>
							<PromoApproachIcon />
							<p className={styles['promo__advantages']}>Гибкий подход</p>
						</div>
					</div>
					<div className={styles['promo__content']}>
						<h1 className={styles['promo__title']}>{promoConfig.h1}</h1>
						<p className={styles['promo__description']}>
							Мы не просто создаем сайты.
							<br /> Мы строим цифровые пространства, где каждая строчка кода –
							это мелодия успеха вашего бизнеса.
						</p>
					</div>
					<ul className={styles['promo__link-list']}>
						<li className={styles['promo__link-box']}>
							<a
								href={socialUrl.telegram}
								target="_blank"
								className={styles['promo__link']}
								aria-label="Telegram link"
							>
								<TelegramIcon size={[15, 15]} />
							</a>
						</li>
						<li className={styles['promo__link-box']}>
							<a
								href={socialUrl.watsup}
								target="_blank"
								className={styles['promo__link']}
								aria-label="Whatsapp link"
							>
								<WhatsappIcon size={[15, 15]} />
							</a>
						</li>
						<li className={styles['promo__link-box']}>
							<a
								href={socialUrl.viber}
								target="_blank"
								className={styles['promo__link']}
								aria-label="Viber link"
							>
								<ViberIcon size={[15, 15]} />
							</a>
						</li>
					</ul>
					<PromoForm />
					<div className={styles['promo__preview']}>
						<Image
							src={promoConfig.promoImage}
							alt="Превью сайта"
							className={styles['promo__preview-img']}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
