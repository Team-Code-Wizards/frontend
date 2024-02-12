import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import IconClose from '&/images/modal/IconClose';
import { useInfoMsg } from '@/components/InfoMsgContext';
import ModalItem from '@/components/WebsiteCreationModal/ModalItem';
import { siteOrderSchema } from '@/constants/WebsiteCreationModal/siteOrderSchema';
import useSubmitter from '@/service/submitter';
import { yupResolver } from '@hookform/resolvers/yup';

import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

interface IModal {
	open: boolean;
	close: () => void;
}

export default function WebsiteCreationModal({ open, close }: IModal) {
	const submitter = useSubmitter();
	const { showFailedInfoMsg } = useInfoMsg();
	const { register, formState, handleSubmit, control, reset } = useForm({
		mode: 'onChange',
		resolver: yupResolver(siteOrderSchema),
	});

	const { isValid, errors } = formState;
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await submitter(data)
			.then(() => {
				close();
				reset();
			})
			.catch(() => showFailedInfoMsg());
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
						<ModalItem register={register} control={control} errors={errors} />
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
