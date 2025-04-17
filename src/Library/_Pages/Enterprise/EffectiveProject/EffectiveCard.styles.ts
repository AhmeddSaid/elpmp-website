"use client";

import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
	border-radius: 1.5rem;
	background: linear-gradient(180deg, #1c0779 0%, #110448 100%);

	padding: 70px 48px 60px 48px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	overflow: hidden;
	height: 100%;

	& #number {
		z-index: 1;
	}

	&.CardBG {
		position: absolute;

		top: 15px !important;
	}
`;

export const BgImage = styled(Image)`
	position: absolute;
	top: 1rem;
	//right: 1.37rem;
	left: 0;
`;

export const CardHeading = styled.h1`
	font-size: 5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 6rem */
	letter-spacing: -0.15rem;
	text-transform: capitalize;
	background: var(--Gradiant-3, linear-gradient(180deg, #fff 0%, #8c85ad 100%));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const CardSubHeading = styled.p`
	color: var(--ffffff, #fff);

	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 130%; /* 1.3rem */
	letter-spacing: -0.01rem;

	padding-block: 1.7rem 3rem;
`;

export const CardBody = styled.p`
	color: var(--Gray-6, #b3b4b7);

	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 1.125rem */
`;
