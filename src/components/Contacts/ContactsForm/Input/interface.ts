// import { InputHTMLAttributes } from 'react';
// import { HTMLInputTypeAttribute } from 'react';
// import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form';

// export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
// 	id: string;
// 	inputType: 'textarea' | 'inputFile' | 'default';
// 	labelText?: string;
// 	labelStyleKey?: string;
// 	wrapperStyleKey?: string;
// 	clearInputStyleKey?: string;
// 	required: boolean;
// }
export default interface IInput {
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
	required: boolean;
	register?: UseFormRegister<IInput>;
}

// export default interface IInput<T extends FieldValues> {
// 	// id: string;
// 	// inputType: 'textarea' | 'inputFile' | 'default';
// 	// labelText?: string;
// 	// labelStyleKey?: string;
// 	// wrapperStyleKey?: string;
// 	// clearInputStyleKey?: string;
// 	// required: boolean;

// 	id: string;
// 	inputType: 'textarea' | 'inputFile' | 'default';
// 	labelText?: string;
// 	labelStyleKey?: string;
// 	wrapperStyleKey?: string;
// 	clearInputStyleKey?: string;
// 	required: boolean;
// 	type: HTMLInputTypeAttribute;
// 	name: Path<T>;
// 	placeholder?: string;
// 	register: UseFormRegister<T>;
// }
