import { useState } from 'react';

import ClearInputButton from './ClearInputButton';
import IInput from './interface';
import style from './style.module.scss';

export default function Input({
	className,
	type,
	name,
	placeholder,
	value,
	accept,
	inputType,
	labelText,
	labelClassName,
}: IInput) {
	const [isActive, setIsActive] = useState(false);

	if (inputType === 'textarea')
		return (
			<span className={style['textarea-box']}>
				<textarea
					className={className}
					name={name}
					placeholder={placeholder}
					onFocus={() => setIsActive(true)}
					onBlur={() => setIsActive(false)}
				/>
				<ClearInputButton styleKey="textarea-clear-btn" isHidden={!isActive} />
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
		<span className={style['input-box']}>
			<input
				type={type}
				className={className}
				name={name}
				placeholder={placeholder}
				value={value}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
			/>
			<ClearInputButton styleKey="input-clear-btn" isHidden={!isActive} />
		</span>
	);
}
