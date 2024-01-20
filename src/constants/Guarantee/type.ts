import { StaticImageData } from 'next/image';

export interface IGuaranteeItem {
	id: number;
	title: string;
	description: string;
	pathIcon: StaticImageData;
}
