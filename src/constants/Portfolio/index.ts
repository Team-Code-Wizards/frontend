import IPortfolioCard from '@/components/Portfolio/Card/interface';
import image41 from '@/images/portfolio/image-41.png';
import image42 from '@/images/portfolio/image-42.png';
import image43 from '@/images/portfolio/image-43.png';
import image44 from '@/images/portfolio/image-44.png';
import image45 from '@/images/portfolio/image-45.png';

export const portfolioCards: IPortfolioCard[] = [
	{ id: 1, tag: 'Интернет-магазин', title: 'Любимый василек', image: image41 },
	{ id: 2, tag: 'Лендинг', title: 'Смарт ремонт', image: image42 },
	{ id: 3, tag: 'Корпоративный сайт', title: 'Рент-зона', image: image43 },
	{
		id: 4,
		tag: 'Интернет-магазин',
		title: 'Мебель-Екатеринбург',
		image: image44,
	},
	{ id: 5, tag: 'Корпоративный сайт', title: 'Чистый город', image: image45 },
];
