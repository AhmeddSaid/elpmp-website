"use client";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";

export const WhatNewSection = styled.section`
	padding: 7.44rem 8.88rem 6rem;
	background: var(--Gray-9, #f4f5f5);

	@media screen and (max-width: ${Breakpoints.lg}) {
		padding: 2rem;
	}
`;
export const CardHolder = styled(Col)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 2rem;
	}
`;
export const WhatNewHeader = styled.div`
	max-width: fit-content;
	margin: auto;
	text-align: center;

	:nth-child(1) {
		background: var(--Gradiant-1, linear-gradient(90deg, #4f29f3 0.01%, #e50fc3 102.78%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	:nth-child(2) {
		margin-block: 2rem;
	}

	:nth-child(3) {
		max-width: 42.8125rem;
		margin: auto;
	}
`;
