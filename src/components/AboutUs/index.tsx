import Image from 'next/image';

import laptopImage from '&/images/aboutUs/laptop-image.png';

import style from './style.module.scss';

export default function AboutUs() {
	return (
		<section id="about-us" className={style['about-us']}>
			<div className={style['about-us__container']}>
				<h2>О нас</h2>
				<h3>
					Мы – коллектив творческих умов, готовых воплощать <br /> ваши идеи в
					цифровую реальность.
				</h3>
				<div className={style['about-us__container_content']}>
					<Image
						src={laptopImage}
						className={style['image']}
						alt={'laptop-image'}
					/>
					<div className={style['about-us__container_content_text']}>
						<div className={style['about-us__container_content_text_goals']}>
							<p>5 лет опыта</p>
							<p>Внедрение инноваций</p>
							<p>Современные технологии</p>
						</div>
						<div className={style['about-us__container_content_text_resume']}>
							<p>
								Мы начали как группа энтузиастов, которые верили в силу креатива
								и технологий. С течением времени наша страсть к веб-разработке
								превратилась в виртуозное искусство создания сайтов для малого и
								среднего бизнеса. Мы используем передовые решения для того,
								чтобы ваш сайт не только соответствовал, но и опережал свое
								время.
							</p>
							<p>
								Пять лет опыта — это не просто цифры, это накопленные знания,
								глубокое понимание отрасли и надежная платформа для вашего
								успеха.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
