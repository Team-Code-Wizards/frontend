import clockIconHover from '&/images/stageCreate/clock-icon-hover.webp';
import clockIcon from '&/images/stageCreate/clock-icon.webp';
import contentIconHover from '&/images/stageCreate/content-icon-hover.webp';
import contentIcon from '&/images/stageCreate/content-icon.webp';
import deploymentIconHover from '&/images/stageCreate/deployment-icon-hover.webp';
import deploymentIcon from '&/images/stageCreate/deployment-icon.webp';
import developmentIconHover from '&/images/stageCreate/development-icon-hover.webp';
import developmentIcon from '&/images/stageCreate/development-icon.webp';
import figmaIconHover from '&/images/stageCreate/figma-icon-hover.webp';
import figmaIcon from '&/images/stageCreate/figma-icon.webp';
import hostingIconHover from '&/images/stageCreate/hosting-icon-hover.webp';
import hostingIcon from '&/images/stageCreate/hosting-icon.webp';
import htmlIconHover from '&/images/stageCreate/html-icon-hover.webp';
import htmlIcon from '&/images/stageCreate/html-icon.webp';
import optimizationIconHover from '&/images/stageCreate/optimization-icon-hover.webp';
import optimizationIcon from '&/images/stageCreate/optimization-icon.webp';
import supportIconHover from '&/images/stageCreate/support-icon-hover.webp';
import supportIcon from '&/images/stageCreate/support-icon.webp';
import testingIconHover from '&/images/stageCreate/testing-icon-hover.webp';
import testingIcon from '&/images/stageCreate/testing-icon.webp';

import { IStagesItem } from './type';

export const stages: IStagesItem[] = [
	{
		id: '07ceff85-1dd6-4259-a47a-ab43d811b710',
		title: 'Планирование',
		description:
			'Определение целей, целевой аудитории и основных требований к сайту, создание структуры сайта, и разработка технического задания.',
		icon: clockIcon,
		iconHover: clockIconHover,
		alt: 'Planning',
		next: '2764cf44-1388-4b3a-93aa-b07ff99439ee',
		prev: '7eb97675-cb4e-4eec-9150-8821a2969be7',
	},
	{
		id: '2764cf44-1388-4b3a-93aa-b07ff99439ee',
		title: 'Дизайн',
		description:
			'Создание дизайна первой страницы веб-сайта, утверждение концепции, и визуальное оформление всех страниц.',
		icon: figmaIcon,
		iconHover: figmaIconHover,
		alt: 'Figma',
		next: 'eb449ef7-4aee-498d-905c-2c9ab550b388',
		prev: '07ceff85-1dd6-4259-a47a-ab43d811b710',
	},
	{
		id: 'eb449ef7-4aee-498d-905c-2c9ab550b388',
		title: 'Вёрстка',
		description:
			'Трансформация визуальных концепций дизайна сайта в технически рабочие веб-страницы.',
		icon: htmlIcon,
		iconHover: htmlIconHover,
		alt: 'HTML',
		next: '5ba437e5-be8b-4a54-8671-ec4878f44f0b',
		prev: '2764cf44-1388-4b3a-93aa-b07ff99439ee',
	},
	{
		id: '5ba437e5-be8b-4a54-8671-ec4878f44f0b',
		title: 'Разработка',
		description:
			'Написание логики, программирование функциональности и создание структуры.',
		icon: developmentIcon,
		iconHover: developmentIconHover,
		alt: 'Development',
		next: '476bbc13-3c57-471c-a1df-0d8a2a5e9b2c',
		prev: 'eb449ef7-4aee-498d-905c-2c9ab550b388',
	},
	{
		id: '476bbc13-3c57-471c-a1df-0d8a2a5e9b2c',
		title: 'Тестирование',
		description:
			'Проверка работы сайта на различных устройствах и в разных браузерах. Проверка работоспособности элементов и функций сайта, подготовка к запуску.',
		icon: testingIcon,
		iconHover: testingIconHover,
		alt: 'Testing',
		next: '9c524412-47da-4940-9f28-bdd4ecf433d8',
		prev: '5ba437e5-be8b-4a54-8671-ec4878f44f0b',
	},
	{
		id: '9c524412-47da-4940-9f28-bdd4ecf433d8',
		title: 'Наполнение контентом',
		description:
			'Добавление текстов, изображений и другого контента на страницы.',
		icon: contentIcon,
		iconHover: contentIconHover,
		alt: 'Content',
		next: '46a7b082-cc52-47d6-9d71-e904aedb6eaf',
		prev: '476bbc13-3c57-471c-a1df-0d8a2a5e9b2c',
	},
	{
		id: '46a7b082-cc52-47d6-9d71-e904aedb6eaf',
		title: 'Оптимизация',
		description:
			'Настройка для лучшей производительности и улучшения поисковой оптимизации (SEO).',
		icon: optimizationIcon,
		iconHover: optimizationIconHover,
		alt: 'Optimization',
		next: '364d3305-109d-4ce6-bacd-782678314ab9',
		prev: '9c524412-47da-4940-9f28-bdd4ecf433d8',
	},
	{
		id: '364d3305-109d-4ce6-bacd-782678314ab9',
		title: 'Развёртывание',
		description: 'Размещение сайта на сервере и привязка к доменному имени.',
		icon: deploymentIcon,
		iconHover: deploymentIconHover,
		alt: 'Deployment',
		next: 'cf1e143e-aba1-4855-8001-3626e9d79e53',
		prev: '46a7b082-cc52-47d6-9d71-e904aedb6eaf',
	},
	{
		id: 'cf1e143e-aba1-4855-8001-3626e9d79e53',
		title: 'Запуск',
		description: 'Публикация и доступность сайта для посетителей.',
		icon: hostingIcon,
		iconHover: hostingIconHover,
		alt: 'Hosting',
		next: '7eb97675-cb4e-4eec-9150-8821a2969be7',
		prev: '364d3305-109d-4ce6-bacd-782678314ab9',
	},
	{
		id: '7eb97675-cb4e-4eec-9150-8821a2969be7',
		title: 'Поддержка',
		description:
			'Регулярное обновление контента, внесение изменений и техническая поддержка.',
		icon: supportIcon,
		iconHover: supportIconHover,
		alt: 'Support',
		next: '07ceff85-1dd6-4259-a47a-ab43d811b710',
		prev: 'cf1e143e-aba1-4855-8001-3626e9d79e53',
	},
];
