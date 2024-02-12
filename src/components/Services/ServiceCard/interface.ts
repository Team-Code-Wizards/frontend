import { StaticImageData } from 'next/image';

export type Service = {
	id: string;
	title: string;
	content: string[];
	newPrice: string;
	oldPrice: string;
	description: string;
	image: StaticImageData;
	newPriceRu: string;
	oldPriceRu: string;
};
