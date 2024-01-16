import Image from 'next/image';

import laptopImage from '@/images/lap-top-image.png';
import sparklesImage from '@/images/sparkles.png';

import styles from './style.module.scss';

export default function AboutUs() {
	return (
		<div className={styles['AboutUs']}>
			<div className={styles['about-us__title']}>
				<h1>О нас</h1>
				<h3>
					Мы – коллектив творческих умов, готовых воплощать <br /> ваши идеи в
					цифровую реальность.
				</h3>
			</div>
			<div className={styles['about-us__content']}>
				<div style={{ position: 'relative' }}>
					<Image src={laptopImage} alt={'Laptop image'} />
					<Image
						src={sparklesImage}
						alt={'Sparkles'}
						style={{ position: 'absolute', top: '33%', left: '38%' }}
					/>
				</div>
				<div>
					<div className={styles['about-us__content_goals']}>
						<p>5 лет опыта</p>
						<p>Внедрение инноваций</p>
						<p>Современные технологии</p>
					</div>
					<div className={styles['about-us__content_resume']}>
						<p>
							Мы начали как группа энтузиастов, которые верили в силу креатива и
							технологий. С течением времени наша страсть к веб-разработке
							превратилась в виртуозное искусство создания сайтов для малого и
							среднего бизнеса. Мы используем передовые решения для того, чтобы
							ваш сайт не только соответствовал, но и опережал свое время.
						</p>
						<p>
							Пять лет опыта — это не просто цифры, это накопленные знания,
							глубокое понимание отрасли и надежная платформа для вашего успеха.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
