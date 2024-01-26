'use client';

import { FormEvent } from 'react';

import ArrowIcon from '../../../public/images/icons/ArrowIcon';
import TelegramIcon from '../../../public/images/icons/TelegramIcon';
import ViberIcon from '../../../public/images/icons/ViberIcon';
import WhatsappIcon from '../../../public/images/icons/WhatsappIcon';
import Form from './PromoForm';
import styles from './styles.module.scss';

//TODO Добавить корректные ссылки

export default function Promo() {
	const sendRequestForCallback = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<header id="promo" className={styles['promo']}>
			<div className={styles['promo__container']}>
				<div className={styles['promo__main']}>
					<div className={styles['promo__h1-title-box']}>
						<span className={styles['promo__copyright']}>©&nbsp;</span>
						<h1 className={styles['promo__h1-title']}>Команда Code Wizards</h1>
					</div>
					<h2 className={styles['promo__title']}>
						Мы не просто создаем сайты.
						<br /> Мы строим цифровые пространства, где каждая строчка кода –
						это мелодия успеха вашего бизнеса.
					</h2>
					<ul className={styles['promo__link-list']}>
						<li className={styles['promo__link-box']}>
							<a href="#" className={styles['promo__link']}>
								<TelegramIcon size={[27, 26]} />
								<ArrowIcon />
							</a>
						</li>
						<li className={styles['promo__link-box']}>
							<a href="#" className={styles['promo__link']}>
								<WhatsappIcon size={[27, 26]} />
								<ArrowIcon />
							</a>
						</li>
						<li className={styles['promo__link-box']}>
							<a href="#" className={styles['promo__link']}>
								<ViberIcon size={[25, 25]} />
								<ArrowIcon />
							</a>
						</li>
					</ul>
				</div>
				<Form onSubmit={sendRequestForCallback} />
			</div>
		</header>
	);
}
