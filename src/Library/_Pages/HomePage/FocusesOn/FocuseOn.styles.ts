"use client";

import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";
import { Display1, Heading2 } from "@/Library/Typography/TypographyNew";

export const FocusesContanier = styled.section`
	text-align: center;
	margin-inline: auto;
	max-width: 57.125rem;
	margin-bottom: 4rem;

	:nth-child(2) {
		padding-block: 1.5rem;
		@media screen and (max-width: ${Breakpoints.lg}) {
			padding-block: 1.5rem 2rem;
		}
	}
`;

export const ImageContainerCol = styled(Col)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;

export const FocuseCaption = styled(Display1)<{ rtl?: boolean }>`
	text-transform: capitalize;
	background: var(--Gradiant-2, linear-gradient(180deg, #1d1c1d 0%, #3f434d 100%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-inline: auto;
	margin-bottom: 6rem;
	font-weight: 600;
	line-height: ${({ rtl }) => (rtl ? "unset" : "120%")};
	@media screen and (max-width: ${Breakpoints.lg}) {
		text-transform: lowercase;
		margin-bottom: 6.69rem;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-bottom: 3rem;
		font-size: 2rem;
	}
`;

export const FocuseBody = styled(Heading2)`
	color: var(--Main-Black, #1d1c1d);
	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 1rem;
		/* width: 80%; */
	}
`;

export const ImageContanier = styled.div`
	border-radius: 2rem;
	border: 8px solid var(--Gray-7, #dadadd);
	//background: var(--Gray-7, #dadadd);
	//box-shadow:
	//	0 0 0 12px #fff inset,
	//	0 2px 4px 0 rgba(0, 0, 0, 0.25);
	overflow: hidden;
	position: relative;
	width: 573px;
	height: 547px;

	/* img {
		width: 100%;
	} */

	@media screen and (max-width: ${Breakpoints.lg}) {
		width: 400px;
		height: 400px;
	}
`;

export const FocuseInfo = styled.div`
	max-width: 20.75rem;
	margin-inline: auto;
	margin-bottom: 7.5rem;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-bottom: 1rem;

		p:last-child {
			width: 95%;
			text-align: center;
			margin: auto;
		}
	}

	svg {
		@media screen and (max-width: ${Breakpoints.lg}) {
			margin-inline: auto;
			width: 96px;
			height: 96px;
		}
	}

	@media (max-width: ${Breakpoints.lg}) {
		text-align: center;
	}

	:nth-child(2) {
		padding-block: 24px;
		@media screen and (max-width: ${Breakpoints.lg}) {
			padding-block: 2.5rem 1.5rem;
		}
	}
`;
