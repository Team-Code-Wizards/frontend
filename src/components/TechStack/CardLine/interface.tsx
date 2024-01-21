import ICard from './Card/interface';

export default interface ICardLine {
	id: number;
	title: string;
	cards: ICard[];
}
