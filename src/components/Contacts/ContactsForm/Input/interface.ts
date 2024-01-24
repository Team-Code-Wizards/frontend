import { InputHTMLAttributes } from 'react';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelStyleKey?: string;
	wrapperStyleKey?: string;
	clearInputStyleKey?: string;
}
