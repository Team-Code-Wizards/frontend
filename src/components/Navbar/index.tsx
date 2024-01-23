import LogoIcon from '@/images/header/LogoIcon';

import styles from './style.module.scss';

//TODO добавить плавный скролл до разделов и айди отзывов

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<a href="#promo" className={styles['nabar__logo']}>
				<LogoIcon />
			</a>
			<ul className={styles['navbar__link-list']}>
				<li className={styles['navbar__link-box']}>
					<a href="#about-us" className={styles['navbar__link']}>
						О нас
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="#services" className={styles['navbar__link']}>
						Услуги
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="#portfolio" className={styles['navbar__link']}>
						Наши работы
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="#guarantees" className={styles['navbar__link']}>
						Гарантии
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						Отзывы
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="#contacts" className={styles['navbar__link']}>
						Контакты
					</a>
				</li>
			</ul>
			<a className={styles['navbar__tel']} href="tel:+79504241338">
				+7 (950) 424-13-38
			</a>
		</nav>
	);
}
