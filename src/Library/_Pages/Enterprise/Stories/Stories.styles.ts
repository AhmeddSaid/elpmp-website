"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Highlighter } from "@/Typography";

export const StoriesShell = styled.div`
	@media screen and (min-width: ${Breakpoints.xl}) {
		margin-top: 10rem;
	}
`;
export const StoriesContanier = styled.div`
	text-align: center;
`;
export const Title = styled(Highlighter)`
	font-family: Poppins;
	font-weight: 600;
	font-size: 24px;
	leading-trim: Cap height;
	line-height: 130%;
	letter-spacing: -1.5%;
	text-align: center;
	vertical-align: middle;
`;
export const Btn = styled.button`
	/* padding: 0.25rem; */
	background-color: transparent;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: var(--transation);

	&:not(:last-child) {
		margin-inline-end: 0.5rem;
	}

	&.active {
		&.white {
			border: 1px solid #ffffff;

			& span {
				background-color: #ffffff;
			}
		}

		//border: 1px solid #007394;
		transition: var(--transation);

		& span {
			background-color: #60626c;
			transition: var(--transation);
		}
	}

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 767px) {
		display: none;
	}
`;

export const DotStyle = styled.span`
	background-color: #dadadd;
	border-radius: 50%;
	width: 6px;
	height: 6px;
	display: inline-block;
	transition: var(--transation);

	&.white {
		background-color: rgba(255, 255, 255, 0.4);
	}
`;
