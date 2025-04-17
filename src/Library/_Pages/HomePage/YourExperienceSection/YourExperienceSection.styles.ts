"use client";
import styled from "styled-components";
import { Breakpoints, Row } from "@/Grids";
import { Display2, Heading2 } from "@/Library/Typography/TypographyNew";

export const YourExperience = styled.section<{ rtl?: boolean }>`
	//background-image: url("/Vector1234.svg");
	//background-repeat: no-repeat;
	//background-position: center;
	//background-size: 100% 100%;
	padding-block: 17.5rem 14.34rem;
	/* padding: 17.5rem 14.34rem 10rem; */
	position: relative;
	// @media screen and (max-width: ${Breakpoints.lg}) {
	// 	background-image: url("/Frame777.svg");
	// 	background-position: center center;
	// 	background-size: 100% 100%;
	// 	background-color: cadetblue;
	// }

	margin-top: ${({ rtl }) => (rtl ? "4rem" : "0")};

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
		transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")};
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		background-color: var(--Main-Indigo, #4f29f3);
		margin-top: 4rem;
		padding-block: unset;
		padding-top: 160px;
		margin-bottom: 2rem;
		&::before {
			content: "";
			position: absolute;
			top: -2px;
			left: 0;
			width: 100%;
			height: 120px;
			background-image: url("/svg-two.svg");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
		&::after {
			content: "";
			position: absolute;
			border-bottom-right-radius: 0;
			left: -1px;
			bottom: -119px;
			width: 100%;
			height: 120px;
			background-image: url("/svg-three.svg");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
		img {
			display: none;
		}
	}
`;

export const YourExperienceTitle = styled(Heading2)`
	color: #c7bbfb !important;
	text-align: center;
`;
export const YourExperienceHeading = styled(Display2)`
	color: #fff !important;
	text-align: center;
	font-feature-settings: "ss04" on;
	max-width: 56rem;
	margin: auto;
	margin-block: 2.5rem 5.5rem;
`;
export const YourExperienceContainerCard = styled(Row)``;
