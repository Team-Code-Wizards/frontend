'use client';

import { useEffect, useState } from 'react';

import { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';

import keySitePageImage from '&/images/advertisingPromo/keySite.png';
import landingPageImage from '&/images/advertisingPromo/landingPage.png';
import pricePageImage from '&/images/advertisingPromo/price.png';
import storePageImage from '&/images/advertisingPromo/store.png';

import AdvertisingPromo from '../AdvertisingPromo';
import Promo from '../Promo';

export interface IPromoState {
	[key: string]: {
		h1: string;
		promoImage: StaticImageData;
	};
}

export default function MainPromo() {
	const urlParams = useSearchParams();
	// получаем значение utm_term
	const utmCampaign: string = urlParams.get('utm_campaign') || 'default';
	const [promoState] = useState<IPromoState>({
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
	});

	useEffect(() => {
		console.log(promoState[utmCampaign]);
	}, []);

	return promoState[utmCampaign] ? (
		<AdvertisingPromo promoConfig={promoState[utmCampaign]} />
	) : (
		<Promo />
	);
}
