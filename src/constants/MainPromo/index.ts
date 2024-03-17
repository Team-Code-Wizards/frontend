//import keySitePageImage from '&/images/advertisingPromo/keySite.webp';
import landingPageImage from '&/images/advertisingPromo/landingPage.webp';
import keySitePageImage from '&/images/advertisingPromo/laptop-image-without-bg.png';
import pricePageImage from '&/images/advertisingPromo/price.webp';
import storePageImage from '&/images/advertisingPromo/store.webp';

import promoStateType from './type';

export const promoState: promoStateType = {
	'landing page': {
		h1: 'Landing Page за 30 дней недорого!',
		promoImage: landingPageImage,
	},
	'full construction': {
		h1: 'Стоимость разработки сайта от 30 000 ₽',
		promoImage: keySitePageImage,
	},
	'online store': {
		h1: 'Интернет-магазин по доступной цене!',
		promoImage: storePageImage,
	},
	price: {
		h1: 'Стоимость разработки сайта от 30 000 ₽',
		promoImage: pricePageImage,
	},
};
