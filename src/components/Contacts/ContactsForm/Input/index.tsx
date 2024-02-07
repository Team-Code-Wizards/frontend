import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import IInput from './interface';
import styles from './styles.module.scss';

// type Inputs = {
// 	clientTel: string | undefined;
// 	clientEmail: string | undefined;
// };

export default function Input({
	id,
	className,
	type,
	name,
	placeholder,
	value,
	accept,
	inputType,
	labelText,
	labelStyleKey,
	wrapperStyleKey,
	clearInputStyleKey,
	// register,
}: IInput) {
	const [isActive, setIsActive] = useState(false);

	if (inputType === 'textarea')
		return (
			<span className={wrapperStyleKey && styles[wrapperStyleKey]}>
				<textarea
					className={className && styles[className]}
					name={name}
					placeholder={placeholder}
					onFocus={() => setIsActive(true)}
					onBlur={() => setIsActive(false)}
				/>
				<ClearInputButton styleKey={clearInputStyleKey} isHidden={!isActive} />
			</span>
		);

	if (inputType === 'inputFile')
		return (
			<>
				<input
					className={className && styles[className]}
					type={type}
					id="file"
					name={name}
					accept={accept}
				/>
				<label
					className={labelStyleKey && styles[labelStyleKey]}
					htmlFor="file"
				>
					{labelText}
				</label>
			</>
		);

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
