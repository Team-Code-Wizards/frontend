import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import IconClose from '&/images/modal/IconClose';
import { data } from '@/constants/WebsiteCreationModal';

import ModalBackground from '../ModalBackground';
import ModalItem from './ModalItem';
import styles from './style.module.scss';

interface IModal {
	open: boolean;
	close: () => void;
}

export default function WebsiteCreationModal({ open, close }: IModal) {
	const { handleSubmit, control } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		close();
	};

	return (
		open && (
			<ModalBackground>
				<div className={styles['modal']}>
					<button
						type="button"
						className={styles['modal__close-btn']}
						onClick={close}
					>
						<IconClose />
					</button>
					<h3 className={styles['modal__title']}>Заявка на создание сайта</h3>
					<form
						className={styles['modal__form']}
						onSubmit={handleSubmit(onSubmit)}
					>
						{data.map((item) => {
							return <ModalItem key={item.id} item={item} control={control} />;
						})}
						<button type="submit" className={styles['modal__btn']}>
							Отправить
						</button>
					</form>
				</div>
			</ModalBackground>
		)
	);
}
