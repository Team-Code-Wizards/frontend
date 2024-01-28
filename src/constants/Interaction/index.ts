import attention from '../../../public/images/interaction/1-attention.png';
import communication from '../../../public/images/interaction/2-communication.png';
import design from '../../../public/images/interaction/3-design.png';
import approach from '../../../public/images/interaction/4-approach.png';
import testing from '../../../public/images/interaction/5-testing.png';
import support from '../../../public/images/interaction/6-support.png';
import { IInteractionStep } from './type';

export const data: IInteractionStep[] = [
	{
		number: 1,
		title: 'Внимание к Деталям и Понимание Потребностей:',
		description:
			'Как только вы связываетесь с нами, мы вкладываемся в то, чтобы внимательно выслушать ваши потребности и цели. Это помогает нам точно понять, что вам нужно, и начать проект с четким видением.',
		image: attention,
		alt: 'Список целей и задач',
		modifer: 'attention',
		change: true,
	},

	{
		number: 2,
		title: 'Прозрачность и Коммуникация:',
		description:
			'Мы ценим открытость и прозрачность в каждом этапе процесса. Наша команда предоставляет регулярные обновления, отвечает на ваши вопросы и дает вам полный контроль над ходом разработки.',
		image: communication,
		alt: 'Созвон клиента с командой',
		modifer: 'communication',
		change: true,
	},

	{
		number: 3,
		title: 'Дизайн с Фокусом на Пользователе:',
		description:
			'В процессе разработки мы ставим вас на первое место. Наш дизайн ориентирован на создание приятного и интуитивно понятного интерфейса, чтобы ваши посетители чувствовали себя комфортно и уверенно.',
		image: design,
		alt: 'Макет',
		modifer: 'design',
		change: true,
	},

	{
		number: 4,
		title: 'Гибкость и Индивидуальный Подход:',
		description:
			'Мы понимаем, что каждый проект уникален. Наши решения гибки, и мы готовы адаптироваться к вашим потребностям. Независимо от того, создаем ли мы сайт для стартапа или обновляем корпоративный ресурс, мы подходим к этому с индивидуальным вниманием.',
		image: approach,
		alt: 'Схема',
		modifer: 'approach',
	},

	{
		number: 5,
		title: 'Тестирование и Обратная Связь:',
		description:
			'Качество - наш приоритет. Перед запуском проекта мы тщательно тестируем все аспекты, чтобы удостовериться, что ваш веб-сайт работает безупречно. Мы также активно приветствуем вашу обратную связь и вносим коррективы, если это необходимо.',
		image: testing,
		alt: 'Иллюстрация тестирования',
		modifer: 'testing',
	},

	{
		number: 6,
		title: 'Поддержка и Развитие:',
		description:
			'Наше внимание не заканчивается после запуска. Мы предоставляем поддержку и готовы помогать вам в долгосрочной перспективе. Если у вас возникают вопросы или вам нужна дополнительная функциональность, мы всегда здесь, чтобы помочь.',
		image: support,
		alt: 'Чат с клиентом',
		modifer: 'support',
		change: true,
	},
];
