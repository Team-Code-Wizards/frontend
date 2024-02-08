import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export enum InputNames {
	NAME = 'clientName',
	PHONE = 'clientTel',
	EMAIL = 'clientEmail',
	MESSAGE = 'clientMessage',
	FILE = 'clientFile',
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	inputType: 'textarea' | 'inputFile' | 'default';
	name: InputNames;
	labelText?: string;
	labelStyleKey?: string;
	wrapperStyleKey?: string;
	clearInputStyleKey?: string;
	regOptions?: Record<string, string>;
}

export interface IInputProps extends IInput {
	register: UseFormRegister<FieldValues>;
}
