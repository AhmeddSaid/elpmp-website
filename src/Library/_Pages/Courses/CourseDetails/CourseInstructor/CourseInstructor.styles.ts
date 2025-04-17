"use client";

import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";

export const InstructorContanier = styled.div`
	border-radius: 1.5rem;
	background: var(--Gray-9, #f4f5f5);
	padding: 2.75rem 2rem 2.75rem 3rem;
	margin-block: 3rem;
	position: relative;
	z-index: 3;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 24px 32px 24px 40px;
	}
`;
export const InstructorShell = styled(Col)`
	margin: auto;
`;
export const InstructorInfo = styled.div`
	padding: 1.5rem 2rem 1.5rem 2.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1.5rem;
	border: 1px solid var(--Gray-7, #dadadd);
	background: var(--ffffff, #fff);
	& #instructor-img {
		border-radius: 50%;
	}
`;

export const InstructorName = styled.p`
	color: #000;
	text-align: center;

	font-size: 1.375rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	padding-block: 0.88rem 0.19rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		text-align: center;
		font-size: 22px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
	}
`;

export const InstructorPosition = styled.p`
	color: #000;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 130%; /* 18.2px */
`;

export const InstructorCaption = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	align-self: stretch;
	padding-block: 1.75rem;
`;

export const InstructorCaptionText = styled.div`
	color: var(--Gray-4, #60626c);

	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 18px */
	letter-spacing: 0.06px;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%; /* 24px */
		letter-spacing: -0.16px;
	}
`;
