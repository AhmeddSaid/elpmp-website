"use client";
import Link from "next/link";
import styled from "styled-components";
import { Breakpoints, Col, Flexbox, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Display1, Title2, Title4 } from "@/Library/Typography/TypographyNew";
import { BigParagraph } from "@/Typography";

export const HeroHomeSection = styled.section`
	padding-block: 6.75rem 9.13rem;
	position: relative;
	z-index: 100;
	margin-bottom: 100px;
	@media screen and (max-width: ${Breakpoints.lg}) {
		padding-top: 6rem;
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		margin-bottom: 8rem;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-top: 2.5rem;
		/* width: 95%; */
		margin-bottom: 10rem;
	}
`;
export const HeroHomeMainContainer = styled(Section)`
	@media screen and (min-width: 992px) and (max-width: 1200px) {
		max-width: 95% !important;
	}
`;
export const HeroHomeSectionInner = styled(Row)`
	align-items: start;
	border-radius: 3rem;
	border: 4px solid var(--Indigo-70, #886ef7);
	background: var(--ffffff, #fff);
	position: relative;
`;
export const HeroHomeSectionHeader = styled(Col)`
	margin-top: 8.69rem;
	display: flex;
	align-items: end;
	gap: 8px;
	justify-content: center;
	@media screen and (min-width: ${Breakpoints.lg}) and (max-width: ${Breakpoints.xl}) {
		p {
			font-size: 6rem !important;
		}
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-top: 1rem;
		padding-inline-start: 0;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-top: 1rem;
	}

	p {
		color: var(--Main-Black, #1d1c1d);
		font-size: 8rem;
		font-style: normal;
		font-weight: 700;
		line-height: 110%;
		letter-spacing: -0.16rem;
		transition: all 0.3s ease-in-out;
		@media screen and (max-width: ${Breakpoints.lg}) {
			font-size: 3.5rem;
			letter-spacing: -0.135rem;
			margin-top: 4.69rem;
			padding-inline-start: 0;
			text-align: center;
		}
		@media screen and (max-width: ${Breakpoints.sm}) {
			text-align: center;
		}
	}

	span {
		padding-bottom: 1.5rem;
		@media screen and (max-width: ${Breakpoints.lg}) {
			padding-bottom: 1rem;
		}

		svg {
			@media screen and (max-width: ${Breakpoints.lg}) {
				width: 16px;
				height: 16px;
			}
		}
	}
`;

