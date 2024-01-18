import Image from 'next/image';

import LogoNoText from '@/images/logo/logo-no-text.svg';
import LogoText from '@/images/logo/logo-text.svg';

import styles from './styles.module.scss';

const Footer = (): React.ReactElement => {
	return (
		<>
			<section className={styles['footer']}>
				<div className={styles['footer__row']}>
					<div>
						<p>Политика конфиденциальности</p>
						<p>© Code Wizards, 2023</p>
					</div>
					<div>
						<p>+7 (950) 424-13-38</p>
						<p>email@code-wizards.team</p>
					</div>
				</div>

				<div className={styles['footer__row']}>
					<Image
						src={LogoNoText}
						alt=""
						className={styles['footer__image-no-text']}
					/>
					<Image
						src={LogoText}
						alt=""
						className={styles['footer__image-text']}
					/>
					<div className={styles['footer__social-group']}></div>
				</div>
			</section>
		</>
	);
};

export default Footer;
