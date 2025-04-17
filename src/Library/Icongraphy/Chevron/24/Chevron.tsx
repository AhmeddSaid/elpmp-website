import React from "react";

const Chevron = ({ className }: { className?: string }) => {
	return (
		<>
			<svg
				className={className}
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 11.6992L12 15.6992L7 11.6992"
					stroke="#37383F"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default Chevron;
