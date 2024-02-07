import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import IconClose from '&/images/modal/IconClose';
import { siteOrderSchema } from '@/constants/WebsiteCreationModal/siteOrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

interface IModal {
	open: boolean;
	close: () => void;
}

//TODO Раскомментить errors

export default function WebsiteCreationModal({ open, close }: IModal) {
	const {
		//register,
		reset,
		formState,
		handleSubmit,
		//control
	} = useForm({ mode: 'onChange', resolver: yupResolver(siteOrderSchema) });

	const {
		isValid,
		//errors
	} = formState;
	//console.log('Modal formState:', formState)
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
						{/*<ModalItem register={register} control={control} errors={errors} />*/}
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
