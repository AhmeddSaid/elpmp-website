"use client";

import Image from "next/image";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";
import { Heading1, Highlighter, MediumParagraph } from "@/Typography";

export const EnterpriseHero = styled.div<{ rtl?: boolean; lines?: boolean }>`
	position: relative;
	overflow: hidden;

	& .svg1 {
		display: none;
		position: absolute;
		bottom: -100px;
		left: ${({ rtl }) => (rtl ? "unset" : "670px")};
		right: ${({ rtl }) => (rtl ? "670px" : "unset")};
		transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")};
		z-index: -1;
	}
	& .svg2 {
		display: none;
		position: absolute;
		bottom: 0px;
		left: ${({ rtl }) => (rtl ? "-40px" : "unset")};
		right: ${({ rtl }) => (rtl ? "unset" : "-40px")};
		transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")};
		z-index: -1;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		& .svg1,
		& .svg2 {
			display: ${({ lines }) => (lines ? "block" : "none")};
		}
	}
`;
export const EnterpriseHeroContainer = styled(Col)`
	display: flex;
	flex-direction: column;
	//justify-content: center;
	/* align-items: center; */
	width: 90%;
	margin: 3rem 0;
	position: relative;
	padding-bottom: 80px;
	overflow: hidden;
	/* @media screen and (min-width: ${Breakpoints.lg}) {
		& .svg1 {
			position: absolute;
			bottom: -240px;
			left: 360px;
			z-index: -1;
		}
	} */
`;
export const EnterPriseHeroHeading = styled(Heading1)`
	color: var(--Main-Black, #1d1c1d);

	font-size: 4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 4.8rem */
	letter-spacing: -0.12rem;
	text-transform: capitalize;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 2.5rem;
		width: 80%;
		padding-top: 0 !important;
		padding-bottom: 1rem !important;
	}
`;
export const EnterpriseHighLighter = styled(Highlighter)`
	/* font-size: 1.5rem; */
	font-family: Poppins;
	font-weight: 600;
	font-size: 24px;
	leading-trim: Cap height;
	line-height: 130%;
	letter-spacing: -1.5%;
	vertical-align: middle;

	width: fit-content;
	/* margin: auto; */
	padding-block: unset;
	/* text-align: center; */
	background-image: linear-gradient(90deg, #4f29f3, #e50fc3);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-top: 0 !important;
		font-size: 1.25rem;
		/* text-align: center; */
	}
`;
export const EnterpriseHeroCaption = styled(MediumParagraph)`
	color: var(--Gray-3, #42434a);
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 400;
	line-height: 130%; /* 1.4625rem */
	letter-spacing: -0.01125rem;
	@media screen and (min-width: ${Breakpoints.xxl}) {
		width: 90%;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-bottom: 1rem !important;
	}
`;
export const EnterpriseImage = styled(Image)`
	width: 100%;
	border-radius: 24px;
	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 100%;

		height: auto;
	}
`;
