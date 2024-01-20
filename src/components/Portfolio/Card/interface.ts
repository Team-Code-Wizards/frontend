import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IPortfolioCard {
	id: number;
	title: string;
	tag: string;
	image: string | StaticImport;
}
