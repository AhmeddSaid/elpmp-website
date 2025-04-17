import React from "react";

const RightArrow = ({ active }: { active: boolean }) => {
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
					d="M18.6667 6.6665L28 15.9998M28 15.9998L18.6667 25.3332M28 15.9998L4 15.9998"
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

export default RightArrow;
