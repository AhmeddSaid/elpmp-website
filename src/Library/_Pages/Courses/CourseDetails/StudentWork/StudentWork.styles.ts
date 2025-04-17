"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Title4 } from "@/Library/Typography/TypographyNew";

export const StudentWorkContainer = styled.div`
	padding-block: 0rem 3rem;
	//border-top: 0.5px solid var(--Gray-6, #b3b4b7);
	//border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
	background: var(--ffffff, #fff);
	margin: 3rem 0;

	@media screen and (max-width: ${Breakpoints.sm}) {
		.student-work-heading {
			text-align: center;
			font-size: 2rem;
		}
	}
`;

export const StudentCaption = styled(Title4)`
	padding-block: 2rem 1.5rem;
	text-align: center;
`;

export const ArrowRightStudentWorkIcon = styled.div<Locale>`
	border-radius: 6.25rem;

	background: var(--Gray-9, #f4f5f5);

	padding: 0.75rem;

	position: absolute;

	top: 0;
	right: ${({ locale }) => (locale === "en" ? "0" : "unset")};
	left: ${({ locale }) => (locale !== "en" ? "0" : "unset")};

	transform: rotateX(25%);

	@media screen and (max-width: ${Breakpoints.sm}) {
		top: 100%;
		left: 55%;
		width: 80px;
		height: 56px;
		padding: 12px;

		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid var(--Gray-4, #60626c);
		background: white;
	}
`;

export const ArrowLeftStudentWorkIcon = styled.div<Locale>`
	border-radius: 6.25rem;

	background: var(--Gray-9, #f4f5f5);

	padding: 0.75rem;

	position: absolute;
	top: 0;
	right: ${({ locale }) => (locale === "en" ? "50px" : "unset")};
	left: ${({ locale }) => (locale !== "en" ? "50px" : "unset")};

	@media screen and (max-width: ${Breakpoints.sm}) {
		top: 100%;
		left: 25%;

		width: 80px;
		height: 56px;
		padding: 12px;

		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid var(--Gray-4, #60626c);
		background: white;
	}
`;
