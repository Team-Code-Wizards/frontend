import { data } from '@/constants/Interaction/index';

import Step from './Step/index';
import styles from './styles.module.scss';

const Interaction = (): React.ReactElement => {
	return (
		<>
			<div className={styles.interaction}>
				<h2>
					Как мы превращаем взаимодействие с нами в настоящее удовольствие:
				</h2>
				<p>
					Мы считаем, что создание веб-сайтов - это не просто процесс
					разработки, а создание позитивного пользовательского опыта с самого
					начала до самого конца.
				</p>
				{data.map((item) => {
					return <Step key={item.id} item={item} />;
				})}
			</div>
		</>
	);
};

export default Interaction;
