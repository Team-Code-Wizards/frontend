import { InputHTMLAttributes } from 'react';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelClassName?: string;
	wrapperClassName?: string;
	clearInputStyleKey?: string;
}
