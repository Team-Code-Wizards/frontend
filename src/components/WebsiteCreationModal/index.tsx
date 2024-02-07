import { SubmitHandler, useForm } from 'react-hook-form';

import IconClose from '&/images/modal/IconClose';
import { data } from '@/constants/WebsiteCreationModal';

import ModalBackground from '../ModalBackground';
import ModalItem from './ModalItem';
import styles from './style.module.scss';
import {IModalItem} from '@/constants/WebsiteCreationModal/type';

interface IModal {
	open: boolean;
	close: () => void;
}

export default function WebsiteCreationModal({ open, close }: IModal) {
	const { register,
		reset,
		formState,
		handleSubmit,
		control } = useForm<IModalItem>();

	const { isValid, errors } = formState;
	console.log('Modal formState:', formState)
	const onSubmit: SubmitHandler<IModalItem> = (data) => {
		console.log('data: ', data);
		close();
		reset();
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
							return (
								<ModalItem
									key={item.id}
									{...{item} }
									register={register}
									control={control}
									errors={errors}
								/>
							);
						})}
						<button
							type="submit"
							className={styles['modal__btn']}
							disabled={!isValid}
						>
							Отправить
						</button>
					</form>
				</div>
			</ModalBackground>
		)
	);
}
