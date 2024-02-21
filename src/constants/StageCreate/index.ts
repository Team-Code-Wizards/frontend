import clockIcon from '&/images/stageCreate/clock-icon.webp';
import contentIcon from '&/images/stageCreate/content-icon.webp';
import deploymentIcon from '&/images/stageCreate/deployment-icon.webp';
import developmentIcon from '&/images/stageCreate/development-icon.webp';
import figmaIcon from '&/images/stageCreate/figma-icon.webp';
import hostingIcon from '&/images/stageCreate/hosting-icon.webp';
import htmlIcon from '&/images/stageCreate/html-icon.webp';
import optimizationIcon from '&/images/stageCreate/optimization-icon.webp';
import supportIcon from '&/images/stageCreate/support-icon.webp';
import testingIcon from '&/images/stageCreate/testing-icon.webp';

import { IStagesItem } from './type';

export const stages: IStagesItem[] = [
	{
		id: '07ceff85-1dd6-4259-a47a-ab43d811b710',
		title: 'Планирование',
		description:
			'Определение целей, целевой аудитории и основных требований к сайту, создание структуры сайта, и разработка технического задания.',
		icon: clockIcon,
		alt: 'Planning',
		next: '2764cf44-1388-4b3a-93aa-b07ff99439ee',
	},
	{
		id: '2764cf44-1388-4b3a-93aa-b07ff99439ee',
		title: 'Дизайн',
		description:
			'Создание дизайна первой страницы веб-сайта, утверждение концепции, и визуальное оформление всех страниц.',
		icon: figmaIcon,
		alt: 'Figma',
		next: 'eb449ef7-4aee-498d-905c-2c9ab550b388',
	},
	{
		id: 'eb449ef7-4aee-498d-905c-2c9ab550b388',
		title: 'Верстка',
		description:
			'Трансформация визуальных концепций дизайна сайта в технически рабочие веб-страницы.',
		icon: htmlIcon,
		alt: 'HTML',
		next: '5ba437e5-be8b-4a54-8671-ec4878f44f0b',
	},
	{
		id: '5ba437e5-be8b-4a54-8671-ec4878f44f0b',
		title: 'Разработка',
		description:
			'Написание логики, программирование функциональности и создание структуры.',
		icon: developmentIcon,
		alt: 'Development',
		next: '476bbc13-3c57-471c-a1df-0d8a2a5e9b2c',
	},
	{
		id: '476bbc13-3c57-471c-a1df-0d8a2a5e9b2c',
		title: 'Тестирование',
		description:
			'Проверка работы сайта на различных устройствах и в разных браузерах. Проверка работоспособности элементов и функций сайта, подготовка к запуску.',
		icon: testingIcon,
		alt: 'Testing',
		next: '9c524412-47da-4940-9f28-bdd4ecf433d8',
	},
	{
		id: '9c524412-47da-4940-9f28-bdd4ecf433d8',
		title: 'Наполнение контентом',
		description:
			'Добавление текстов, изображений и другого контента на страницы.',
		icon: contentIcon,
		alt: 'Content',
		next: '46a7b082-cc52-47d6-9d71-e904aedb6eaf',
	},
	{
		id: '46a7b082-cc52-47d6-9d71-e904aedb6eaf',
		title: 'Оптимизация',
		description:
			'Настройка для лучшей производительности и улучшения поисковой оптимизации (SEO).',
		icon: optimizationIcon,
		alt: 'Optimization',
		next: '364d3305-109d-4ce6-bacd-782678314ab9',
	},
	{
		id: '364d3305-109d-4ce6-bacd-782678314ab9',
		title: 'Развертывание',
		description: 'Размещение сайта на сервере и привязка к доменному имени.',
		icon: deploymentIcon,
		alt: 'Deployment',
		next: 'cf1e143e-aba1-4855-8001-3626e9d79e53',
	},
	{
		id: 'cf1e143e-aba1-4855-8001-3626e9d79e53',
		title: 'Запуск',
		description: 'Публикация и доступность сайта для посетителей.',
		icon: hostingIcon,
		alt: 'Hosting',
		next: '7eb97675-cb4e-4eec-9150-8821a2969be7',
	},
	{
		id: '7eb97675-cb4e-4eec-9150-8821a2969be7',
		title: 'Поддержка',
		description:
			'Регулярное обновление контента, внесение изменений и техническая поддержка.',
		icon: supportIcon,
		alt: 'Support',
		next: '07ceff85-1dd6-4259-a47a-ab43d811b710',
	},
];
