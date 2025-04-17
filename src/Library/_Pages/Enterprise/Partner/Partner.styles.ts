"use client";

import styled from "styled-components";
import { Breakpoints, Row } from "@/Grids";

export const PartnerContainer = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	height: 100%;
`;
export const LogosContainer = styled(Row)`
	flex-wrap: wrap;
`;
export const PartnerLogo = styled.div`
	//width: 16.625rem;
	//height: 7.25rem;
	padding: 8px 8px;

	border-radius: 0.5rem;
	background: var(--Gray-8, #efeff0);
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 266px; */
	height: 116px;
	overflow: hidden;
	position: relative;
	& img {
		width: 90%;
		height: auto;
		/* object-fit: cover; */
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding: 2.375rem 2.78125rem 2.375rem 2.8125rem;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: 2.375rem 1rem 2.375rem 1rem;
	}
`;

export const PartnerTittle = styled.p`
	background: linear-gradient(90deg, #4f29f3 36.42%, #e50fc3 63.71%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 140%;
	letter-spacing: -0.0125rem;
`;

export const PartnerCaption = styled.p`
	color: var(--Main-Black, #1d1c1d);
	//leading-trim: both;
	//text-edge: cap;

	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: -0.01rem;

	width: 75%;
`;

export const PartnerShell = styled.div`
	border-radius: 1.5rem;
	background: var(--Gray-9, #f4f5f5);
	padding: 4rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 1rem;
	}
`;
