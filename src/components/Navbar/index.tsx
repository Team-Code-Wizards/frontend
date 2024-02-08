'use client';

import { useEffect, useRef, useState } from 'react';

import { navbarItems } from '@/constants/Navbar';

import CloseIcon from '../../../public/images/header/CloseIcon';
import LogoIcon from '../../../public/images/header/LogoIcon';
import MenuIcon from '../../../public/images/header/MenuIcon';
import TelIcon from '../../../public/images/header/TelIcon';
import styles from './style.module.scss';

//TODO добавить плавный скролл до разделов

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState('');
	const navRef = useRef<null | HTMLElement>(null);

	const handlerHideNavBar = () => {
		setIsNavOpen((prevState) => {
			if (prevState === 'active') {
				return 'close';
			}
			return '';
		});
	};

	const handlerWindHideNavBar = (event: MouseEvent) => {
		if (
			navRef.current instanceof HTMLElement &&
			event.target instanceof HTMLElement &&
			!navRef.current.contains(event.target)
		) {
			handlerHideNavBar();
		}
	};

	useEffect(() => {
		setTimeout(() => {
			window.addEventListener('click', handlerWindHideNavBar);
		});
		return () => window.removeEventListener('click', handlerWindHideNavBar);
	}, []);

	return (
		<>
			<div className={styles['nav-icons']}>
				<a className={styles['nav-icons__tel']} href="tel:+79504241338">
					<TelIcon />
				</a>
				<button
					onClick={() => setIsNavOpen('active')}
					className={styles['nav-icons__menu']}
				>
					<MenuIcon />
				</button>
			</div>
			<nav
				ref={navRef}
				className={`${styles['navbar']} ${isNavOpen ? styles[isNavOpen] : ''}`}
			>
				<button
					onClick={handlerHideNavBar}
					className={styles['navbar__close-btn']}
				>
					<CloseIcon />
				</button>
				<a href="#promo" className={styles['navbar__logo']}>
					<LogoIcon />
				</a>
				<ul className={styles['navbar__link-list']}>
					{navbarItems.map((item) => (
						<li key={item.id} className={styles['navbar__link-box']}>
							<a
								href={item.link}
								onClick={handlerHideNavBar}
								className={styles['navbar__link']}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<a className={styles['navbar__tel']} href="tel:+79504241338">
					+7 (950) 424-13-38
				</a>
			</nav>
		</>
	);
}
