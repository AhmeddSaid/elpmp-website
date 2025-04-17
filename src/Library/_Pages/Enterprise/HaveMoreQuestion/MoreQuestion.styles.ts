"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Display2, Title1 } from "@/Library/Typography/TypographyNew";

export const MoreQuestionContainer = styled.section`
	background: var(--Gray-0, #1d202b);
	color: white;
	padding-top: 2.8rem;
`;
export const MoreQuestionShell = styled.div`
	position: relative;
	margin: auto;
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-direction: row;
	gap: 2rem;
	@media screen and (max-width: ${Breakpoints.xl}) {
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	& .divider {
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;
export const Title = styled(Display2)`
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-family: Poppins;
		font-weight: 600;
		font-size: 48px;
		leading-trim: Cap height;
		line-height: 130%;
		letter-spacing: -2%;
		vertical-align: middle;
		width: 454px;
		height: 96px;
	}
`;
export const Body = styled(Title1)`
	@media screen and (min-width: ${Breakpoints.xl}) {
		text-align: start;

		font-family: Poppins;
		font-weight: 400;
		font-size: 20px;
		line-height: 150%;
		letter-spacing: -1%;
		vertical-align: middle;
		width: 680px;
		height: 90px;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		text-align: center;
	}
`;
export const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 0.5rem;
	& button {
		width: 142px;
		height: 54px;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
`;
