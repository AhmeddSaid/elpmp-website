"use client";

import styled from "styled-components";
import Button from "@/Components/UI/Button/Button";
import { Breakpoints, Section } from "@/Grids";

export const CoursesHeaderShell = styled.section<{ hidden: boolean }>`
	display: ${({ hidden }) => (hidden ? "none" : "")};
	position: ${({ hidden }) => (hidden ? "" : "fixed")};
	// opacity: ${({ hidden }) => (hidden ? "0" : "1")};
	//opacity: 0.98;
	z-index: 10111100;
	overflow: hidden;
	top: 0;
	left: 0;
	right: 0;

	transition: all 2s ease-in-out;

	border-radius: 0 0 24px 24px;
	background: rgb(255, 255, 255);
	box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(10px);

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;

export const CoursesHeaderContainer = styled(Section)`
	padding-block: 1rem;
	padding-inline: 4rem;

	a {
		color: var(--Gray-4, #60626c);
		font-size: 0.8125rem;
		font-style: normal;
		font-weight: 500;
		line-height: 100%; /* 0.8125rem */
		letter-spacing: -0.00406rem;
	}
`;
export const EnrollBtn = styled(Button)`
	display: flex;
	width: 177px;
	height: 56px !important;
	padding: 8px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	background: var(--Main-Indigo, #4f29f3);
	color: var(--ffffff, #fff);
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 100%; /* 16px */
	letter-spacing: -0.08px;
`;
