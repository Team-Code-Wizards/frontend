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
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handlerWindHideNavBar = (event: MouseEvent) => {
			if (
				navRef.current instanceof HTMLElement &&
				menuRef.current instanceof HTMLElement &&
				!event.composedPath().includes(navRef.current) &&
				!event.composedPath().includes(menuRef.current)
			) {
				setIsNavOpen(false);
			}
		};

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
					ref={menuRef}
					onClick={() => setIsNavOpen(true)}
					className={styles['nav-icons__menu']}
					aria-label="Menu button"
				>
					<MenuIcon />
				</button>
			</div>
			<nav
				ref={navRef}
				className={`${styles['navbar']} ${isNavOpen ? styles['active'] : ''}`}
			>
				<button
					onClick={() => setIsNavOpen(false)}
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
								onClick={() => setIsNavOpen(false)}
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
