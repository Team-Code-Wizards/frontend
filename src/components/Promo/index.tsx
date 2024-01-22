import ArrowIcon from '@/images/icons/ArrowIcon';
import TelegramIcon from '@/images/icons/TelegramIcon';
import ViberIcon from '@/images/icons/ViberIcon';
import WhatsappIcon from '@/images/icons/WhatsappIcon';

import Form from './Form';
import style from './style.module.scss';

//TODO Добавить корректные ссылки

export default function Promo() {
	return (
		<section className={style['promo']}>
			<div className={style['promo__container']}>
				<div className={style['promo__main']}>
					<h2 className={style['promo__title']}>
						Мы не просто создаем сайты.
						<br /> Мы строим цифровые пространства, где каждая строчка кода –
						это мелодия успеха вашего бизнеса
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
				<Form className={style['promo__form']} />
			</div>
		</section>
	);
}
