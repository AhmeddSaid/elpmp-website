"use client";
import styled, { DefaultTheme } from "styled-components";

export const ButtonStyles = styled.button<{
	size: "xl" | "lg" | "md" | "sm";
	variant: "primary" | "secondary" | "mainPink";
	fullwidth: boolean;
	fontSize?: string;
	weight?: string;
}>`
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: inherit;
	font-size: ${({ fontSize }) => fontSize || "0.875rem"};
	font-weight: ${({ weight }) => weight || "400"};
	line-height: 1.5;
	position: relative;
	display: inline-flex;
	flex-shrink: 0;
	justify-content: center;
	inline-size: max-content;
	outline: none;
	text-align: center;
	text-decoration: none;
	border-radius: 100rem;
	transition:
		background 70ms cubic-bezier(0, 0, 0.38, 0.9),
		box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9),
		border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
		outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
	vertical-align: top;

	align-items: center;

	border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.Primary};

	background-color: ${({ variant, theme }) => {
		// variant === "primary" ? theme.Primary : "transparent"
		switch (variant) {
			case "primary":
				return theme.Primary;
			case "secondary":
				return "transparent";
			case "mainPink":
				return theme.mainPink;
			default:
				return "theme.Primary";
		}
	}};

	padding-inline: ${({ size }) => {
		switch (size) {
			case "xl":
				return "2.7rem";
			case "lg":
				return "2rem";
			case "md":
				return "1.25rem";
			case "sm":
				return ".5rem";
			default:
				return "1rem";
		}
	}};

	color: ${({ variant, theme }) => {
		switch (variant) {
			case "primary":
				return "white";
			default:
				return theme.Primary;
		}
	}};

	width: ${({ fullwidth }) => (fullwidth ? "100%" : "fit-content")};
	height: ${({ size }) => {
		switch (size) {
			case "xl":
				return "3.3125rem";
			case "lg":
				return "3rem";
			case "md":
				return "2.5rem";
			case "sm":
				return "2rem";
			default:
				return "3rem";
		}
	}};

	&:disabled {
		cursor: not-allowed;
	}

	& > span {
		margin-inline-start: 0.5rem;
	}
`;
