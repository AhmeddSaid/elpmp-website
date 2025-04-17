"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Title4 } from "@/Library/Typography/TypographyNew";

export const LearningObjectivesContainer = styled.div`
	padding: 4rem 3rem 3rem;
	border-radius: 1.5rem;
	background: var(--Indigo-97, #f3f1fe);
	margin-bottom: 3rem;

	background-image: url("/Group 30.png");
	background-repeat: repeat;
	position: relative;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 64px 24px 48px 24px;
		width: calc(100% + 1.5rem);
		margin: 0;
		margin-left: -0.75rem;
		margin-right: -0.75rem;

		border-radius: unset;

		background-image: url("/Group 30.png");
	}
`;

export const IndexContainer = styled.div`
	display: flex;
	width: 2.5rem;
	height: 2.5rem;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 6.25rem;
	border: 1px solid var(--Indigo-70, #886ef7);
	background: var(--ffffff, #fff);
`;

export const IndexStyles = styled(Title4)`
	color: #2d0bc1;
	text-align: center;
`;

export const ViewMoreDiv = styled.button`
	display: flex;
	height: 1.5rem;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	align-self: stretch;
	padding-top: 2rem;
	margin: auto;
	cursor: pointer;
	background: transparent;
`;

export const ViewMoreStyles = styled(Title4)`
	color: var(--Main-Indigo, #4f29f3);
	text-align: center;
`;
