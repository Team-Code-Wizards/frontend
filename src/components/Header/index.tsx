import Image from 'next/image';

import LogoHeader from '../../images/header/logo-header.svg';
import styles from './style.module.scss';

export default function Header() {
	return (
		<header className={styles['header']}>
			{/*<div className={styles['header__container']}>*/}
			<h1>
				<span>Code Wizards</span>
				<Image src={LogoHeader} alt={'Logo Code Wizards'} />
			</h1>
			<nav className={styles['header__links']}>
				<a href="">О нас</a>
				<a href="">Услуги</a>
				<a href="">Наши работы</a>
				<a href="">Гарантии</a>
				<a href="">Отзывы</a>
				<a href="">Контакты</a>
			</nav>
			<a href="tel:+79504241338">+7 (950) 424-13-38</a>
			{/*</div>*/}
		</header>
	);
}
