import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	inputType: 'textarea' | 'inputFile' | 'default';
	labelText?: string;
	labelStyleKey?: string;
	wrapperStyleKey?: string;
	clearInputStyleKey?: string;
	register: UseFormRegister<FieldValues>;
}

// import { InputHTMLAttributes } from 'react';

// export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
// 	id: string;
// 	inputType: 'textarea' | 'inputFile' | 'default';
// 	labelText?: string;
// 	labelStyleKey?: string;
// 	wrapperStyleKey?: string;
// 	clearInputStyleKey?: string;
// }
