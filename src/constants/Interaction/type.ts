import { ReactNode } from 'react';

export interface IInteractionStep {
	id: string;
	number: number;
	title: string;
	description: string;
	image: ReactNode;
	imageClassName: string;
	alt: string;
	modifier: string;
	changeLaptop?: boolean;
	changeMobile?: boolean;
}
