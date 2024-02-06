export interface IModalItem {
	id: string;
	title: string;
	name: string;
	placeholder?: string;
	type: string;
	required?: boolean;
	options?: IOptions[];
	pattern?: string;
}

export interface IOptions {
	label: string;
	value: string;
}
