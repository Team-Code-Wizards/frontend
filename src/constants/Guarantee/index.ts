import coherent from '../../../public/images/guarantee/coherent.png';
import contract from '../../../public/images/guarantee/contract.png';
import deadline from '../../../public/images/guarantee/deadline.png';
import quality from '../../../public/images/guarantee/quality.png';
import security from '../../../public/images/guarantee/security.png';
import support from '../../../public/images/guarantee/support.png';
import unique from '../../../public/images/guarantee/unique.png';
import { IGuaranteeItem } from './type';

export const dataCard: IGuaranteeItem[] = [
	{
		id: '924efcb6-47ab-4faa-905a-2e1a65691cfa',
		title: 'Качества',
		description:
			'Мы гарантируем постоянное высокое качество разработки ваших веб-проектов. Наша гарантия качества действует всегда, даря вам уверенность в стабильной работе и надежности вашего веб-сайта.',
		pathIcon: quality,
	},
	{
		id: 'ff33d2c8-b93b-44e9-be9e-099652d41a0d',
		title: 'Сроков',
		description:
			'Наш принцип — выполнять работы строго в соответствии с условиями договора, обеспечивая тем самым не только высокое качество результата, но и уверенность в соблюдении согласованных сроков.',
		pathIcon: deadline,
	},
	{
		id: '2479930a-858f-4818-bf1a-283ce2d18325',
		title: 'Безопасности',
		description:
			'Мы обеспечиваем непрерывную безопасность вашего веб-сайта, включая регулярные обновления и мониторинг защиты от вирусов и взломов.',
		pathIcon: security,
	},
	{
		id: 'bb1f7325-739e-46e1-9821-5b97f9006c97',
		title: 'Поддержки',
		description:
			'После завершения проекта мы предоставляем месячную бесплатную техническую поддержку. Мы готовы оперативно отвечать на ваши запросы.',
		pathIcon: support,
	},
	{
		id: '09a879c7-7eed-49da-8663-60d7bde197aa',
		title: 'Договора',
		description:
			'Все условия, представленные в договоре, будут четко сформулированы, чтобы исключить возможные недопонимания. мы готовы предоставить подробные пояснения по каждому пункту соглашения.',
		pathIcon: contract,
	},
	{
		id: 'e5dbf748-811a-4fab-8f6b-d7e55195c318',
		title: 'Согласованных изменений',
		description:
			'Любые изменения, внесенные в проект, будут предварительно согласованы с вами, и мы не взимаем дополнительные затраты без вашего согласия.',
		pathIcon: coherent,
	},
	{
		id: 'c171fa46-07e9-4f8b-9de2-42b1e16f86aa',
		title: 'Уникальности',
		description:
			'Весь контент и дизайн, созданный нашей командой, уникален и разработан в соответствии с вашим брендом. Мы гарантируем, что наша работа не нарушает авторских прав.',
		pathIcon: unique,
	},
];
