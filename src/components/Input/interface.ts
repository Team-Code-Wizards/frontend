import { InputHTMLAttributes } from 'react';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	className: string;
	type?: string;
	name: string;
	placeholder?: string;
	value?: string | number;
	accept?: string;
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelStyleKey?: string;
	wrapperStyleKey?: string;
	clearInputStyleKey?: string;
}
