import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import IInput from './interface';

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
	labelClassName,
	wrapperClassName,
	clearInputStyleKey,
}: IInput) {
	const [isActive, setIsActive] = useState(false);

	if (inputType === 'textarea')
		return (
			<span className={wrapperClassName}>
				<textarea
					className={className}
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
					className={className}
					type={type}
					id="file"
					name={name}
					accept={accept}
				/>
				<label className={labelClassName} htmlFor="file">
					{labelText}
				</label>
			</>
		);

	return (
		<span className={wrapperClassName}>
			{labelText && (
				<label className={labelClassName} htmlFor={id}>
					{labelText}
				</label>
			)}
			<input
				type={type}
				className={className}
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
