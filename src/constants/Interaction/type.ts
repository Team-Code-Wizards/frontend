import { StaticImageData } from 'next/image';

export interface IInteractionStep {
	number: number;
	title: string;
	description: string;
	image: StaticImageData;
	alt: string;
}
