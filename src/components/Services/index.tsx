import services from '@/constants/Services';

import ArrowDownIcon from '../../../public/images/icons/ArrowDownIcon';
import styles from './style.module.scss';

export default function Services() {
	return (
		<section id="services" className={styles.wrapper}>
			<div className={styles['services']}>
				<h2 className={styles['services__title']}>Услуги</h2>
				<div className={styles['services__cards']}>
					{services.map((service) => (
						<div key={service.id} className={styles['service-card']}>
							<div className={styles['service-card__content']}>
								<div className={styles['service-card__right']}>
									<h4>{service.title}</h4>
									{service.content.map((text) => (
										<p key={text}>{text}</p>
									))}
									<div className={styles['service-card__prices']}>
										<p>
											<span className={styles['service-card__prices_pre']}>
												от
											</span>
											<span className={styles['service-card__prices_new']}>
												{service.newPrice}$
											</span>
										</p>
										<span className={styles['service-card__prices_old']}>
											{service.oldPrice}$
										</span>
									</div>
								</div>
								<div className={styles['service-card__popup']}>
									<a className={styles['service-card__popup_img']}>
										<ArrowDownIcon />
									</a>
								</div>
							</div>
							<span className={styles['service-card__btns']}>
								<button
									className={styles['service-card__btns_order']}
									type="submit"
								>
									Заказать
								</button>
								<button
									className={styles['service-card__btns_ask']}
									type="button"
								>
									?
								</button>
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
