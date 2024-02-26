import { StaticImageData } from 'next/image';

export interface IStagesItem {
	id: string;
	title: string;
	description?: string;
	icon: StaticImageData;
	iconHover: StaticImageData;
	alt: string;
	next: string;
	prev: string;
}
