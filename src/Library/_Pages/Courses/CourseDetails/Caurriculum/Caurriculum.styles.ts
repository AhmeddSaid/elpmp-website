"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const CaurriculumShell = styled.div`
	padding: 4rem 3.5rem 3rem;
	border-radius: 1.5rem;
	background: var(--Gray-9, #f4f5f5);
	margin-block: 3rem;
	overflow: hidden;
	background-image: url("/Group 30.png");
	background-repeat: repeat;
	position: relative;
	z-index: 3;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 64px 24px 56px 24px;
		width: calc(100% + 1.5rem);
		margin: 0;
		margin-left: -0.75rem;
		margin-right: -0.75rem;
		border-radius: unset;
		background-image: url("/Group 30.png");
	}
`;

export const CaurriculumContainer = styled.div`
	//border-radius: 0.75rem;
	//border: 0.5px solid var(--Gray-6, #b3b4b7);
	overflow: hidden;
	background: var(--ffffff, #fff);
	border: 0.5px solid var(--Gray-6, #b3b4b7);
	border-radius: 0.75rem;
	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`;

export const CaptionContainer = styled.div<{ open: boolean }>`
	background: var(--ffffff, #fff);
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.25rem;
	align-self: stretch;
	padding: 1rem 1rem 1rem 2rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 1rem;
	}

	cursor: pointer;

	border-bottom: ${({ open }) => (open ? "0.5px solid var(--Gray-6, #b3b4b7)" : "  ")};
	// background: ${({ open }) => (open ? "red" : "  teal")};

	//border: 0.5px solid var(--Gray-6, #b3b4b7);
	//border-top-right-radius: 0.75rem;
`;

export const IndexContainer = styled.div<{ active?: boolean }>`
	border-radius: 50%;
	//background: var(--Gray-8, #efeff0);
	background: ${({ active }) => (active ? "var(--Gray-0, #1D202B)" : " var(--Gray-8, #EFEFF0);")};
	display: flex;
	width: 2.5rem;
	min-width: 2.5rem;
	height: 2.5rem;
	justify-content: center;
	align-items: center;

	color: ${({ active }) => (active ? "var(--ffffff, #FFF)" : "var(--Main-Black, #1D1C1D)")};
`;

export const ChevronContainer = styled.div`
	border-radius: 6.25rem;
	//background: var(--Main-Ice, #eceff4);
	display: flex;
	padding: 0.75rem;
	width: fit-content;
	height: fit-content;
	border: 1px solid var(--Gray-5, #8c8d91);

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 12px;
		align-items: center;
		min-width: 40px;
		height: 40px;
	}
`;

export const BodyContainer = styled.div`
	& #caurrcuilm-divider {
		margin-block: 2rem;
	}

	&:last-child > #caurrcuilm-divider {
		display: none;
	}
	.list {
		list-style-type: disc;
		li {
			list-style-type: disc;
		}
	}
`;

export const BodyText = styled.p`
	color: var(--Main-Black, #1d1c1d);
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%; /* 1.1375rem */
	letter-spacing: -0.00875rem;
`;

export const CurriculmDetailsContainer = styled.div`
	padding: 1.5rem 2rem;
`;
