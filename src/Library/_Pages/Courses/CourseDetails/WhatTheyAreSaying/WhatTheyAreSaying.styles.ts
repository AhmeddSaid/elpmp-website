"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Body } from "@/Library/Typography/TypographyNew";

export const WhatTheyAreSayingShell = styled.div`
	@media screen and (max-width: ${Breakpoints.sm}) {
		& .CarouselRating {
			padding-top: 60px;
		}
	}
`;

export const WhatTheyAreSayingHeader = styled.div`
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin: auto;
	}
`;

export const WhatTheyAreSayingCaption = styled(Body)`
	color: var(--Gray-3, #42434a) !important;
	//padding-top: 0.5rem;
`;

export const ArrowLeftIcon = styled.button`
	border-radius: 6.25rem;
	background: var(--Gray-9, #f4f5f5);
	padding: 0.75rem;

	position: absolute;
	top: 0;
	right: 48px;

	@media screen and (max-width: ${Breakpoints.sm}) {
		top: 60px;
		width: 80px;
		height: 56px;
		padding: 12px;
		right: 95px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid var(--Gray-4, #60626c);
		background: white;
		margin-top: 40px;
	}
`;
export const ArrowRightIcon = styled.button`
	border-radius: 6.25rem;
	background: var(--Gray-9, #f4f5f5);
	padding: 0.75rem;
	position: absolute;
	top: 0;
	right: 0;

	@media screen and (max-width: ${Breakpoints.sm}) {
		top: 60px;
		width: 80px;
		height: 56px;
		padding: 12px;

		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid var(--Gray-4, #60626c);
		background: white;
		margin-top: 40px;
	}
`;
