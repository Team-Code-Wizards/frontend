import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IPortfolioCard {
	id: string;
	title: string;
	tag: string;
	image: string | StaticImport;
	link: string;
	imageNumber: number;
}
