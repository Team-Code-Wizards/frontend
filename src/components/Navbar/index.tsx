import CloseIcon from '../../../public/images/header/CloseIcon';
import LogoIcon from '../../../public/images/header/LogoIcon';
import MenuIcon from '../../../public/images/header/MenuIcon';
import TelIcon from '../../../public/images/header/TelIcon';
import styles from './style.module.scss';

//TODO добавить плавный скролл до разделов и айди отзывов

export default function Navbar() {
	return (
		<>
			<div className={styles['nav-icons']}>
				<button className={styles['nav-icons__tel']}>
					<TelIcon />
				</button>
				<button className={styles['nav-icons__menu']}>
					<MenuIcon />
				</button>
			</div>
			<nav className={styles['navbar']}>
				<button className={styles['navbar__close-btn']}>
					<CloseIcon />
				</button>
				<a href="#promo" className={styles['navbar__logo']}>
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
						<a href="#recommendation" className={styles['navbar__link']}>
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
		</>
	);
}
