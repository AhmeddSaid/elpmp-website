"use client";
import styled, { css, DefaultTheme } from "styled-components";
import HeadingType from "@/Library/Typography/TypographyProps";

const getColor = ({
	theme,
	color = "black",
}: {
	theme: DefaultTheme;
	color?: "brand" | "black" | "grey3" | "grey5" | "grey6" | "grey7" | "white" | undefined;
}): string => {
	switch (color) {
		case "grey3":
			return theme.Grey[3];
		case "grey5":
			return theme.Grey[5];
		case "grey6":
			return theme.Grey[6];
		case "grey7":
			return theme.Grey[7];
		case "brand":
			return theme.Primary;
		case "white":
			return "#ffffff";
		case "black":
			return theme.Black.main;
		default:
			return theme.Black.main;
	}
};

const getWeight = ({
	weight = "normal",
}: {
	weight?: "normal" | "semi-bold" | "extra-bold" | "bold";
}): string => {
	switch (weight) {
		case "semi-bold":
			return "500";
		case "bold":
			return "600";
		case "extra-bold":
			return "600";
		default:
			return "400";
	}
};

const textAlign = ({ align }: { align?: "left" | "right" | "center" }): string => {
	switch (align) {
		case "left":
			return "left";
		case "right":
			return "right";
		case "center":
			return "center";
		default:
			return "";
	}
};

const textUnderline = ({ underline }: { underline?: boolean }): string =>
	underline ? "underline" : "";
const textTransform = ({ capitalize }: { capitalize?: boolean }): string =>
	capitalize ? "capitalize" : "";

const baseStyles = css<HeadingType>`
	color: ${getColor} !important;
	text-align: ${textAlign} !important;
	text-transform: ${textTransform} !important;
	text-decoration: ${textUnderline} !important;

	& > * {
		color: ${getColor} !important;
		text-align: ${textAlign} !important;
		text-transform: ${textTransform} !important;
		text-decoration: ${textUnderline} !important;
	}
`;

export const Heading1 = styled.h1<HeadingType>`
	font-size: 4rem;
	font-style: normal;
	line-height: 100%;
	letter-spacing: -1.92px;
	font-weight: 700;

	${baseStyles}
`;

export const Heading2 = styled.h2<HeadingType & { width?: string; small?: boolean }>`
	width: ${({ width }) => width};
	font-feature-settings: "ss04" on;
	font-size: ${({ small }) => (small ? "2rem" : "3rem")};
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: ${({ small }) => (small ? "-0.64px" : " -0.96px")};
	${baseStyles}
`;

export const Heading3 = styled.h2<HeadingType>`
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.64px;
	${baseStyles}
`;

export const BigParagraph = styled.p<HeadingType>`
	font-size: 1.5rem;
	font-style: normal;
	line-height: 130%;
	letter-spacing: -0.36px;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const MediumParagraph = styled.p<HeadingType>`
	font-size: 1.125rem;
	font-style: normal;
	line-height: 130%;
	letter-spacing: -0.18px;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const SmallParagraph = styled.p<HeadingType>`
	font-size: 0.875rem;
	font-style: normal;
	line-height: 130%;
	letter-spacing: -0.14px;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const TinyParagraph = styled.p<HeadingType>`
	font-size: 1rem;
	font-style: normal;
	line-height: 150%;
	letter-spacing: -0.14px;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const Highlighter = styled.p<{
	big?: boolean;
	medium?: boolean;
	align?: "center" | "start" | "end";
}>`
	font-size: ${({ big, medium }) => (big ? "2rem" : medium ? "1.5rem" : "1.125rem")};

	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.27px;
	/* text-transform: capitalize; */
	padding-block: 0.5rem;
	text-align: ${({ align }) => align || "start"};
	background: -webkit-linear-gradient(90deg, #4f29f3 0.01%, #e50fc3 102.78%);
	background-image: ${({ big }) =>
		big
			? "linear-gradient(90deg, #4f29f3 30%, #e50fc3 70%)"
			: "linear-gradient(90deg, #4f29f3 0%, #e50fc3 27%)"};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
