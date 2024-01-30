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
		title: 'Качества',
		description:
			'Мы гарантируем постоянное высокое качество разработки ваших веб-проектов. Наша гарантия качества действует всегда, даря вам уверенность в стабильной работе и надежности вашего веб-сайта.',
		pathIcon: quality,
	},
	{
		title: 'Сроков',
		description:
			'Наш принцип — выполнять работы строго в соответствии с условиями договора, обеспечивая тем самым не только высокое качество результата, но и уверенность в соблюдении согласованных сроков.',
		pathIcon: deadline,
	},
	{
		title: 'Безопасности',
		description:
			'Мы обеспечиваем непрерывную безопасность вашего веб-сайта, включая регулярные обновления и мониторинг защиты от вирусов и взломов.',
		pathIcon: security,
	},
	{
		title: 'Поддержки',
		description:
			'После завершения проекта мы предоставляем месячную бесплатную техническую поддержку. Мы готовы оперативно отвечать на ваши запросы.',
		pathIcon: support,
	},
	{
		title: 'Договора',
		description:
			'Все условия, представленные в договоре, будут четко сформулированы, чтобы исключить возможные недопонимания. мы готовы предоставить подробные пояснения по каждому пункту соглашения.',
		pathIcon: contract,
	},
	{
		title: 'Согласованных изменений',
		description:
			'Любые изменения, внесенные в проект, будут предварительно согласованы с вами, и мы не взимаем дополнительные затраты без вашего согласия.',
		pathIcon: coherent,
	},
	{
		title: 'Уникальности',
		description:
			'Весь контент и дизайн, созданный нашей командой, уникален и разработан в соответствии с вашим брендом. Мы гарантируем, что наша работа не нарушает авторских прав.',
		pathIcon: unique,
	},
];
