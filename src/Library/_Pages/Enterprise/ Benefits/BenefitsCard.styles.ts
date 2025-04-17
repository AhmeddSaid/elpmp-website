"use client";

import styled from "styled-components";
import { Body, Heading2 } from "@/Library/Typography/TypographyNew";

export const CardBenefitsContainer = styled.div<{
	bgColor?: "pink" | "yellow" | "white" | "blue";
	index: number;
}>`
	padding: 3rem 3.5rem 2.2rem 3.5rem;
	border-radius: 2rem;
	border: 6px solid var(--Gray-7, #fff);
	position: sticky;
	top: ${({ index }) => `${30 + index * 4}%`};
	transform: ${({ index }) => (index !== 0 ? `translateY(${index * 8}%) ` : "translateY(-3%)")};
	margin-bottom: 1rem;
	overflow: hidden;
	transition: 300ms;
	//background: linear-gradient(180deg, #eef0f4 0%, #e4e3e7 100%);
	box-shadow:
		0 0 0 6px #fff inset,
		0 2px 44px 0 rgba(0, 0, 0, 0.25);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;
export const CardBenefitsHeading = styled(Heading2)<{ headingColor?: "main" | "white" | "black" }>`
	color: ${({ headingColor }) => {
		switch (headingColor) {
			case "main":
				return "var(--Main-Indigo, #4F29F3)";
			case "white":
				return "var(--ffffff, #FFF)";
			case "black":
				return "var(--Main-Black, #1D1C1D)";
			default:
				return "var(--Main-Indigo, #4F29F3)";
		}
	}};
`;

export const CardBenefitsBody = styled(Body)<{
	bodyColor?: "black" | "white" | "gray";
}>`
	color: ${({ bodyColor }) => {
		switch (bodyColor) {
			case "gray":
				return "var(--Gray-3, #42434A)";
			case "white":
				return "var(--ffffff, #FFF)";
			case "black":
				return "var(--Main-Black, #1D1C1D)";
			default:
				return "var(--ffffff, #FFF)";
		}
	}};
`;
