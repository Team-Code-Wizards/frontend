import style from './style.module.scss';

export default function AboutUs() {
	return (
		<section id="about-us" className={style['about-us']}>
			<h2 className={style['about-us__h2-title']}>О нас</h2>
			<h3 className={style['about-us__h3-title']}>
				Мы – коллектив творческих умов, готовых воплощать ваши идеи в цифровую
				реальность.
			</h3>
			<div className={style['about-us__main']}>
				<div className={style['about-us__image']} />
				<div className={style['about-us__goals']}>
					<ul className={style['goals-list']}>
						<li className={style['goals-list__item']}>5 лет опыта</li>
						<li className={style['goals-list__item']}>Внедрение инноваций</li>
						<li className={style['goals-list__item']}>
							Современные технологии
						</li>
					</ul>
					<div className={style['about-us__goals-resume']}>
						<p className={style['goals-resume__item']}>
							Мы начали как группа энтузиастов, которые верили в силу креатива и
							технологий. С течением времени наша страсть к веб-разработке
							превратилась в виртуозное искусство создания сайтов для малого и
							среднего бизнеса. Мы используем передовые решения для того, чтобы
							ваш сайт не только соответствовал, но и опережал свое время.
						</p>
						<p className={style['goals-resume__item']}>
							Пять лет опыта — это не просто цифры, это накопленные знания,
							глубокое понимание отрасли и надежная платформа для вашего успеха.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
