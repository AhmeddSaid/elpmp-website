import React from "react";
import { DividerStyles } from "@/UI/Divider/Divider.styles";

const Divider = ({
	className,
	id,
	color = "divider",
}: {
	className?: string;
	id?: string;
	color?: "grey" | "divider";
}) => {
	return (
		<>
			<DividerStyles color={color} className={className} id={id} />
		</>
	);
};

export default Divider;
