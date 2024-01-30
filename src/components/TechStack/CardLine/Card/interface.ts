import { ReactElement } from 'react';

export default interface ICard {
	id: string;
	title: string;
	description: string;
	icons: ReactElement[];
}
