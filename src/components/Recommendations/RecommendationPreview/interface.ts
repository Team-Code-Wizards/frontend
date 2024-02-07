import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default interface IRecommendationPreview {
	id: string;
	title: string;
	info: string;
	image: StaticImport;
	isActive: boolean;
	icon: StaticImport;
	siteUrl: string;
}
