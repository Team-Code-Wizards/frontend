import Image from 'next/image';

import LogoHeader from '../../images/header/logo-header.svg';
import styles from './style.module.scss';

export default function Header() {
	return (
		<header className={styles['header']}>
			<Image src={LogoHeader} alt={'Logo Code Wizards'} />
			<ul className={styles['header__links']}>
				<li>
					<a href="">О нас</a>
				</li>
				<li>
					<a href="">Услуги</a>
				</li>
				<li>
					<a href="">Наши работы</a>
				</li>
				<li>
					<a href="">Гарантии</a>
				</li>
				<li>
					<a href="">Отзывы</a>
				</li>
				<li>
					<a href="">Контакты</a>
				</li>
			</ul>
			<a href="tel:+79504241338">+7 (950) 424-13-38</a>
		</header>
	);
}
