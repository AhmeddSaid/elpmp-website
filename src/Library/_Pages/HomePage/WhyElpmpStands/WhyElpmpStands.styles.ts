"use client";

import styled from "styled-components";
import { Breakpoints, Col, Flexbox, Row, Section } from "@/Grids";
import { Display1 } from "@/Library/Typography/TypographyNew";

export const WhyElpmpSection = styled(Section)`
	overflow: hidden;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-top: 18rem !important;
	}
`;
export const WhyElpmpHeader = styled(Display1)`
	max-width: 50rem;
	text-align: center;
	font-size: 4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 4.8rem */
	letter-spacing: -0.12rem;
	text-transform: none;
	margin: auto;
	margin-block: 1.5rem 3rem;

	background: linear-gradient(180deg, #1d1c1d 0%, #3f434d 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 90%;
		font-size: 2rem;
	}
`;
export const SubTitleHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const HeaderParagraph = styled.p`
	max-width: 57.5rem;
	color: var(--Gray-4, #60626c);
	text-align: center;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: -0.0125rem;
	margin: auto;
	margin-bottom: 5.5rem;
`;
export const TableFirstCol = styled(Col)`
	padding-top: 12.62rem;
	padding-inline-end: 3rem;
`;
export const TableFirstInner = styled.div`
	ul {
		padding-bottom: 3.75rem;

		li:not(:first-child) {
			padding: 1rem 0.5rem;
			border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
			display: flex;
			align-items: center;
			height: 70px;
		}

		li:first-child {
			padding: 0.5rem;
		}
	}
`;

export const TableSecondCol = styled(Col)<{ grayHighLight?: boolean }>`
	border-radius: 0.5rem;
	border: 1px solid var(--Gray-7, #dadadd);
	padding-inline: 1.5rem;

	background: ${({ grayHighLight }) => grayHighLight && "var(--Gray-9, #F4F5F5)"};
`;
export const TableSecondInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	ul {
		width: 100%;
		padding-bottom: 6.4rem;

		li {
			padding: 1rem 0.5rem;
			border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
			width: 100%;
			height: 70px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		:first-child {
			margin: auto;
		}
	}
`;

export const ElpmpLogo = styled.div`
	margin-top: 2.5rem;
	margin-bottom: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: row;
		margin-top: unset;
		margin-bottom: unset;
		gap: unset;
		svg {
			width: 40px;
			height: fit-content;
		}
	}
`;

export const TableThirdCol = styled(Col)`
	padding-top: 8rem;
	padding-inline: 1.5rem;
`;
export const TableThirdInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		margin-bottom: 4rem;
	}

	ul {
		width: 100%;
		padding-bottom: 6.4rem;

		li {
			padding: 1rem 0.5rem;
			border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
			width: 100%;
			height: 70px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		:first-child {
			margin: auto;
		}
	}
`;

export const TableLastCol = styled(Col)`
	padding-top: 14.875rem;
`;

export const TableLastInner = styled.div`
	ul {
		padding-bottom: 6.4rem;

		li {
			padding: 1rem 0.5rem;
			border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
			display: flex;
			height: 70px;
			align-items: center;
		}
	}
`;

export const ExpandAllInner = styled(Flexbox)`
	position: relative;
	cursor: pointer;

	p {
		color: var(--Main-Indigo, #4f29f3);
		font-family: Poppins;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: 150%;
		letter-spacing: -0.0225rem;
	}

	:before {
		content: "";
		width: 29.53125rem;
		height: 0.03125rem;
		background: #b3b4b7;
		position: absolute;
		z-index: 1;
		right: calc(100% + 1.5rem);
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}

	:after {
		content: "";
		width: 29.53125rem;
		height: 0.03125rem;
		background: #b3b4b7;
		position: absolute;
		z-index: 1;
		left: calc(100% + 1.5rem);
		top: 50%;
		transform: translateY(-50%);
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		overflow: hidden;

		:before {
			width: 100%;
		}

		:after {
			width: 100%;
		}
	}
`;
export const TableContainer = styled(Col)`
	position: relative;
`;
export const TableContainerInner = styled(Row)<{ Expand: boolean }>`
	height: ${({ Expand }) => (Expand ? "28.375rem" : "100%")};
	overflow: hidden;
	transition: height 0.3s ease-in-out;
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;
export const ExpandAllContainer = styled(Flexbox)<{ Expand: boolean }>`
	position: ${({ Expand }) => (Expand ? "absolute" : "static")}; //absolute;
	background: ${({ Expand }) =>
		Expand ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 59.5%, #fff 100%)" : "transparent"};
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;

// Mobile Table
export const MobileTable = styled.div`
	width: 90%;
	margin: auto;
	display: none;
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: block;
	}
`;
export const TabsContainer = styled.div`
	width: 100%;
	display: none;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	position: relative;
	z-index: 9;

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: flex;
	}
`;
export const Tab = styled.div<{ isActive: boolean; first?: boolean }>`
	border: 1px solid;
	border-color: ${({ isActive }) => (isActive ? "#4F29F3" : "#b3b4b7")};
	border-radius: 0.5rem;
	background-color: ${({ isActive }) => (isActive ? "#EFEFF0" : "transparent")};
	padding: ${({ first }) => (first ? "unset" : "1.25rem 2rem")};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 300ms;
	font-size: 1.125rem;
	font-weight: 600;
	color: #1d1c1d;
	height: 56px;
`;
export const TableTitle = styled.div`
	font-size: 1.125rem;
	font-weight: 600;
	color: #1d1c1d;
	width: 100%;
	margin: 2rem 0;
`;
export const Cell = styled.div`
	display: flex;
	align-items: center;
`;
export const CellName = styled.div`
	height: 3.75rem;
	width: 60%;
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: 400;
	color: #60626c;
	border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
	border-right: 0.5px solid var(--Gray-6, #b3b4b7);
`;
export const CellCheck = styled.div`
	height: 3.75rem;
	width: 40%;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
	justify-content: center;
`;
