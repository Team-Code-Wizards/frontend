import Image from 'next/image';

import TelegramIcon from '@/images/icons/TelegramIcon';
import ViberIcon from '@/images/icons/ViberIcon';
import WhatsappIcon from '@/images/icons/WhatsappIcon';
import LogoNoText from '@/images/logo/logo-no-text.svg';
import LogoText from '@/images/logo/logo-text.svg';

import styles from './styles.module.scss';

//TODO добавить ссылки на соцсети

const Footer = (): React.ReactElement => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__row']}>
				<div className={styles['footer__row-first']}>
					<p>Политика конфиденциальности</p>
					<p>© Code Wizards, 2023</p>
				</div>
				<div>
					<a href="tel:+79504241338">+7 (950) 424-13-38</a>
					<a href="mailto:email@code-wizards.team">email@code-wizards.team</a>
					<Image
						src={LogoText}
						alt="Логотип Code Wizards"
						className={styles['footer__image-text-adaptive']}
					/>
				</div>
			</div>

			<div className={styles['footer__row']}>
				<Image
					src={LogoNoText}
					alt="Логотип"
					className={styles['footer__image-no-text']}
				/>
				<Image
					src={LogoText}
					alt="Логотип Code Wizards"
					className={styles['footer__image-text']}
				/>
				<div className={styles['footer__social-group']}>
					<a href="#" className={styles['footer__icon_telegram']}>
						<TelegramIcon />
					</a>
					<a href="#" className={styles['footer__icon_whatsapp']}>
						<WhatsappIcon />
					</a>
					<a href="#" className={styles['footer__icon_viber']}>
						<ViberIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
