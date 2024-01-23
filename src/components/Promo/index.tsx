'use client';

import { FormEvent } from 'react';

import ArrowIcon from '../../../public/images/icons/ArrowIcon';
import TelegramIcon from '../../../public/images/icons/TelegramIcon';
import ViberIcon from '../../../public/images/icons/ViberIcon';
import WhatsappIcon from '../../../public/images/icons/WhatsappIcon';
import Form from './PromoForm';
import style from './style.module.scss';

//TODO Добавить корректные ссылки

export default function Promo() {
	const sendRequestForCallback = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<header id="promo" className={style['promo']}>
			<div className={style['promo__container']}>
				<div className={style['promo__main']}>
					<div className={style['promo__h1-title-box']}>
						<span className={style['promo__copyright']}>©&nbsp;</span>
						<h1 className={style['promo__h1-title']}>Команда Code Wizards</h1>
					</div>
					<h2 className={style['promo__title']}>
						Мы не просто создаем сайты.
						<br /> Мы строим цифровые пространства, где каждая строчка кода –
						это мелодия успеха вашего бизнеса.
					</h2>
					<ul className={style['promo__link-list']}>
						<li className={style['promo__link-box']}>
							<a href="#" className={style['promo__link']}>
								<TelegramIcon size={[27, 26]} />
								<ArrowIcon />
							</a>
						</li>
						<li className={style['promo__link-box']}>
							<a href="#" className={style['promo__link']}>
								<WhatsappIcon size={[27, 26]} />
								<ArrowIcon />
							</a>
						</li>
						<li className={style['promo__link-box']}>
							<a href="#" className={style['promo__link']}>
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
