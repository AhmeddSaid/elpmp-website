"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Heading2, Title1, Title3 } from "@/Library/Typography/TypographyNew";

export const ExamModesCardContainer = styled.div`
	padding: 3.5rem 2rem;
	border-radius: 2rem;
	border: 1px solid var(--Gray-7, #dadadd);
	background: var(--ffffff, #fff);
	margin-top: 16px;
	height: 100%;

	svg {
		margin-inline: auto;
		width: 89px;
		height: 88px;
	}
`;

export const ExamModesCardHeading = styled(Heading2)`
	margin-top: 40px;
	@media screen and (min-width: ${Breakpoints.md}) {
		margin-top: 3.5rem;
	}
`;

export const ExamModesCardTitle1 = styled(Title1)`
	margin-block: 1.5rem 2rem;
`;

export const ExamModesCardTitle3 = styled(Title3)`
	color: var(--Gray-5, #8c8d91);

	span {
		color: black;
		font-weight: 600;

		@media screen and (min-width: ${Breakpoints.md}) {
			color: var(--Gray-5, #8c8d91);
			font-weight: 600;
		}
	}
`;
