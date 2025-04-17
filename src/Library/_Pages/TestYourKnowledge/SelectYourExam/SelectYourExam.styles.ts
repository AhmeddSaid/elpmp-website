"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const SelectYourExamSection = styled.section`
	//background-image: url("/dots.jpg");
	//background-repeat: no-repeat;
	//background-size: cover;
	//background-position: center;
	padding-block: 250px;
	margin-top: -176px;
	position: relative;
	//z-index: -55;
	background-color: #f4f5f5;
	z-index: -1;
	margin-bottom: -180px;
	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		height: 100%;
		object-fit: cover;
		background-size: cover;
		width: 100%;
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-top: -250px;
	}
`;

export const SelectYourExamHeader = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const SelectYourExamHeaderSubTitle = styled.p`
	color: var(--Gray-4, #60626c);
	text-align: center;
	//padding: 0 152px;
	max-width: 900px;
	margin: auto;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 30px */
	letter-spacing: -0.2px;
`;

export const SelectYourExamCardShell = styled.div`
	display: flex;
	padding: 72px 0 32px 0;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	//gap: 56px;
	min-height: 387px;
	//max-height: 387px;
	height: 387px;
	border-radius: 32px;
	border: 1px solid var(--Gray-7, #dadadd);
	background: var(--ffffff, #fff);
	margin-top: 24px;
`;

export const SelectYourExamFotter = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
`;
