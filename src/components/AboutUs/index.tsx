'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import UpButton from '@/components/UpButton';

import styles from './styles.module.scss';

export default function AboutUs() {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 1,
		triggerOnce: true,
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

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
			<UpButton inView={inView} />
		</section>
	);
}
