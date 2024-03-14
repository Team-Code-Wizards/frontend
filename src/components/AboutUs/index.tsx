'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UpButton from '@/components/UpButton';

import styles from './styles.module.scss';

export default function AboutUs() {
	const [width, setWidth] = useState(1440);
	const [showButton, setShowButton] = useState(true);
	const [timer, setTimer] = useState<number | undefined>(undefined);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(true);
			if (timer !== undefined) {
				clearTimeout(timer);
			}
			const newTimer = setTimeout(() => setShowButton(false), 3000);
			setTimer(newTimer as unknown as number);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (timer !== undefined) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	let threshold = 0.8;

	if (width < 835) {
		threshold = 0.7;
	} else if (width < 601) {
		threshold = 0.6;
	} else if (width < 400) {
		threshold = 0.5;
	}

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: threshold,
		triggerOnce: true,
	});

	return (
		<section id="about-us" className={styles['about-us']} ref={ref}>
			<h2 className={styles['about-us__h2-title']}>О нас</h2>
			<h3 className={styles['about-us__h3-title']}>
				Мы – коллектив творческих умов, готовых воплощать ваши идеи в цифровую
				реальность.
			</h3>
			<div className={styles['about-us__main']}>
				<div className={styles['about-us__image']} />
				<div className={styles['about-us__goals']}>
					<ul className={styles['goals-list']}>
						<li className={styles['goals-list__item']}>5 лет опыта</li>
						<li className={styles['goals-list__item']}>Внедрение инноваций</li>
						<li className={styles['goals-list__item']}>
							Современные технологии
						</li>
					</ul>
					<div className={styles['about-us__goals-resume']}>
						<p className={styles['goals-resume__item']}>
							Мы начали как группа энтузиастов, которые верили в силу креатива и
							технологий. С течением времени наша страсть к веб-разработке
							превратилась в виртуозное искусство создания сайтов для малого и
							среднего бизнеса. Мы используем передовые решения для того, чтобы
							ваш сайт не только соответствовал, но и опережал свое время.
						</p>
						<p className={styles['goals-resume__item']}>
							Пять лет опыта — это не просто цифры, это накопленные знания,
							глубокое понимание отрасли и надежная платформа для вашего успеха.
						</p>
					</div>
				</div>
			</div>
			<UpButton inView={inView} showButton={showButton} />
		</section>
	);
}
