export default interface IInputContacts {
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
	required?: boolean;
}
