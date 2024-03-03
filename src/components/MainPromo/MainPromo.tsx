'use client';

import { Suspense } from 'react';

import { useSearchParams } from 'next/navigation';

import { promoState } from '@/constants/MainPromo/index';

import AdvertisingPromo from '../AdvertisingPromo';
import Promo from '../Promo';

// Компонент-обертка, который будет использовать useSearchParams()
const PromoWrapper = () => {
	const urlParams = useSearchParams();
	// получаем значение utm_term
	const utmCampaign: string = urlParams.get('utm_campaign') || 'default';

	return promoState[utmCampaign] ? (
		<Suspense>
			<AdvertisingPromo promoConfig={promoState[utmCampaign]} />
		</Suspense>
	) : (
		<Promo />
	);
};

export default function MainPromo() {
	return <PromoWrapper />;
}
