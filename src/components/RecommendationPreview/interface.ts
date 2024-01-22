import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IRecomendationPreview {
	id: number;
	title: string;
	info: string;
	image: StaticImport;
	width: number;
	height: number;
	isActive: boolean;
	styles: string;
}
