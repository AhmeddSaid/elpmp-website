"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const Display1 = styled.p<{ size?: string }>`
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 110%;
	letter-spacing: -0.06rem;

	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 110%;
		letter-spacing: -0.06rem;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -0.12rem;
		text-transform: capitalize;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: ${({ size }) => size || "5rem"};
		font-style: normal;
		font-weight: 600;
		line-height: 110%;
		letter-spacing: -0.1rem;
	}
`;

export const Display2 = styled.p`
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 110%;
	letter-spacing: -0.04rem;

	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: 110%;
		letter-spacing: -0.05rem;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		font-feature-settings: "ss04" on;

		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		letter-spacing: -0.06rem;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-feature-settings: "ss04" on;

		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		letter-spacing: -0.06rem;
	}
`;

export const Label = styled.p<{
	size?: "S" | "MD" | "L" | "XL";
	capitalize?: boolean;
	weight?: "MD" | "Normal";
	variant?: "primary" | "secondary";
}>`
	font-size: ${({ size }) => {
		switch (size) {
			case "XL":
				return "1rem";
			case "L":
				return "0.875rem";
			case "MD":
				return "0.75rem";
			case "S":
				return "0.625rem";
			default:
				return "1rem";
		}
	}};
	color: ${({ variant, theme }) => (variant === "primary" ? theme.Primary : "")};
	text-transform: ${({ capitalize }) => (capitalize ? "uppercase" : "")};
	font-style: normal;
	font-weight: ${({ size, weight }) =>
		size === "XL" || size === "L" || size === undefined || weight === "MD" ? "500" : "400"};
	line-height: 100%;
	letter-spacing: ${({ size }) => {
		switch (size) {
			case "XL":
				return "-0.005rem";
			case "L":
				return "-0.00438rem";
			case "MD":
				return "0.00375rem";
			case "S":
				return "0.00313rem";
			default:
				return "-0.005rem";
		}
	}};
`;

export const Body = styled.p<{
	size?: "S" | "MD" | "L";
	underLine?: boolean;
	weight?: "MD" | "regular";
	color?: "gray" | "white" | "light";
	lineHeight?: string;
}>`
	color: ${({ color }) => {
		switch (color) {
			case "white":
				return "white";
			case "light":
				return "#60626C";
			case "gray":
				return "#8C8D91";

			default:
				return "black";
		}
	}};

	font-size: ${({ size }) => {
		switch (size) {
			case "L":
				return "1rem";
			case "MD":
				return "0.875rem";
			case "S":
				return "0.75rem";
			default:
				return "1rem";
		}
	}};
	font-style: normal;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "MD":
				return "500";

			default:
				return "400";
		}
	}};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "160%")};

	text-decoration: ${({ underLine }) => {
		switch (underLine) {
			case true:
				return "underline";

			default:
				return "";
		}
	}};
`;

export const Title1 = styled.p<{ weight?: "Regular" | "semibold" | "md" }>`
	font-size: 1.25rem;
	font-style: normal;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "Regular":
				return "400";
			case "md":
				return "500";
			case "semibold":
				return "600";
			default:
				return "Regular";
		}
	}};
	line-height: 150%;
	letter-spacing: -0.0125rem;
`;

export const Title2 = styled.p<{
	weight?: "Regular" | "semibold";
	color?: string;
	lineThrough?: boolean;
}>`
	font-size: 1.125rem;
	font-style: normal;

	text-decoration: ${({ lineThrough }) => (lineThrough ? "line-through" : "")};
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "Regular":
				return "400";

			case "semibold":
				return "600";

			default:
				return "Regular";
		}
	}};

	color: ${({ color }) => {
		switch (color) {
			case "gray":
				return "var(--Gray-5, #8C8D91);";
			case "white":
				return " var(--ffffff, #FFF)";

			default:
				return "black";
		}
	}};

	line-height: 130%;
	letter-spacing: -0.01125rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: -0.18px;
	}
`;
export const Title3 = styled.p<{ weight?: "Regular" | "semibold" | "med" }>`
	font-size: 1rem;
	font-style: normal;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "Regular":
				return "400";

			case "semibold":
				return "600";
			case "med":
				return "500";

			default:
				return "Regular";
		}
	}};
	line-height: 130%;
	letter-spacing: -0.01rem;
`;
export const Title4 = styled.p<{ weight?: "Medium" | "Regular" | "SemiBold" }>`
	font-size: 0.875rem;
	font-style: normal;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "Regular":
				return "400";

			case "Medium":
				return "500";
			case "SemiBold":
				return "600";

			default:
				return "Regular";
		}
	}};
	line-height: 130%;
	letter-spacing: -0.00875rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 150%; /* 24px */
		letter-spacing: -0.16px;
	}
`;

export const Heading2 = styled.p<{ weight?: "SemiBold" | "Regular"; align?: boolean }>`
	font-size: 1.5rem;
	font-style: normal;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "Regular":
				return "400";
			case "SemiBold":
				return "500";
			default:
				return "400";
		}
	}};
	line-height: 150%;
	letter-spacing: -0.0225rem;
	text-align: ${({ align }) => (align ? "center" : "")};
`;

export const Heading1 = styled.p<{ color?: string; center?: boolean }>`
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 28.8px */
	letter-spacing: -0.48px;
	text-align: ${({ center }) => (center ? "center" : "")};
	color: ${({ color }) => {
		switch (color) {
			case "white":
				return "white";
		}
	}};

	//
	// @media screen and (min-width: ${Breakpoints.sm}) {
	// 	font-size: 24px;
	// 	font-style: normal;
	// 	font-weight: 600;
	// 	line-height: 120%; /* 28.8px */
	// 	letter-spacing: -0.48px;
	// }
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		letter-spacing: -0.035rem;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -0.12rem;
		text-transform: capitalize;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		letter-spacing: -0.04rem;
		text-transform: capitalize;
	}
`;
