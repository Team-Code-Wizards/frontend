import { FormEvent } from 'react';

export interface IContactsFormProps {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
