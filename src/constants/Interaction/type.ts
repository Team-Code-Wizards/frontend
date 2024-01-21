import { StaticImageData } from 'next/image';

export interface IInteractionStep {
	title: string;
	description: string;
	image: StaticImageData;
	alt: string;
}
