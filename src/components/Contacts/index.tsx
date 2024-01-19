'use client';

import { FormEvent } from 'react';

import ArrowIcon from '@/images/icons/ArrowIcon';
import TelegramBgIcon from '@/images/icons/TelegramBgIcon';
import ViberIcon from '@/images/icons/ViberIcon';
import WhatsappIcon from '@/images/icons/WhatsappIcon';

import ContactsForm from './ContactsForm';
import styles from './style.module.scss';

//TODO добавить корректные ссылки для мессенджеров

export default function Contacts() {
	const sendingDataForFeedback = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className={styles['contacts']}>
			<h1 className={styles['contacts__title']}>Контакты</h1>
			<div className={styles['contacts__body']}>
				<ul className={styles['link-group']}>
					<li className={styles['link-box']}>
						<a className={styles['link']} href="mailto:email@code-wizards.team">
							<p className={styles['link__item_word-space']}>
								e-mail email@code-wizards.team
							</p>
							<span className={styles['link__item']}>
								<ArrowIcon />
							</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link']} href="tel:+7(950)424-13-38">
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
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<ViberIcon />
							</span>
							<span className={styles['link__item_no-margin']}>viber</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<TelegramBgIcon />
							</span>
							<span className={styles['link__item_no-margin']}>telegram</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<WhatsappIcon />
							</span>
							<span className={styles['link__item_no-margin']}>whatsapp</span>
						</a>
					</li>
				</ul>
				<ContactsForm onSubmit={sendingDataForFeedback} />
			</div>
		</div>
	);
}
