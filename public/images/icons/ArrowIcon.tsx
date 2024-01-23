export default function ArrowIcon({ size = 24 }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M7 17L17 7M17 7H9M17 7V15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
