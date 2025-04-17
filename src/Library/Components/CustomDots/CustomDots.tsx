import React from "react";
import { Btn, DotStyle } from "@/Library/_Pages/Enterprise/Stories/Stories.styles"; // eslint-disable-next-line

// eslint-disable-next-line
// @ts-ignore
const Dot = props => {
	// eslint-disable-next-line react/prop-types
	const { white, onClick, ...rest } = props;
	const { active } = rest;

	return (
		<Btn className={`${active ? "active" : ""} ${white ? "white" : ""}`} onClick={() => onClick()}>
			<DotStyle className={`${white ? "white" : ""}`} />
		</Btn>
	);
};

export default Dot;
