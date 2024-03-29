import StepFive from '@/components/Interaction/Step/Images/StepFive';
import StepFour from '@/components/Interaction/Step/Images/StepFour';
import StepOne from '@/components/Interaction/Step/Images/StepOne';
import StepSix from '@/components/Interaction/Step/Images/StepSix';
import StepThree from '@/components/Interaction/Step/Images/StepThree';
import StepTwo from '@/components/Interaction/Step/Images/StepTwo';

import { IInteractionStep } from './type';

export const data: IInteractionStep[] = [
	{
		id: 'd7a344f2-7043-4e91-96a8-623a55bf1b43',
		number: 1,
		title: 'Внимание к Деталям и Понимание Потребностей:',
		description:
			'Как только вы связываетесь с нами, мы вкладываемся в то, чтобы внимательно выслушать ваши потребности и цели. Это помогает нам точно понять, что вам нужно, и начать проект с чётким видением.',
		image: (inView, isActive) => {
			return StepOne(inView, isActive);
		},
		alt: 'Список целей и задач',
		modifier: 'attention',
		changeLaptop: true,
	},

	{
		id: '1ed569ae-dc94-44df-9aac-04f045ae04f7',
		number: 2,
		title: 'Прозрачность и Коммуникация:',
		description:
			'Мы ценим открытость и прозрачность в каждом этапе процесса. Наша команда предоставляет регулярные обновления, отвечает на ваши вопросы и даёт вам полный контроль над ходом разработки.',
		alt: 'Созвон клиента с командой',
		image: (inView, isActive) => {
			return StepTwo(inView, isActive);
		},
		modifier: 'communication',
		changeLaptop: true,
		changeMobile: true,
	},

	{
		id: '98d45fea-bcec-4245-b775-2f6cebc52755',
		number: 3,
		title: 'Дизайн с Фокусом на Пользователе:',
		description:
			'В процессе разработки мы ставим вас на первое место. Наш дизайн ориентирован на создание приятного и интуитивно понятного интерфейса, чтобы ваши посетители чувствовали себя комфортно и уверенно.',
		alt: 'Макет',
		image: (inView, isActive) => {
			return StepThree(inView, isActive);
		},
		modifier: 'design',
		changeLaptop: true,
		changeMobile: true,
	},

	{
		id: 'eb3a8e4b-8d45-4afd-83a4-830d9b395af4',
		number: 4,
		title: 'Гибкость и Индивидуальный Подход:',
		description:
			'Мы понимаем, что каждый проект уникален. Наши решения гибки, и мы готовы адаптироваться к вашим потребностям. Независимо от того, создаем ли мы сайт для стартапа или обновляем корпоративный ресурс, мы подходим к этому с индивидуальным вниманием.',
		alt: 'Схема',
		image: (inView, isActive) => {
			return StepFour(inView, isActive);
		},
		modifier: 'approach',
		changeMobile: true,
	},

	{
		id: '4242ecac-fc9c-42b2-bd2a-6d415785e557',
		number: 5,
		title: 'Тестирование и Обратная Связь:',
		description:
			'Качество - наш приоритет. Перед запуском проекта мы тщательно тестируем все аспекты, чтобы удостовериться, что ваш веб-сайт работает безупречно. Мы также активно приветствуем вашу обратную связь и вносим коррективы, если это необходимо.',
		image: (inView, isActive) => {
			return StepFive(inView, isActive);
		},
		alt: 'Иллюстрация тестирования',
		modifier: 'testing',
		changeMobile: true,
	},

	{
		id: 'e32c34a1-d481-4ded-9cb0-d6f77fb3250e',
		number: 6,
		title: 'Поддержка и Развитие:',
		description:
			'Наше внимание не заканчивается после запуска. Мы предоставляем поддержку и готовы помогать вам в долгосрочной перспективе. Если у вас возникают вопросы или вам нужна дополнительная функциональность, мы всегда здесь, чтобы помочь.',
		image: (inView, isActive) => {
			return StepSix(inView, isActive);
		},
		alt: 'Чат с клиентом',
		modifier: 'support',
		changeLaptop: true,
		changeMobile: true,
	},
];
