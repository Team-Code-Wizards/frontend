import Image from 'next/image';

import LogoHeader from '../../images/header/logo-header.svg';
import styles from './style.module.scss';

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<Image src={LogoHeader} alt={'Logo-Code-Wizards'} />
			<ul className={styles['navbar__link-list']}>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						О нас
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						Услуги
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						Наши работы
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						Гарантии
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
						Отзывы
					</a>
				</li>
				<li className={styles['navbar__link-box']}>
					<a href="" className={styles['navbar__link']}>
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
