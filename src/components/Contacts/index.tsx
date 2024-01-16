'use client';

import { FormEvent } from 'react';

import ArrowIcon from '@/images/icons/ArrowIcon';
import TelegramBgIcon from '@/images/icons/TelegramBgIcon';
import ViberIcon from '@/images/icons/ViberIcon';
import WhatsappIcon from '@/images/icons/WhatsappIcon';

import styles from './style.module.scss';

//TODO добавить корректные ссылки для мессенджеров

//TODO вынести форму в отдельный клиентский компонент

//TODO добавить кнопку очистки инпутов когда они активны

export default function Contacts() {
	const sendingDataForFeedback = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<section className={styles['contacts']}>
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
						<a className={styles['link_messenger']} href="http://">
							<span className={styles['link__item']}>
								<ViberIcon />
							</span>
							<span className={styles['link__item_no-margin']}>viber</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="http://">
							<span className={styles['link__item']}>
								<TelegramBgIcon />
							</span>
							<span className={styles['link__item_no-margin']}>telegram</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="http://">
							<span className={styles['link__item']}>
								<WhatsappIcon />
							</span>
							<span className={styles['link__item_no-margin']}>whatsapp</span>
						</a>
					</li>
				</ul>
				<div className={styles['form-box']}>
					<form className={styles['form']} onSubmit={sendingDataForFeedback}>
						<input
							className={styles['form__input']}
							type="text"
							name="clientName"
							placeholder="Имя"
						/>
						<input
							className={styles['form__input']}
							type="tel"
							name="clientTel"
							placeholder="Телефон"
						/>
						<input
							className={styles['form__input']}
							type="email"
							name="clientEmail"
							placeholder="E-mail"
						/>
						<textarea
							className={styles['form__input']}
							name="clientMessage"
							placeholder="Сообщение"
						/>
						<input
							className={styles['form__input']}
							type="file"
							id="file"
							name="clientFile"
							accept=".doc"
						/>
						<label className={styles['label']} htmlFor="file">
							Прикрепить ТЗ
						</label>
						<span className={styles['form__notice']}>
							*В формате Документ Word
						</span>
						<button className={styles['form__button']} type="submit">
							Отправить
						</button>
						<span className={styles['form__notice']}>
							Нажимая кнопку «отправить», вы соглашаетесь с политикой обработки
							персональных данных.
						</span>
					</form>
				</div>
			</div>
		</section>
	);
}
