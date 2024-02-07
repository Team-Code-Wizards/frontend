import { Control, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IModalItemProps {
	//item: IModalItem;
	control: Control<FieldValues>;
	register: UseFormRegister<FieldValues>;
}
