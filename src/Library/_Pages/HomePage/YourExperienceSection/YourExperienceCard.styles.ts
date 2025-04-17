"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Body, Title1 } from "@/Library/Typography/TypographyNew";

export const YourExperienceCardInner = styled.article`
	text-align: center;
	svg {
		margin: auto;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 5rem;
	}
`;
export const YourExperienceCardTitle = styled(Title1)`
	color: var(--Indigo-97, #f3f1fe);
	line-height: 140%;
	margin-block: 2.5rem 1.5rem;
`;
export const YourExperienceCardCaption = styled(Body)`
	color: var(--Main-Ice, var(--Main-Ice, #eceff4));
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
	opacity: 0.6;
`;
