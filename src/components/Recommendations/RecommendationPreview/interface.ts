import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IRecommendationPreview {
	id: number;
	width: string;
	height: string;
	title: string;
	info: string;
	image: StaticImport;
	className: string;
	isActive?: boolean;
}
