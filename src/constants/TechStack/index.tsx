import CssIcon from '@/images/icons/CssIcon';
import DjangoIcon from '@/images/icons/DjangoIcon';
import FirewallIcon from '@/images/icons/FirewallIcon';
import GlobeIcon from '@/images/icons/GlobeIcon';
import JSIcon from '@/images/icons/JSIcon';
import LockOpenIcon from '@/images/icons/LockOpenIcon';
import NextIcon from '@/images/icons/NextIcon';
import ReactIcon from '@/images/icons/ReactIcon';
import ReduxIcon from '@/images/icons/ReduxIcon';
import SassIcon from '@/images/icons/SassIcon';
import TSIcon from '@/images/icons/TSIcon';
import { v4 as uuidv4 } from 'uuid';

export const cardLines = [
	{
		id: uuidv4(),
		title: 'Front-end магия',
		cards: [
			{
				id: uuidv4(),
				icons: [<JSIcon key={uuidv4()} />, <TSIcon key={uuidv4()} />],
				title: 'JavaScript & TypeScript',
				description:
					'Наша команда владеет языками программирования, которые обеспечивают интерактивность и динамичность вашего сайта.',
			},
			{
				id: uuidv4(),
				icons: [<ReactIcon key={uuidv4()} />, <NextIcon key={uuidv4()} />],
				title: 'React.js & Next.js',
				description:
					'Применяем передовые библиотеки и фреймворкидля создания уникального и мгновенно отзывчивого пользовательского интерфейса.',
			},
			{
				id: uuidv4(),
				icons: [<ReduxIcon key={uuidv4()} />],
				title: 'Redux & Redux-Toolkit',
				description:
					'Мы не просто управляем состоянием приложения, мы создаем надежные и легко поддерживаемые пользовательские интерфейсы с использованием мощных инструментов для управления состоянием.',
			},
			{
				id: uuidv4(),
				icons: [<SassIcon key={5560} />, <CssIcon key={5561} />],
				title: 'SASS & SCSS',
				description:
					'Создание стилей с элегантностью и легкостью, чтобы ваш сайт выглядел современно и привлекательно.',
			},
		],
	},
	{
		id: uuidv4(),
		title: 'Back-end волшебство',
		cards: [
			{
				id: uuidv4(),
				icons: [<DjangoIcon key={uuidv4()} />],
				title: 'Django & DRF',
				description:
					'Наша команда экспертов в области веб-разработки использует Django и Django Rest Framework для создания мощных и масштабируемых серверных решений.',
			},
			{
				id: uuidv4(),
				icons: [<GlobeIcon key={uuidv4()} />],
				title: 'Веб-безопасность',
				description:
					'Мы гарантируем безопасность вашего сайта, используя передовые методы шифрования и защиты от атак.',
			},
			{
				id: uuidv4(),
				icons: [<LockOpenIcon key={uuidv4()} />],
				title: 'SSL/TLS протоколы',
				description:
					'Обеспечивают шифрование данных между веб-сервером и клиентским браузером, что защищает передаваемую информацию от несанкционированного доступа.',
			},
			{
				id: uuidv4(),
				icons: [<FirewallIcon key={uuidv4()} />],
				title: 'Firewalls (брандмауэры)',
				description:
					'Фильтруют сетевой трафик и блокируют нежелательные запросы, защищая веб-приложения от различных атак.',
			},
		],
	},
];
