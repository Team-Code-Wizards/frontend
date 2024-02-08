import { FormEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { TCallbackData } from '../interface';

export default interface IPromoForm {
	onSubmit: (event: FormEvent) => void;
	register: UseFormRegister<TCallbackData>;
}
