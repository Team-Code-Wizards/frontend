import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import IInput from './interface';
import styles from './styles.module.scss';

export default function Input({
	id,
	className,
	type,
	name,
	placeholder,
	value,
	labelText,
	labelStyleKey,
	wrapperStyleKey,
	clearInputStyleKey,
}: IInput) {
	const [isActive, setIsActive] = useState(false);

	return (
		<span className={wrapperStyleKey && styles[wrapperStyleKey]}>
			{labelText && (
				<label className={labelStyleKey && styles[labelStyleKey]} htmlFor={id}>
					{labelText}
				</label>
			)}
			<input
				type={type}
				className={className && styles[className]}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
			<ClearInputButton styleKey={clearInputStyleKey} isHidden={!isActive} />
		</span>
	);
}
