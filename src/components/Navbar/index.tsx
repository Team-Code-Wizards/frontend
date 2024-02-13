'use client';

import { useEffect, useState } from 'react';

import { navbarItems } from '@/constants/Navbar';

import CloseIcon from '../../../public/images/header/CloseIcon';
import LogoIcon from '../../../public/images/header/LogoIcon';
import MenuIcon from '../../../public/images/header/MenuIcon';
import TelIcon from '../../../public/images/header/TelIcon';
import styles from './style.module.scss';

//TODO добавить плавный скролл до разделов

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handlerHideNavBar = () => setIsNavOpen(false);

	const handlerWindHideNavBar = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.classList.contains('navbar')
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
				<a
					className={styles['nav-icons__tel']}
					href="tel:+79504241338"
					aria-label="Call"
				>
					<TelIcon />
				</a>
				<button
					onClick={() => setIsNavOpen(true)}
					className={styles['nav-icons__menu']}
					aria-label="Menu button"
				>
					<MenuIcon />
				</button>
			</div>
			<nav
				className={`${styles['navbar']} ${isNavOpen ? styles['active'] : ''}`}
			>
				<button
					onClick={handlerHideNavBar}
					className={styles['navbar__close-btn']}
					aria-label="Close menu"
				>
					<CloseIcon />
				</button>
				<a href="#promo" className={styles['navbar__logo']} aria-label="Logo">
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
				<a
					className={styles['navbar__tel']}
					href="tel:+79504241338"
					aria-label="Call"
				>
					+7 (950) 424-13-38
				</a>
			</nav>
		</>
	);
}
