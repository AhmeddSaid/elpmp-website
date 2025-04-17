"use client";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints, Col, Flexbox } from "@/Grids";
import { Body, Display1, Heading1, Title2 } from "@/Library/Typography/TypographyNew";
import { Highlighter } from "@/Typography";

export const ConfidenceTitle = styled(Highlighter)`
	margin-bottom: 40px;
`;

export const ConfidenceHeader = styled(Display1)`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	margin: 40px auto 116px;
	/* max-width: 914px; */
	max-width: 90%;
	font-size: ${({ size }) => size};
	font-style: normal;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: -0.12rem;
	text-transform: capitalize;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-block: 32px 57.92px;
		font-size: 2rem;
	}
`;
export const PercentHolder = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.25rem;
	@media screen and (max-width: ${Breakpoints.lg}) {
		align-items: center;
	}
`;
export const PercentNum = styled.span`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	leading-trim: both;
	text-edge: cap;
	font-family: Poppins;
	font-size: 6.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -0.13rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 3.5rem;
	}
`;
export const Percent = styled.span`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	font-family: Poppins;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.04rem;
	text-transform: capitalize;
	margin-top: 1.25rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-top: unset;
	}
`;
export const Confidence = styled.section<{ topSpace?: boolean }>`
	//padding-block: 300.96px 104.96px;
	padding-top: ${({ topSpace }) => topSpace && "9.375rem"};
	padding-bottom: 104.96px;
`;
export const TakeLookSection = styled(Flexbox)`
	border-block: 0.0313rem solid var(--Gray-6, #b3b4b7);
	margin-bottom: 0;
	padding: 24px 32px;
	align-items: center;
	position: relative;

	& svg {
		position: absolute;
		left: 50%;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		& svg {
			display: none;
		}
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: column;
		align-items: start;
		padding-block: 16px;
	}
`;
export const TakeLookSectionCaption = styled(Col)`
	text-align: start;
	margin-bottom: 8px;
`;
export const TakeLookSectionTitle = styled(Col)`
	text-align: end;
	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: start;
	}
`;
export const ConfidenceSectionPlay = styled(Image)`
	min-width: 100%;
	margin-bottom: 64px;
`;

export const ConfidenceSectionFooter = styled(Flexbox)`
	padding: 64px 56px;
	border-radius: 48px;
	background: var(--Main-Ice, #eceff4);
	position: relative;
	align-items: center;
	& svg {
		display: none;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: column;
		padding: 72px 32px 64px;
	}
	@media screen and (min-width: ${Breakpoints.xxl}) {
		max-height: 18.5625rem;
		& svg {
			display: block;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export const ConfidenceFooterPercentage = styled(Flexbox)`
	// @media (max-width: ${Breakpoints.lg}) {
	// 	margin-bottom: 48px;
	// }
`;

export const ConfidenceSectionFooterInner = styled(Flexbox)`
	max-width: 475px;
	flex-direction: column;
	column-gap: 48px;
	position: relative;

	& .successRate {
		/* padding-top: 2.5rem; */
		color: var(--Main-Black, #1d1c1d);

		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 110%; /* 2.2rem */
		letter-spacing: -0.04rem;
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
		margin: auto;
		margin-bottom: 123.04px;

		:after {
			content: "";
			background-image: url("/Line3.svg");
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			opacity: 0.1;
			width: 100%;
			height: 0.25rem;
			position: absolute;
			top: calc(100% + 61.52px);
			left: 50%;
			z-index: 100;
			transform: translateX(-50%);
		}
	}
`;

export const FooterPercentageNumber = styled.p`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	font-size: 104px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -2.08px;
	margin-inline-end: 4px;
	@media screen and (max-width: ${Breakpoints.lg}) {
	}
	font-size: 56px;
	letter-spacing: -1.12px;
`;

export const FooterPercentage = styled(Heading1)`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.64px;
	text-transform: capitalize;
`;

export const VS = styled.p`
	color: var(--Gray-4, #60626c);
	text-align: center;
	font-size: 64px;
	font-style: normal;
	font-weight: 400;
	line-height: 110%;
	letter-spacing: -1.28px;
	margin-inline: 16px;
	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 32px;
		letter-spacing: -0.64px;
	}
`;

export const ConfidenceFooterCaption = styled.div`
	max-width: 384px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin: auto;
	}
`;
export const ConfidenceFooterCaptionTitle = styled(Title2)`
	margin-bottom: 16px;
`;

export const ConfidenceFooterCaptionBody = styled(Body)`
	margin-bottom: 16px;

	span {
		color: var(--Main-Indigo, #4f29f3);
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 0;
	}
`;
export const VideoHolder = styled.div`
	width: 100%;
	height: 42.0625rem;
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	margin: 24px auto 64px;
	.placeholder {
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
	}
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 2;
		cursor: pointer;
	}
	button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		cursor: pointer;
		background: transparent;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		height: 23.75rem;
	}
`;
