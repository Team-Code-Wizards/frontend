import { ReactElement } from 'react';

export default interface ICard {
	id: number;
	title: string;
	description: string;
	icons: ReactElement[];
}
