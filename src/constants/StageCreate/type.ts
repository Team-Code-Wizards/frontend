import { StaticImageData } from 'next/image';

export interface IStagesItem {
	id: string;
	title: string;
	description?: string;
	icon: StaticImageData;
	alt: string;
	next: string;
}
