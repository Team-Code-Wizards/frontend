import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import IconClose from '&/images/modal/IconClose';
import { useInfoMsg } from '@/components/InfoMsgContext';
import ModalItem from '@/components/WebsiteCreationModal/ModalItem';
import { siteOrderSchema } from '@/constants/WebsiteCreationModal/siteOrderSchema';
import useCaptchaHandler from '@/service/captchaHandler';
import useSubmitter from '@/service/submitter';
import { yupResolver } from '@hookform/resolvers/yup';

import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

interface IModal {
	open: boolean;
	close: () => void;
}

export default function WebsiteCreationModal({ open, close }: IModal) {
	const [show, setShow] = useState(true);
	const submitter = useSubmitter();
	const { showFailedInfoMsg } = useInfoMsg();
	const captchaHandler = useCaptchaHandler();
	const { register, formState, handleSubmit, control, reset } = useForm({
		mode: 'onChange',
		resolver: yupResolver(siteOrderSchema),
	});

	const { isValid, errors } = formState;
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await (
			await captchaHandler
		)()
			.then((res) => {
				if (res > 0.5) {
					submitter(data);
				} else {
					throw new Error('you are possibly robot');
				}
			})
			.then(() => {
				setShow(false);

				setTimeout(() => {
					close();
					reset();

					setShow(true);
				}, 300);
			})
			.catch(() => {
				setShow(false);

				setTimeout(() => {
					showFailedInfoMsg();

					setShow(true);
				}, 300);
			});
	};

	const handlerClose = () => {
		setShow(false);

		setTimeout(() => {
			close();

			setShow(true);
		}, 300);
	};

	return (
		open && (
			<ModalBackground>
				<div
					className={`${styles['modal']} ${show ? styles['modal_show'] : styles['modal_hiding']}`}
				>
					<button
						type="button"
						className={styles['modal__close-btn']}
						onClick={handlerClose}
					>
						<IconClose />
					</button>
					<h3 className={styles['modal__title']}>Заявка на создание сайта</h3>
					<form
						id="form-services"
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
