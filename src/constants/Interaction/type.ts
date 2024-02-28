export interface IInteractionStep {
	id: string;
	number: number;
	title: string;
	description: string;
	image: React.ReactNode;
	alt: string;
	modifier: string;
	changeLaptop?: boolean;
	changeMobile?: boolean;
}
