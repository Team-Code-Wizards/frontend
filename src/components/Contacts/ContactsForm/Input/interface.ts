import { InputHTMLAttributes } from 'react';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelStyleKey?: string;
	wrapperStyleKey?: string;
	clearInputStyleKey?: string;
}
