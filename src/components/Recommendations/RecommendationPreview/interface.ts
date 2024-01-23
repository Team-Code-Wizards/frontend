import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IRecommendationPreview {
	title: string;
	info: string;
	image: StaticImport;
	className: string;
	isActive?: boolean;
}
