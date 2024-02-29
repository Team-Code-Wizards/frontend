export interface IInteractionStep {
	id: string;
	number: number;
	title: string;
	description: string;
	image: (inView: boolean) => React.JSX.Element;
	alt: string;
	modifier: string;
	changeLaptop?: boolean;
	changeMobile?: boolean;
}
