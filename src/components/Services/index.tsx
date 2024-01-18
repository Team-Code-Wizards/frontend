import { services } from '@/constants';

import styles from './style.module.scss';

export default function Services() {
	return (
		<div className={styles['services']}>
			<h2 className={styles['services__title']}>Услуги</h2>
			<div className={styles['services__cards']}>
				{services.map((service) => (
					<div key={service.title} className={styles['service-card']}>
						<div className={styles['service-card__content']}>
							<h4>{service.title}</h4>
							{service.content.map((text, ind) => (
								<p key={ind}>{text}</p>
							))}
							<span className={styles['service-card__prices']}>
								<p className={styles['service-card__prices_pre']}>от</p>
								<p className={styles['service-card__prices_new']}>
									{service.newPrice}$
								</p>
								<p className={styles['service-card__prices_old']}>
									{service.oldPrice}$
								</p>
							</span>
						</div>
						<span className={styles['service-card__btns']}>
							<button className={styles['service-card__btns_order']}>
								Заказать
							</button>
							<span className={styles['service-card__btns_ask']}>?</span>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
