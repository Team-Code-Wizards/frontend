import keySitePageImage from '&/images/advertisingPromo/keySite.png';
import landingPageImage from '&/images/advertisingPromo/landingPage.png';
import pricePageImage from '&/images/advertisingPromo/price.png';
import storePageImage from '&/images/advertisingPromo/store.png';

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
