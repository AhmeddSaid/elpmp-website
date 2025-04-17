"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Grids";
import { Body, Display2, Label } from "@/Library/Typography/TypographyNew";
import { Highlighter } from "@/Typography";

export const OurPrioritySection = styled.section`
	padding-block: 9.5rem 7.5rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 96%;
		margin: auto;
	}
`;

export const OurPriorityCaption = styled.div`
	position: relative;
	z-index: 10;
`;

export const OurPriorityContainer = styled(Flexbox)`
	border-radius: 3rem;
	position: relative;
	padding: 1px;
	overflow: hidden;
`;

export const OurPriorityContainerInner = styled(Flexbox)`
	padding-block: 3rem;
	padding-inline-start: 3.5rem;
	padding-inline-end: 7.5rem;
	position: relative;
	z-index: 2;
	border-radius: 3rem;
	background: var(--Gray-9, #f4f4f4);

	gap: 56px;
	border-radius: 48px;
	border-width: 1px;
	padding-top: 48px;
	padding-right: 120px;
	padding-bottom: 48px;
	padding-left: 56px;
	@media screen and (min-width: ${Breakpoints.lg}) {
		width: 1156px;
		height: 471px;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: auto;
		padding: 3rem;
		padding-inline-start: 3rem;
		padding-inline-end: 3rem;
	}
	img {
		width: 100%;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
	}

	svg {
		position: relative;
		z-index: 10;
	}
`;
export const OurPriorityTitle = styled(Highlighter)`
	line-height: 140%;
	letter-spacing: -0.0125rem;
`;

export const OurPriorityCaptionHeader = styled(Display2)`
	margin-top: 1.5rem;
`;

export const OurPriorityCaptionBody = styled(Body)`
	margin-block: 2.5rem;
`;

export const OurPriorityCaptionLink = styled(Label)`
	color: var(--Main-Indigo, #4f29f3);
	cursor: pointer;
	margin-inline-end: 0.5rem;
`;

export const MoveBorder = styled.div`
	width: 300px;
	height: 300px;
	background: radial-gradient(#4747fd 40%, transparent 60%);
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	animation: move 7s linear 0s infinite normal;
	transform: translate(-50%, -50%);

	@keyframes move {
		0% {
			left: 0;
			top: 0;
		}
		35.7% {
			left: 100%;
			top: 0;
		}
		50% {
			left: 100%;
			top: 100%;
		}
		85.7% {
			left: 0;
			top: 100%;
		}
		100% {
			left: 0;
			top: 0;
		}
	}
`;
