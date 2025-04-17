"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Display2, Heading2 } from "@/Library/Typography/TypographyNew";

export const UniqueFeaturesSection = styled.section`
	/* padding-block: 15.56rem 16.72rem; */
	text-align: center;
	position: relative;
	/* margin-top: -330px; */
	/* background-color: blue; */
	z-index: 3;

	padding-top: 100px;
	padding-bottom: 260px;

	@media screen and (max-width: ${Breakpoints.sm}) {
		/* margin-top: -180px; */
	}

	img {
		width: 100%;
		//height: 100%;
		//object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;

export const UniqueFeaturesHeading = styled(Heading2)`
	color: var(--Indigo-86, #c7bbfb);
`;

export const UniqueFeaturesCaption = styled(Display2)`
	margin-block: 2.5rem 5.5rem;
	color: var(--ffffff, #fff);
	max-width: 46.1875rem;
	margin-inline: auto;
`;
