import React from "react";
import { ButtonProps } from "@/Library/Globals";
import { ButtonStyles } from "@/UI/Button/Styles";

const Button = ({
	icon,
	body,
	variant = "primary",
	size = "md",
	type = "button",
	fullwidth = false,
	loading = false,
	onClick,
	disabled = false,
	fontSize,
	weight,
	...rest
}: ButtonProps) => {
	return (
		<>
			<ButtonStyles
				onClick={disabled ? undefined : onClick}
				fullwidth={!!fullwidth}
				type={type}
				variant={variant}
				size={size}
				disabled={disabled}
				fontSize={fontSize}
				weight={weight}
				{...rest}
			>
				{loading ? (
					<>...loading</>
				) : (
					<>
						{icon ? icon : null}
						{icon ? body ? <span>{body}</span> : null : body}
					</>
				)}
			</ButtonStyles>
		</>
	);
};

export default Button;
