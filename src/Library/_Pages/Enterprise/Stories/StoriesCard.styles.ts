"use client";

import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Label, Title4 } from "@/Library/Typography/TypographyNew";

export const CardShell = styled.div<{ bgcolor?: string }>`
	padding: 2rem 1.5rem 2.5rem 1.5rem;
	margin-bottom: 1.25rem;
	margin-right: 16px;
	border-radius: 1rem;
	border: 1px solid var(--Gray-8, #efeff0);
	//height: 100%;
	background: ${({ bgcolor }) => (bgcolor === "white" ? "fff" : "var(--Gray-9, #f4f5f5)")};
	height: ${({ bgcolor }) => (bgcolor === "white" ? "" : "100%")};

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: ${Breakpoints.lg}) {
		width: 333px;
		height: 345px;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 24px;
	}
`;

export const CardImage = styled(Image)`
	border-radius: 6.25rem;
	background: url(<path-to-image>) lightgray 50% / cover no-repeat;
	box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
`;

export const LabelStyles = styled(Label)`
	color: var(--Gray-5, #8c8d91);
`;

export const ReadMoreCaption = styled(Title4)`
	color: var(--Main-Indigo, #4f29f3);
	cursor: pointer;
`;
