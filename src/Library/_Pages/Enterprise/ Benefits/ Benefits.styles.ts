"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Display2, Heading2 } from "@/Library/Typography/TypographyNew";

export const BenefitsCaption = styled.div`
	position: sticky;
	top: 30%;
`;
export const Title = styled.div`
	font-family: Poppins;
	font-weight: 600;
	font-size: 24px;
	leading-trim: Cap height;
	line-height: 130%;
	letter-spacing: -1.5%;
	vertical-align: middle;
	color: #4f29f3;
`;
export const BenefitHead = styled(Display2)`
	@media screen and (min-width: ${Breakpoints.xxl}) {
		font-family: Poppins;
		font-weight: 600;
		font-size: 48px;
		leading-trim: Cap height;
		line-height: 130%;
		letter-spacing: -2%;
		vertical-align: middle;
		width: 622px;
	}
`;
export const BenefitBody = styled(Heading2)`
	@media screen and (min-width: ${Breakpoints.xxl}) {
		font-family: Poppins;
		font-weight: 500;
		font-size: 24px;
		leading-trim: Cap height;
		line-height: 150%;
		letter-spacing: -1.5%;
		vertical-align: middle;
	}
`;
