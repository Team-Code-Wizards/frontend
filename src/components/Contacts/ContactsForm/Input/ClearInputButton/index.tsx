import ClearInputIcon from '../../../../../../public/images/icons/ClearInputIcon';
import styles from './style.module.scss';

export default function ClearInputButton({
	isHidden,
	styleKey,
}: {
	isHidden: boolean;
	styleKey: string;
}) {
	if (isHidden) return null;

	return (
		<button className={styles[styleKey]} type="button">
			<ClearInputIcon />
		</button>
	);
}
