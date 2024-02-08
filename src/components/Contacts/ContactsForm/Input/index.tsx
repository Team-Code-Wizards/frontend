import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import { IInputProps } from './interface';
import styles from './styles.module.scss';

export default function Input({
	id,
	className,
	register,
	type,
	name,
	placeholder,
	accept,
	inputType,
	labelText,
	labelStyleKey,
	wrapperStyleKey,
	clearInputStyleKey,
	regOptions,
}: IInputProps) {
	const [isActive, setIsActive] = useState(false);

	//TODO починить костыль
	if (!register) return;

	if (inputType === 'textarea')
		return (
			<span className={wrapperStyleKey && styles[wrapperStyleKey]}>
				<textarea
					className={className && styles[className]}
					placeholder={placeholder}
					{...register(name, regOptions)}
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
					{...register(name)}
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
				id={id}
				placeholder={placeholder}
				{...register(name)}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
			<ClearInputButton styleKey={clearInputStyleKey} isHidden={!isActive} />
		</span>
	);
}
