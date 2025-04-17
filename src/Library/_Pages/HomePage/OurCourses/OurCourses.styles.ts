"use client";
import styled from "styled-components";
import { Breakpoints, Row, Section } from "@/Grids";
import { Display1 } from "@/Library/Typography/TypographyNew";

export const OurCoursesSection = styled.section`
	padding-block: 15.31rem 10.06rem;
	margin-top: -138.5px;
	position: relative;
	z-index: -2;
	object-fit: cover;
	background: url("/dots-bg.svg");
	background-size: cover;
	background-position: 0 -198px;
	overflow: hidden;
	&::before {
		content: "";
		position: absolute;
		width: 90rem;
		height: 90rem;
		top: 160px;
		left: 50%;
		border-radius: 50%;
		z-index: -1;
		transform: translate(-50%, 0);
		background: radial-gradient(
			#f4f5f5 0%,
			rgba(244, 245, 245, 0.5) 55%,
			rgba(255, 255, 255, 0.3) 70%
		);
		backdrop-filter: blur(1px);
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		background-size: 100%;
		background-position: center;
		background-repeat: repeat;
		&::before {
			opacity: 0.5;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		background-size: 200%;
		background-position: center;
		background-repeat: repeat;
	}
`;
export const CourseList = styled(Row)`
	&:first-child {
		height: 100%;
	}

	@media screen and (min-width: ${Breakpoints.md}) and (max-width: ${Breakpoints.xl}) {
		justify-content: center;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		gap: 2rem;
	}
`;

export const OurCoursesSectionInner = styled(Section)`
	// background: radial-gradient(
	// 	70.26% 70.26% at 50% 50%,
	// 	#f4f5f5 0%,
	// 	rgba(244, 245, 245, 0.8) 67.74%,
	// 	rgba(244, 245, 245, 0.5) 77.58%
	// );
	//
	// @media screen and (max-width: ${Breakpoints.sm}) {
	// 	background: radial-gradient(
	// 		circle,
	// 		#f4f5f5 0%,
	// 		rgba(244, 245, 245, 0.8) 75%,
	// 		rgba(244, 245, 245, 0.5) 90%,
	// 		transparent 100%
	// 	);
	// }
`;

export const OurCoursesHeader = styled(Display1)<{ rtl?: boolean }>`
	text-align: center;
	background: var(--Gradiant-2, linear-gradient(180deg, #1d1c1d 0%, #3f434d 100%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	max-width: 49.6875rem;
	margin-inline: auto;
	margin-top: 2.5rem;
	/* height: 9.5rem; */
	/* height: 200px; */
	line-height: ${({ rtl }) => (rtl ? "1.5" : "120%")};
	/* border: 1px solid red; */
	/* display: flex;
	justify-content: center;
	align-items: center; */
	padding: 2px;
`;
