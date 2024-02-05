import { StaticImageData } from 'next/image';

export interface IGuaranteeItem {
	id: string;
	title: string;
	description: string;
	pathIcon: StaticImageData;
}
