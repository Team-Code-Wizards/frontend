import { FormEvent } from 'react';

export default interface IPromoForm {
	onSubmit: (event: FormEvent) => void;
}
