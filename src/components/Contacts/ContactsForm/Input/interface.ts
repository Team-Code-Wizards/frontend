import { InputHTMLAttributes } from 'react';

export default interface IInput
	extends Partial<InputHTMLAttributes<HTMLInputElement>> {
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelClassName?: string;
}
