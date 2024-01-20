import coherent from '../../images/guarantee/coherent.svg';
import contract from '../../images/guarantee/contract.svg';
import deadline from '../../images/guarantee/deadline.svg';
import quality from '../../images/guarantee/quality.svg';
import security from '../../images/guarantee/security.svg';
import support from '../../images/guarantee/support.svg';
import unique from '../../images/guarantee/unique.svg';
import { IGuaranteeItem } from './type';

export const dataCard: IGuaranteeItem[] = [
	{
		id: 1,
		title: 'Качества',
		description:
			'Мы гарантируем постоянное высокое качество разработки ваших веб-проектов. Наша гарантия качества действует всегда, даря вам уверенность в стабильной работе и надежности вашего веб-сайта.',
		pathIcon: quality,
	},
	{
		id: 2,
		title: 'Сроков',
		description:
			'Наш принцип — выполнять работы строго в соответствии с условиями договора, обеспечивая тем самым не только высокое качество результата, но и уверенность в соблюдении согласованных сроков.',
		pathIcon: deadline,
	},
	{
		id: 3,
		title: 'Безопасности',
		description:
			'Мы обеспечиваем непрерывную безопасность вашего веб-сайта, включая регулярные обновления и мониторинг защиты от вирусов и взломов.',
		pathIcon: security,
	},
	{
		id: 4,
		title: 'Поддержки',
		description:
			'После завершения проекта мы предоставляем месячную бесплатную техническую поддержку. Мы готовы оперативно отвечать на ваши запросы.',
		pathIcon: support,
	},
	{
		id: 5,
		title: 'Договора',
		description:
			'Все условия, представленные в договоре, будут четко сформулированы, чтобы исключить возможные недопонимания. мы готовы предоставить подробные пояснения по каждому пункту соглашения.',
		pathIcon: contract,
	},
	{
		id: 6,
		title: 'Согласованных изменений',
		description:
			'Любые изменения, внесенные в проект, будут предварительно согласованы с вами, и мы не взимаем дополнительные затраты без вашего согласия.',
		pathIcon: coherent,
	},
	{
		id: 7,
		title: 'Уникальности',
		description:
			'Весь контент и дизайн, созданный нашей командой, уникален и разработан в соответствии с вашим брендом. Мы гарантируем, что наша работа не нарушает авторских прав.',
		pathIcon: unique,
	},
];
