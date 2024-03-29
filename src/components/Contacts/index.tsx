'use client';

import socialUrl from '@/constants/SocialURL/index';

import ArrowIcon from '../../../public/images/icons/ArrowIcon';
import TelegramIcon from '../../../public/images/icons/TelegramIcon';
import ViberIcon from '../../../public/images/icons/ViberIcon';
import WhatsappIcon from '../../../public/images/icons/WhatsappIcon';
import ContactsForm from './ContactsForm';
import styles from './styles.module.scss';

export default function Contacts() {
	return (
		<section id="contacts" className={styles['contacts']}>
			<h2 className={styles['contacts__title']}>Контакты</h2>
			<div className={styles['contacts__body']}>
				<ul className={styles['link-group']}>
					<li className={styles['link-box']}>
						<a
							className={styles['link']}
							href="mailto:email@code-wizards.team"
							type="email"
							aria-label="Send e-mail"
						>
							<p className={styles['link__item_word-space']}>
								<span className={styles['link__item_email']}>E-mail</span>{' '}
								<span>email@code-wizards.team</span>
							</p>
							<span className={styles['link__item']}>
								<ArrowIcon />
							</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a
							className={styles['link']}
							href="tel:+7(950)424-13-38"
							aria-label="Call"
						>
							<p className={styles['link__item_tel']}>
								<span>Телефон</span>
								<span>+7 (950) 424-13-38</span>
							</p>
							<span className={styles['link__item']}>
								<ArrowIcon />
							</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a
							className={styles['link']}
							target="_blank"
							href={socialUrl.viber}
							aria-label="Viber link"
						>
							<span className={styles['link__item']}>
								<ViberIcon size={[26, 26]} />
							</span>
							<span className={styles['link__item_no-margin']}>Viber</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a
							className={styles['link']}
							target="_blank"
							href={socialUrl.telegram}
							aria-label="Telegram link"
						>
							<span className={styles['link__item']}>
								<TelegramIcon size={[26, 25]} />
							</span>
							<span className={styles['link__item_no-margin']}>Telegram</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a
							className={styles['link']}
							target="_blank"
							href={socialUrl.watsup}
							aria-label="Whatsapp link"
						>
							<span className={styles['link__item']}>
								<WhatsappIcon size={[25, 24]} />
							</span>
							<span className={styles['link__item_no-margin']}>Whatsapp</span>
						</a>
					</li>
				</ul>
				<ContactsForm />
			</div>
		</section>
	);
}
