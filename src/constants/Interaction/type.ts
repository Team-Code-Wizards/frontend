import { StaticImageData } from 'next/image';

export interface IInteractionStep {
	id: number;
	title: string;
	description: string;
	image: StaticImageData;
}
