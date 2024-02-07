import { Control, FieldValues, UseFormRegister } from 'react-hook-form';

import { IModalItem } from '@/constants/WebsiteCreationModal/type';

export interface IModalItemProps {
	item: IModalItem;
	control: Control<IModalItem, any, IModalItem>;
	register: UseFormRegister<IModalItem>;
	errors:any
}
