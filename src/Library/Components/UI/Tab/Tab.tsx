import React from "react";
import { TabStyles } from "@/UI/Tab/Tab.styles";

const Tab = ({
	name,
	active = false,
	className,
	id,
	onClick,
}: {
	name: string;
	active?: boolean;
	className?: string;
	id?: string;
	onClick?: () => void;
}) => {
	return (
		<>
			<TabStyles
				onClick={active ? undefined : onClick && onClick}
				isActive={active}
				id={id}
				className={className}
			>
				{name}
			</TabStyles>
		</>
	);
};

export default Tab;
