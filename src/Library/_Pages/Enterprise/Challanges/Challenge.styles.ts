"use client";

import styled from "styled-components";
import { Breakpoints, Col, Section } from "@/Grids";
import { BigParagraph, Heading3, Highlighter } from "@/Typography";

export const ChallengeContainer = styled.section`
	//color: white;
	position: relative;
	overflow: hidden;
	background-image: url("/Enterprise/Frame 697.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	padding-top: 120px;
`;

export const BgColorooo = styled.div`
	position: absolute;
	top: -21%;
	border-radius: 96.25rem;
	z-index: 6;
	width: 100%;
	height: 72.125rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		z-index: 5555555;
	}
`;

export const ChallengeHighLighter = styled(Highlighter)`
	text-align: center;
	position: relative;
	z-index: 5555;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.27px;
	width: fit-content;
	margin: auto;
	/* margin-top: -70px; */
	/* text-transform: capitalize; */
	padding-block: 0.5rem;
	text-align: center;
	background-image: linear-gradient(90deg, #4f29f3, #e50fc3);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transform: translateY(-60px);

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 1.75rem;
		font-weight: 600;
	}
`;

export const ChallengeCaption = styled.div`
	text-align: center;
	position: relative;
	z-index: 500;
	font-feature-settings: "ss04" on;

	font-size: 3rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.06rem;

	max-width: 565px;
	margin-inline: auto;
	color: white;
	transform: translateY(-60px);

	background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.3) 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	p {
		font-family: Poppins;
		font-weight: 600;
		font-size: 48px;
		leading-trim: Cap height;
		line-height: 130%;
		letter-spacing: -2%;
		text-align: center;
		vertical-align: middle;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		line-height: 1.1;
		&::before {
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -140px;
			background-image: linear-gradient(to top, rgba(0, 0, 0.1), rgba(0, 0, 0, 0));
			z-index: 2;
			width: 100vw;
			height: 400px;
		}

		p {
			font-size: 2rem;
			font-weight: 600;
		}
	}
`;

export const InsightShell = styled.div`
	//margin-top: 9.25rem;
	/* margin-bottom: 4.5rem; */
	position: relative;
	z-index: 555;
	transform: translateY(-30px);
`;

export const BlueShadowContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: -35px;
	top: 114px;
	z-index: -55;
`;

export const BlueShadows = styled.div`
	width: 1134px;
	height: 465px;
	background: #220891;
	border-radius: 24px;
`;

export const InsightsShellShadow = styled.div`
	background-color: red;
	height: 10px;
	width: 10px;
`;

export const InsightCardShel = styled.div`
	box-shadow: 30px 22px 0 0 #220891;
	border-radius: 32px;
	background: white;
	margin-top: 106px;
	position: relative;
	/* overflow: hidden; */
	transform: translateY(-25px);
	//&:after {
	//	content: "";
	//	width: 100%;
	//	height: 100%;
	//	background-color: red;
	//	position: absolute;
	//	right: 0;
	//	top: 0;
	//	z-index: 10000000000;
	//}
	transform: translateY(-70px);

	&:after {
		content: url("/Enterprise/dashed.svg");
		position: absolute;
		left: 50%;
		top: 35%;
		transform: rotate(90deg);
		z-index: 1000100;

		@media screen and (min-width: ${Breakpoints.lg}) {
			left: 50%;
			top: 75px;
			transform: rotate(0);
		}

		//bottom: 0;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-top: 2rem;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		&::before {
			content: "";
			width: 86px;
			height: 86px;
			background-image: linear-gradient(315deg, #221e34 50%, rgba(255, 9, 9, 0) 50%);
			position: absolute;
			left: 50%;
			transform: translateX(-50%) rotate(45deg);
			top: -44px;
			z-index: 1;
		}
	}
`;
export const InsightsShell = styled(Section)`
	/* transform: translateY(-70px); */
`;
export const InsightsContainer = styled(Col)`
	//margin-top: 5.25rem;
	//margin-bottom: 5rem;
	position: relative;
	text-align: center;
	flex-grow: 1;
	padding-inline: 5.5rem;

	background: var(--ffffff, #fff);
	//border-radius: 24px;
	padding: 5.25rem 0.5rem 5rem 0.5rem;

	&.FirstCol {
		border-top-right-radius: 24px;
		border-top-left-radius: 24px;
	}

	&.SecCol {
		border-bottom-right-radius: 24px;
		border-bottom-left-radius: 24px;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: 5.25rem 5.5rem 5rem 5.5rem;

		&.FirstCol {
			border-top-right-radius: 0;
			border-top-left-radius: 24px;
			border-bottom-left-radius: 24px;
		}

		&.SecCol {
			border-top-right-radius: 24px;
			border-bottom-right-radius: 24px;

			border-bottom-left-radius: 0;
		}
	}
`;

export const ChallengeInsights = styled.div`
	//color: var(--Main-Black, #1d1c1d);
	//text-align: center;
	//font-size: 6rem;
	//font-style: normal;
	//font-weight: 700;
	//line-height: 120%; /* 7.2rem */
	//letter-spacing: -0.18rem;
	//text-transform: capitalize;
	//margin: auto;
	padding-bottom: 4rem;
	display: flex;
	justify-content: center;
`;

export const InsightsParagraph = styled(BigParagraph)`
	text-align: center;
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	leading-trim: both;
	text-edge: cap;
	font-family: Poppins;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 2.4rem */
	letter-spacing: -0.0225rem;
`;

export const InsightsBody = styled(Heading3)`
	color: var(--Gray-6, #b3b4b7) !important;
	text-transform: capitalize;
`;

export const InsightsCaption = styled.p`
	color: var(--Gray-7, #dadadd) !important;

	font-size: 1.25rem;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: -0.0125rem;
`;

export const SpanStyle = styled.span`
	color: var(--Main-Indigo, #4f29f3) !important;

	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 160%;
	letter-spacing: -0.0225rem;
`;