export const HeroHomeSectionCaption = styled(Col)``;
export const CaptionHeader = styled(Display1)`
	color: var(--Main-Black, #1d1c1d);
	font-size: 64px;
	font-weight: 600;
	margin-block-start: 8.87rem;
	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
		margin-block-start: 5.75rem;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		text-align: center;
		margin-block-start: 1rem;
		font-size: 2rem;
	}
`;
export const CaptionBody = styled(Title2)`
	color: var(--Gray-2, #37383f);
	letter-spacing: -0.0225rem;
	margin-block: 1.81rem 3.12rem;
	max-width: 30rem;

	@media screen and (min-width: ${Breakpoints.lg}) {
		font-family: Poppins;
		font-weight: 400;
		font-size: 24px;
		leading-trim: Cap height;
		line-height: 150%;
		letter-spacing: -1.5%;
		vertical-align: middle;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
		margin-block: 2.19rem 2.75rem;
		margin-inline: auto;
	}
`;
export const HomeHeroSectionButton = styled(Link)<{ rtl?: boolean }>`
	margin-block-end: ${({ rtl }) => (rtl ? "0" : "8.19rem")};
	border-radius: 6.25rem;
	background: var(--Main-Indigo, #4f29f3);
	color: var(--ffffff, #fff);
	position: relative;
	z-index: 9;
	cursor: pointer;

	width: 239px;
	height: 61px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-block-end: 12.44rem;
		width: 100%;
	}
`;
export const BrandContainer = styled(Flexbox)<Locale>`
	width: 42.0625rem;
	/* max-height: 8.125rem; */
	/* max-width: fit-content; */
	/* padding: 1.25rem 2.5rem 1.75rem 2.5rem; */
	border-radius: 62.5rem;
	box-shadow: 0 0 0 4px var(--Indigo-70, #886ef7);
	//border: 4px solid var(--Indigo-70, #886ef7);
	background: var(--Indigo-97, #f3f1fe);
	transform: translateY(50%);
	flex-wrap: wrap;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	left: ${({ locale }) => (locale === "en" ? "" : "3.94rem")};
	right: ${({ locale }) => (locale === "en" ? "3.94rem" : "")};

	border-radius: 62.5rem;
	border-width: 0.25rem;
	padding: 1rem;
	/* gap: 0.5rem; */
	flex-direction: column;
	flex-wrap: nowrap;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-bottom: -4rem;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		width: max-content;
		padding: 2rem 2.5rem 1.75rem 2.5rem;
		border-radius: 3rem;
		gap: 1rem;
		right: 0;
		left: 0;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		/* height: 140px; */

		max-width: 49rem;
		width: fit-content;
		max-height: 8.125rem;
	}
`;
export const BrandContainerPragraph = styled(Title4)`
	margin-block-end: 0.5rem;
	text-align: center;
`;
export const ImageHolder = styled.div<{ rtl?: boolean }>`
	display: none;
	position: relative;
	width: 27.625rem;
	height: 36.25rem;
	margin-top: ${({ rtl }) => (rtl ? "-420px" : "-660px")};
	/* margin-bottom: ${({ rtl }) => (rtl ? "10rem" : "unset")}; */
	@media screen and (min-width: ${Breakpoints.lg}) {
		display: block;
	}
`;
export const HeroSVG = styled.div<{ rtl?: boolean }>`
	position: absolute;
	/* right: -120px; */
	/* top: -80px; */
	top: 250px;
	right: ${({ rtl }) => (rtl ? "unset" : "-200px")};
	left: ${({ rtl }) => (rtl ? "-200px" : "unset")};
	transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")};
	z-index: 1;
	&::before {
		content: "";
		width: 160px;
		height: 160px;
		background-color: rgb(255, 255, 255);
		position: absolute;
		top: 1.3rem;
		left: ${({ rtl }) => (rtl ? "0" : "-8px")};
		border-radius: 0 3rem 0 0;
		/* left: -20px; */
		/* z-index: -1; */
	}
	@media screen and (max-width: ${Breakpoints.xxl}) {
		display: none;
	}
`;
export const HeroHomeCard = styled.div<Locale>`
	width: 26.375rem;
	height: 36.25rem;
	padding: 1.875rem 2rem 2rem 2.5rem;
	border-radius: 3rem;
	background: var(--Indigo-86, #c7bbfb);
	margin-inline-start: 4rem;
	transform: translateY(17.6rem);
	position: absolute;
	left: ${({ locale }) => (locale === "en" ? "0" : "")};
	right: ${({ locale }) => (locale !== "en" ? "" : "0")};
	bottom: 0;
	/* border: 14px solid #ffffff; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1.875rem;
	z-index: 5;
	img {
		width: 100%;
	}

	@media screen and (max-width: ${Breakpoints.xxl}) {
		display: none;
	}
`;

export const BrandIconContainer = styled(Flexbox)`
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
	user-select: none;
	img {
		width: auto;
		/* height: 32px; */
	}
	& img,
	& svg {
		filter: saturate(0) opacity(0.8);
		pointer-events: none;
		transform: scale(0.85);
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const HeroHomeCardTitle = styled(BigParagraph)`
	padding-block: 1rem;
	padding-inline: 0.5rem;
	/* margin-block-end: .94rem; */
	border-block: 2px solid var(--Indigo-30, #220891);
	text-align: center;
	color: var(--Indigo-30, #220891);
	text-transform: uppercase;
	width: 100%;
`;
export const HeroHomeCardImage = styled.div`
	border-radius: 1.75rem;
	//background: url(<path-to-image>) lightgray 50% / cover no-repeat;
	box-shadow: 0 0 0 4px #9747ff;
	overflow: hidden;
	/* min-width: 352px;
	min-height: 421px; */
`;
