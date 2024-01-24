import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import IInput from './interface';
import style from './style.module.scss';

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
}: IInput) {
	const [isActive, setIsActive] = useState(false);

	if (inputType === 'textarea')
		return (
			<span className={wrapperStyleKey && style[wrapperStyleKey]}>
				<textarea
					className={className && style[className]}
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
					className={className && style[className]}
					type={type}
					id="file"
					name={name}
					accept={accept}
				/>
				<label className={labelStyleKey && style[labelStyleKey]} htmlFor="file">
					{labelText}
				</label>
			</>
		);

	return (
		<span className={wrapperStyleKey && style[wrapperStyleKey]}>
			{labelText && (
				<label className={labelStyleKey && style[labelStyleKey]} htmlFor={id}>
					{labelText}
				</label>
			)}
			<input
				type={type}
				className={className && style[className]}
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
