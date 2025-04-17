"use client";

import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";
import { Heading1 } from "@/Typography";

export const EffectiveHeading = styled(Heading1)`
	text-align: center;

	font-size: 4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: -0.12rem;
	text-transform: capitalize;
	//padding-inline: 16.5rem;
	max-width: 57rem;
	margin: auto;

	background: linear-gradient(180deg, #1d1c1d 0%, #3f434d 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 2rem;
	}
`;

export const EffectiveProjectShell = styled.section`
	padding-top: 120px;
	padding-bottom: 107px;
	background: linear-gradient(180deg, #fff 0%, #efeff0 100%);
`;
export const ProjectCard = styled(Col)`
	margin-bottom: 2rem;
	@media screen and (min-width: ${Breakpoints.lg}) {
		width: 333px;
		height: 365px;
		border-radius: 24px;
	}

	// @media screen and (min-width: ${Breakpoints.sm}) {
	//     margin-bottom: 2rem;
	// }
`;

export const CardHeadingIcon = styled.div`
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 38.4px */
	letter-spacing: -0.48px;
	position: relative;
	background: var(--Gradiant-3, linear-gradient(180deg, #fff 0%, #8c85ad 100%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
