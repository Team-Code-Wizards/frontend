import { StaticImageData } from 'next/image';

export default interface IPromoState {
	[key: string]: {
		h1: string;
		promoImage: StaticImageData;
	};
}
