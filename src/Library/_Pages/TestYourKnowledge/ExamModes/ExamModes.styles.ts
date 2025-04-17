"use client";
import styled from "styled-components";
import { Breakpoints, Row } from "@/Grids";
import { Display1 } from "@/Library/Typography/TypographyNew";

export const ExamModesSection = styled.section`
	padding-block: 6.5rem 5rem;
	text-align: center;
	background-image: linear-gradient(180deg, rgba(244, 245, 245, 0.5) 0%, #f4f5f5 100%);
	margin-bottom: 4rem;
	.ExamModesCol {
		height: 100%;
	}
`;
export const ItemsHolder = styled(Row)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		gap: 2rem;
	}
`;
export const ExamModesHeaderCaption = styled(Display1)`
	margin-block: 1.5rem 6rem;
	font-size: 2.25rem;
	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 3rem;
	}
	background: var(--Gradiant-2, linear-gradient(180deg, #1d1c1d 0%, #3f434d 100%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
