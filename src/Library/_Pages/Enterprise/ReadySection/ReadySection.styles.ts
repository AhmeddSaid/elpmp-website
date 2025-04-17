"use client";

import styled from "styled-components";
import { Breakpoints, Row } from "@/Grids";
import { Heading3 } from "@/Typography";

export const ReadySectionContainer = styled(Row)`
	border-radius: 3rem;
	//padding-block: 10rem 4rem;
	//margin-bottom: 64px;

	@media screen and (min-width: ${Breakpoints.lg}) {
		& button {
			width: 142px;
			height: 54px;
		}
	}
`;

export const HeadingStyle = styled(Heading3)`
	color: var(--ffffff, #fff);

	font-feature-settings: "ss04" on;

	font-size: 3rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%; /* 3.9rem */
	letter-spacing: -0.06rem;
`;

export const CaptionStyle = styled.p`
	color: var(--ffffff, #fff);

	font-size: 1.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 1.875rem */
	letter-spacing: -0.0125rem;
`;

export const ReadySectionOverlay = styled(Row)`
	position: relative;
	//top: 20%;
	z-index: 1;

	@media screen and (max-width: ${Breakpoints.sm}) {
		h2 {
			font-size: 2rem;
			//width: 70%;
			margin: 0 auto 2rem;
		}

		p {
			font-size: 1rem;
			//width: 70%;
			/* margin: 0 auto; */
		}

		.ready-btn-holder {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}

		button {
			margin: 0;
			padding: 1.25rem 2rem;
			height: unset;
			font-weight: 700;
			font-size: 1.25rem;
		}
	}
`;

export const ReadySectionShell = styled.section`
	position: relative;
	overflow: hidden;
	padding: 180px 40px 160px;
	margin-top: 150px;
	background-color: #220891;
	border-radius: 48px;

	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: unset;

		width: 1382px;
		height: 433px;
		border-radius: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg.layout {
		position: absolute;
		top: 50%;
		left: 50%;
		right: 0;
		bottom: 0;
		transform: translate(-50%, -50%) scale(2);
	}
	svg.shape1 {
		position: absolute;
		top: 0;
		left: 0;
	}
	svg.shape2 {
		position: absolute;
		top: 0;
		right: 0;
	}
	svg.shape3 {
		position: absolute;
		bottom: 0;
		left: 0;
	}
	svg.shape4 {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	// .ready-mobile-img {
	// 	display: none;
	// }
	//
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: 100px 232px 54px 225px;
		svg.layout {
			transform: translate(-50%, -50%) scale(1);
		}
	}
	//.ready-desktop-img {
	//	display: none;
	//}
	// 	.ready-mobile-img {
	// 		display: flex;
	// 	}
	// }
`;
