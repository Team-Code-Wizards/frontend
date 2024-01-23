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
		id: 555,
		title: 'Front-end магия',
		cards: [
			{
				id: 5551,
				icons: [<JSIcon key={5555} />, <TSIcon key={5556} />],
				title: 'JavaScript & TypeScript',
				description:
					'Наша команда владеет языками программирования, которые обеспечивают интерактивность и динамичность вашего сайта.',
			},
			{
				id: 5552,
				icons: [<ReactIcon key={5557} />, <NextIcon key={5558} />],
				title: 'React.js & Next.js',
				description:
					'Применяем передовые библиотеки и фреймворкидля создания уникального и мгновенно отзывчивого пользовательского интерфейса.',
			},
			{
				id: 5553,
				icons: [<ReduxIcon key={5559} />],
				title: 'Redux & Redux-Toolkit',
				description:
					'Мы не просто управляем состоянием приложения, мы создаем надежные и легко поддерживаемые пользовательские интерфейсы с использованием мощных инструментов для управления состоянием.',
			},
			{
				id: 5554,
				icons: [<SassIcon key={5560} />, <CssIcon key={5561} />],
				title: 'SASS & SCSS',
				description:
					'Создание стилей с элегантностью и легкостью, чтобы ваш сайт выглядел современно и привлекательно.',
			},
		],
	},
	{
		id: 666,
		title: 'Back-end волшебство',
		cards: [
			{
				id: 6661,
				icons: [<DjangoIcon key={6665} />],
				title: 'Django & DRF',
				description:
					'Наша команда экспертов в области веб-разработки использует Django и Django Rest Framework для создания мощных и масштабируемых серверных решений.',
			},
			{
				id: 6662,
				icons: [<GlobeIcon key={6666} />],
				title: 'Веб-безопасность',
				description:
					'Мы гарантируем безопасность вашего сайта, используя передовые методы шифрования и защиты от атак.',
			},
			{
				id: 6663,
				icons: [<LockOpenIcon key={6667} />],
				title: 'SSL/TLS протоколы',
				description:
					'Обеспечивают шифрование данных между веб-сервером и клиентским браузером, что защищает передаваемую информацию от несанкционированного доступа.',
			},
			{
				id: 6664,
				icons: [<FirewallIcon key={6668} />],
				title: 'Firewalls (брандмауэры)',
				description:
					'Фильтруют сетевой трафик и блокируют нежелательные запросы, защищая веб-приложения от различных атак.',
			},
		],
	},
];
