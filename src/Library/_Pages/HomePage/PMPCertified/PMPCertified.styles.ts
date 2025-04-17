"use client";

import styled from "styled-components";
import { Breakpoints, Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Display1, Heading2 } from "@/Library/Typography/TypographyNew";

export const PMPCertifiedSection = styled.section`
	background: var(--Main-Black, #1d1c1d);
	padding-block: 10.06rem 8.56rem;
`;
export const PMPCertifiedSectionContainer = styled(Section)<Locale>`
	position: relative;
	display: flex;
	flex-direction: row-reverse;

	img,
	svg,
	.lightening-svg {
		position: absolute;
		top: 7.37rem;
		right: ${({ locale }) => (locale === "en" ? "0" : "")};
		left: ${({ locale }) => (locale !== "en" ? "0" : "")};
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		img,
		img,
		svg,
		.lightening-svg {
			/* display: none; */
			position: unset;
			transform: scale(1.3);
		}
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		.lightening-svg {
			display: none;
		}
	}
`;

export const PMPCertifiedSectionHeader = styled(Col)`
	margin-bottom: 10.62rem;
`;

export const PMPCertifiedHeader = styled(Heading2)`
	color: var(--ffffff, #fff);
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%; /* 1.95rem */
	letter-spacing: -0.0225rem;
`;
export const PMPCertifiedTitle = styled(Display1)`
	font-size: 4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: -0.12rem;
	text-transform: capitalize;
	margin: 2.5rem 0 3.5rem 0;

	& > span {
		font-size: 4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -0.12rem;
		text-transform: capitalize;
		/* margin: 2.5rem 0 3.5rem 0; */
	}
	& > br {
		display: none;
	}
	:nth-child(1) {
		color: var(--Indigo-70, #886ef7);
		display: flex;
		width: 70%;
		margin: 0;
	}

	:nth-child(3) {
		color: var(--ffffff, #fff);
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 2rem;

		& > * {
			font-size: 2rem;
		}
	}
`;
export const PMPCertifiedHeaderFooter = styled.p`
	color: #fff;

	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: 170%; /* 2.55rem */
	letter-spacing: -0.0225rem;
	@media screen and (min-width: ${Breakpoints.xxl}) {
		width: 80%;
	}
`;
export const PMPCertifiedContainer = styled(Row)``;

export const PMPCertifiedCol = styled(Col)`
	margin-bottom: 1.25rem;
`;
