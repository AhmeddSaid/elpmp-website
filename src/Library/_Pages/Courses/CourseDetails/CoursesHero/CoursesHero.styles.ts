"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox, Section } from "@/Grids";
import { Body, Title4 } from "@/Library/Typography/TypographyNew";

export const HeroSection = styled(Section)`
	padding-right: unset;
	padding-left: unset;
	@media screen and (max-width: ${Breakpoints.sm}) {
		overflow: hidden;
	}
	@media screen and (min-width: ${Breakpoints.xxl}) {
		max-width: 1200px !important;
	}
`;
export const HeroCardContainer = styled.div`
	display: none;

	@media screen and (max-width: ${Breakpoints.xl}) {
		display: block;
	}
`;
export const CourseContainerShell = styled.div`
	background: #292729;
	padding-block: 4.75rem 3.88rem;
	position: relative;
	@media screen and (min-width: ${Breakpoints.sm}) {
		margin-inline: -100vw;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-block: 2rem 1rem;
	}
`;

export const CourseShell = styled.section`
	//background: var(--Main-Black, #1d1c1d);
	color: white;
	padding-inline: 1rem;
	//padding-block: 2.75rem 3.88rem;
	margin-bottom: 2rem;
	z-index: 5;
	position: relative;
`;

export const CourseContainer = styled.div`
	border-radius: 2.5rem;
	//background: #292729;
	//padding-inline: 1rem;
	z-index: 1;
	width: 100%;

	p {
		color: white;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		display: none;
	}

	//padding: 5rem 35.4375rem 3.5rem 8rem;
`;

export const RatingInfo = styled(Flexbox)`
	border-top: 1px solid var(--Gray-3, #42434a);
	border-bottom: 1px solid var(--Gray-3, #42434a);
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25) inset;
	width: 44.75rem;
`;

export const BgGrayDiv = styled.div`
	background-color: #1d1c1d;
	background-image: url("/courses-pattern.svg");
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 2.5rem;
	width: calc(100dvw - 4rem);
	position: relative;
	//height: 33rem;
	//position: absolute;
	//z-index: 0;
	//left: 1.5rem;
	/* right: 1.5rem; */
	margin: 0 auto;
	overflow: hidden;
	z-index: 3;
	&::before {
		content: "";
		background: linear-gradient(90deg, rgba(29, 28, 29, 0.9) 10.7%, rgba(29, 28, 29, 0) 73.09%);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	@media screen and (min-width: ${Breakpoints.xxl}) {
		width: calc(100dvw - 10rem);
		padding: 0 3rem;
	}
	@media screen and (max-width: ${Breakpoints.xxl}) {
		/* width: calc(100dvw - 10rem); */
		padding: 0 3rem;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		margin-top: 36px;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		background: transparent;
		width: calc(100dvw - 1rem);
	}
`;

export const TotalRating = styled(Body)<{ underline?: boolean }>`
	opacity: 0.7;
	text-decoration: none;
	color: white;
	text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
	&.totalRating {
		//color: var(--ffffff, #fff);
		opacity: 1;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		color: black;
	}
`;

export const OpacityTitle = styled(Title4)`
	opacity: 0.7;
`;

export const HeroInstructorName = styled.p`
	//color: var(--ffffff, #fff);

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 130%; /* 1.1375rem */
	letter-spacing: -0.00875rem;
	text-decoration-line: underline;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-block: 12px;
	}
`;

export const ColoufullSpan = styled.span`
	background: var(--Gradiant-1, linear-gradient(90deg, #4f29f3 0.01%, #e50fc3 102.78%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.04rem;
	text-transform: capitalize;
`;

export const CoursesHeroSection = styled(Section)`
	@media screen and (min-width: ${Breakpoints.xxl}) and (max-width: 1520px) {
		max-width: 1200px !important;
	}
`;
