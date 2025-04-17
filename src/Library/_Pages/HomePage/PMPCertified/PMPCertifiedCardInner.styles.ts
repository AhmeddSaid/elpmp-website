"use client";

import styled from "styled-components";

export const PMPCertifiedColInner = styled.div<{
	marginTop?: number;
	marginBottom?: number;
	HeadingColor?: string;
	HeadingWidth?: number;
	overlay?: boolean;
}>`
	height: 100%;
	border-radius: 1.5rem;
	overflow: hidden;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
		pointer-events: none;
		background: ${({ overlay }) => (overlay ? "#df066780" : "transparent")};
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
	}
	h1 {
		max-width: ${({ HeadingWidth }) => HeadingWidth}rem;
		display: inline-block;
		margin-top: ${({ marginTop }) => marginTop}rem;
		margin-inline-start: 2.5rem;
		margin-bottom: ${({ marginBottom }) => marginBottom}rem;
		position: relative;
		z-index: 2;
		span {
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 130%;
			letter-spacing: -0.04rem;
			text-transform: capitalize;
		}
		:nth-child(1) {
			color: ${({ HeadingColor }) =>
				HeadingColor}; //var(--Main-Yellow, var(--Main-Yellow, #ffd555));
		}
		:nth-child(2) {
			color: var(--ffffff, #fff);
		}
	}
`;
