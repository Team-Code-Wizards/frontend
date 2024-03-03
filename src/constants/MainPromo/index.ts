import keySitePageImage from '&/images/advertisingPromo/keySite.webp';
import landingPageImage from '&/images/advertisingPromo/landingPage.webp';
import pricePageImage from '&/images/advertisingPromo/price.webp';
import storePageImage from '&/images/advertisingPromo/store.webp';

import promoStateType from './type';

export const promoState: promoStateType = {
	'landing page': {
		h1: 'Landing Page за 30 дней недорого!',
		promoImage: landingPageImage,
	},
	'full construction': {
		h1: 'Сайт с нуля под ключ быстро и качественно!',
		promoImage: keySitePageImage,
	},
	'online store': {
		h1: 'Интернет-магазин по доступной цене!',
		promoImage: storePageImage,
	},
	price: {
		h1: 'Стоимость разработки сайта от 300$',
		promoImage: pricePageImage,
	},
};
