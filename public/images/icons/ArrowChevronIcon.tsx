export default function ArrwoChevronIcon({
	direction,
	size = 24,
}: {
	direction: 'left' | 'right';
	size?: number;
}) {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d={direction === 'right' ? 'M9 5L16 12L9 19' : 'M15 19L8 12L15 5'}
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="square"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
}
