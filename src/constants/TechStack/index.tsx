import CssIcon from '../../../public/images/icons/CssIcon';
import DjangoIcon from '../../../public/images/icons/DjangoIcon';
import FirewallIcon from '../../../public/images/icons/FirewallIcon';
import GlobeIcon from '../../../public/images/icons/GlobeIcon';
import JSIcon from '../../../public/images/icons/JSIcon';
import LockOpenIcon from '../../../public/images/icons/LockOpenIcon';
import NextIcon from '../../../public/images/icons/NextIcon';
import ReactIcon from '../../../public/images/icons/ReactIcon';
import ReduxIcon from '../../../public/images/icons/ReduxIcon';
import SassIcon from '../../../public/images/icons/SassIcon';
import TSIcon from '../../../public/images/icons/TSIcon';

export const cardLines = [
	{
		id: 'dd08ad97-45a6-401e-a267-6b8895724ba7',
		title: 'Front-end магия',
		cards: [
			{
				id: 'b58d781d-09b2-4802-bcf6-e16293833141',
				icons: [
					<JSIcon key="2645A557-8151-4686-85EF-557216335A83" />,
					<TSIcon key="8BD5D552-B15F-4A31-88D1-3B2382CDB384" />,
				],
				title: 'JavaScript & TypeScript',
				description:
					'Наша команда владеет языками программирования, которые обеспечивают интерактивность и динамичность вашего сайта.',
			},
			{
				id: '1f77c382-178b-46c8-9271-12f7db02bc14',
				icons: [
					<ReactIcon key="7AC3F1E9-501A-48CD-800F-D8786C4F9048" />,
					<NextIcon key="61CAF03B-888F-4C66-AB30-9F8E537B4CF2" />,
				],
				title: 'React.js & Next.js',
				description:
					'Применяем передовые библиотеки и фреймворки для создания уникального и мгновенно отзывчивого пользовательского интерфейса.',
			},
			{
				id: 'd8336a74-c9e5-4afa-9499-c11ea5eb15ee',
				icons: [<ReduxIcon key="F2DE10AA-DF24-4FD3-BA2E-93F84B9B06D1" />],
				title: 'Redux & Redux-Toolkit',
				description:
					'Мы не просто управляем состоянием приложения, мы создаем надежные и легко поддерживаемые пользовательские интерфейсы с использованием мощных инструментов для управления состоянием.',
			},
			{
				id: '40cfedca-19aa-4436-aee9-23481547d452',
				icons: [
					<SassIcon key="375FB28F-AADA-4C6A-A162-A5F2641D3F35" />,
					<CssIcon key="8C4077EB-1153-484F-AA2C-D61C9F230FDB" />,
				],
				title: 'SASS & SCSS',
				description:
					'Создание стилей с элегантностью и легкостью, чтобы ваш сайт выглядел современно и привлекательно.',
			},
		],
	},
	{
		id: '51e23d23-b26a-486e-878c-79b579179813',
		title: 'Back-end волшебство',
		cards: [
			{
				id: '79caf5f8-93ea-4d38-beb4-8c6ca6873606',
				icons: [<DjangoIcon key="0E8F02DF-9DFE-4B59-9053-168646665B0A" />],
				title: 'Django & DRF',
				description:
					'Наша команда экспертов в области веб-разработки использует Django и Django Rest Framework для создания мощных и масштабируемых серверных решений.',
			},
			{
				id: 'a8dfd202-56df-4e82-aa35-4d1acb510e59',
				icons: [<GlobeIcon key="6BB41CE0-BCFC-497D-8956-D8AA02D41EAD" />],
				title: 'Веб-безопасность',
				description:
					'Мы гарантируем безопасность вашего сайта, используя передовые методы шифрования и защиты от атак.',
			},
			{
				id: 'bf7888df-6f01-4eb4-b349-2bc2edf2b240',
				icons: [<LockOpenIcon key="9CEF3569-F37C-4641-A733-6DDA5A0FC696" />],
				title: 'SSL/TLS протоколы',
				description: `Обеспечивают шифрование данных между веб-сервером и клиентским браузером, что защищает передаваемую информацию от неправомерного доступа.`,
			},
			{
				id: 'c7c81e22-0072-41db-909b-0d96b0adb30e',
				icons: [<FirewallIcon key="5D6C85E5-0621-46BF-AD36-7E73E31E9FB9" />],
				title: 'Firewalls (брандмауэры)',
				description:
					'Фильтруют сетевой трафик и блокируют нежелательные запросы, защищая веб-приложения от различных атак.',
			},
		],
	},
];
