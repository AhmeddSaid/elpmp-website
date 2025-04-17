"use client";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Grids";

export const WhatNewCardInner = styled.article<{ side?: boolean }>`
	border-radius: 0.5rem;
	background: var(--ffffff, #fff);
	overflow: hidden;
	display: ${({ side }) => (side ? "flex" : "block")};
	height: 100%;

	img {
		object-fit: cover;
		width: 100%;
		height: max-content;
	}
`;
export const WhatNewCardInnerCaption = styled.div`
	padding: 1rem 1.5rem;
`;

export const WhatNewCardSideImg = styled(Image)`
	width: 50%;
	object-fit: cover;

	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 100%;
	}
`;
export const WhatNewCardInnerHeader = styled.div<{ side?: boolean }>`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${({ side }) => (side ? "column" : "row")};
	justify-content: ${({ side }) => (side ? "center" : "space-between")};
	align-items: ${({ side }) => (side ? "start" : "center")};

	:nth-child(1) {
		color: var(--Main-Black, #1d1c1d);
		border-radius: 6.25rem;
		background: var(--Gray-9, #f4f5f5);
		font-size: 0.5625rem;
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
		letter-spacing: 0.01125rem;
		text-transform: uppercase;
		padding: 0.5rem;
		order: 1;
	}

	:nth-child(2) {
		order: ${({ side }) => (side ? "2" : "4")};
		margin-block: ${({ side }) => (side ? "1.25rem 1.25rem" : "1rem 2rem")};
	}

	:nth-child(3) {
		color: var(--Gray-5, #8c8d91);
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
		letter-spacing: 0.00375rem;
		order: 3;
	}
`;
export const WhatNewCardInnerBody = styled.div<{ side?: boolean }>`
	margin-top: ${({ side }) => (side ? "3rem" : null)};

	:nth-child(1) {
		margin-bottom: 0.75rem;
	}
`;
export const WhatNewCardSideContainer = styled(Flexbox)`
	border-radius: 0.5rem;
	overflow: hidden;

	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
	}
`;
