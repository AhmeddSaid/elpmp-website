import React, { ReactNode } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	body: string;
	icon?: ReactNode;
	variant?: "primary" | "secondary" | "mainPink";
	rest?: { [key: string]: string };
	size?: "xl" | "lg" | "md" | "sm";
	className?: string;
	type?: "button" | "submit" | "reset";
	target?: string;
	fullwidth?: boolean;
	loading?: boolean;
	fontSize?: string;
	weight?: string;
	onClick?: () => void;
}

export interface Locale {
	locale: "en" | "ar";
}
