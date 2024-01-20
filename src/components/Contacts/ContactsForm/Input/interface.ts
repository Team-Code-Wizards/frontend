import { InputHTMLAttributes } from 'react';

export default interface IInput
	extends Omit<Partial<InputHTMLAttributes<HTMLInputElement>>, 'id'> {
	id: number;
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelClassName?: string;
}
