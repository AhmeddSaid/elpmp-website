import React from "react";

const LeftArrow = ({ active }: { active: boolean }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				style={{ transition: "300ms" }}
			>
				<path
					d="M13.3333 25.3332L4 15.9998M4 15.9998L13.3333 6.6665M4 15.9998L28 15.9998"
					stroke={active ? "#DADADD" : "#000"}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ transition: "300ms" }}
				/>
			</svg>
		</>
	);
};

export default LeftArrow;
