export interface IModalItem {
	id: string;
	title: string;
	placeholder?: string;
	type: string;
	required?: boolean;
	options?: IOptions[];
}

export interface IOptions {
	label: string;
	value: string;
}
