import { IInteractionStep } from '@/constants/Interaction/type';

export interface IStepProps {
	item: IInteractionStep;
	inView: boolean;
	isActive: boolean;
}
