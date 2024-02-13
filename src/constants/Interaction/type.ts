import { StaticImageData } from 'next/image';

export interface IInteractionStep {
	id: string;
	number: number;
	title: string;
	description: string;
	image: StaticImageData;
	alt: string;
	modifier: string;
	changeLaptop?: boolean;
	changeMobile?: boolean;
}
