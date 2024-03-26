import Image from 'next/image';

import socialUrl from '@/constants/SocialURL/index';

import TelegramIcon from '../../../public/images/icons/TelegramIcon';
import ViberIcon from '../../../public/images/icons/ViberIcon';
import WhatsappIcon from '../../../public/images/icons/WhatsappIcon';
import LogoNoText from '../../../public/images/logo/logo-no-text.svg';
import LogoText from '../../../public/images/logo/logo-text.svg';
import styles from './styles.module.scss';

const Footer = (): React.ReactElement => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__row']}>
				<div className={styles['footer__row-first']}>
					<p>
						<a
							className={`${styles['footer__link']}  ${styles['footer__link-policy']}`}
							href="/privacy-policy"
						>
							Политика конфиденциальности
						</a>
						This site is protected by reCAPTCHA and the Google
						<a href="https://policies.google.com/privacy">
							{' '}
							Privacy Policy{' '}
						</a>{' '}
						and{' '}
						<a href="https://policies.google.com/terms">
							{' '}
							Terms of Service{' '}
						</a>{' '}
						apply.
					</p>
					<p>© Code Wizards, 2023</p>
				</div>
				<div>
					<a
						href="tel:+79504241338"
						className={styles['footer__link']}
						aria-label="Call"
					>
						+7 (950) 424-13-38
					</a>
					<a
						href="mailto:email@code-wizards.team"
						className={styles['footer__link']}
						aria-label="Send e-mail"
					>
						email@code-wizards.team
					</a>
					<Image
						src={LogoText}
						alt="Логотип Code Wizards"
						className={styles['footer__image-text-adaptive']}
					/>
				</div>
			</div>
			<div className={styles['footer__row']}>
				<a
					href="#promo"
					className={styles['footer__image-no-text']}
					aria-label="Logo"
				>
					<Image src={LogoNoText} alt="Логотип" />
				</a>
				<Image
					src={LogoText}
					alt="Логотип Code Wizards"
					className={styles['footer__image-text']}
				/>
				<div className={styles['footer__social-group']}>
					<a
						href={socialUrl.telegram}
						target="_blank"
						className={styles['footer__link_telegram']}
						aria-label="Telegram link"
					>
						<TelegramIcon />
					</a>
					<a
						href={socialUrl.watsup}
						target="_blank"
						className={styles['footer__link_whatsapp']}
						aria-label="Whatsapp link"
					>
						<WhatsappIcon />
					</a>
					<a
						href={socialUrl.viber}
						target="_blank"
						className={styles['footer__link_viber']}
						aria-label="Viber link"
					>
						<ViberIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
