import { data } from '@/constants/Interaction/index';
import { v4 as uuidv4 } from 'uuid';

import Step from './Step/index';
import styles from './styles.module.scss';

const Interaction = (): React.ReactElement => {
	return (
		<>
			<section className={styles['interaction']}>
				<div className={styles['interaction__description-wrapper']}>
					<h2 className={styles['interaction__title']}>
						Как мы превращаем взаимодействие с нами в настоящее удовольствие:
					</h2>
					<p className={styles['interaction__description']}>
						Мы считаем, что создание веб-сайтов - это не просто процесс
						разработки, а создание позитивного пользовательского опыта с самого
						начала до самого конца.
					</p>
				</div>

				<div className={styles['steps']}>
					{data.map((item) => {
						return <Step key={uuidv4()} item={item} />;
					})}
				</div>
			</section>
		</>
	);
};

export default Interaction;
