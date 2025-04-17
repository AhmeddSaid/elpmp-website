"use client";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";

export const ElevateTeams = styled.section`
	padding-block: 6.9375rem;
	margin-top: 8rem;
	position: relative;
	background-color: #f4f5f5;
`;
export const ElevateTeamsContainer = styled(Col)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		.elevate-col {
			flex: unset;
		}
	}
`;

export const ElevateTeamsContainerInner = styled.div`
	border-radius: 3rem;
	background: var(--Main-Indigo, #4f29f3);
	margin: auto;
	padding-inline: 3.5rem;
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 15.25rem;
	position: relative;
	overflow: hidden;
	@media screen and (min-width: ${Breakpoints.lg}) {
		&::before {
			content: "";
			position: absolute;
			height: 1px;
			width: 100%;
			background-color: rgba(255, 255, 255, 0.7);
			top: 77px;
			left: 0;
			z-index: 2;
		}
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		padding-bottom: 10rem;
		padding-inline: 1rem;
	}
`;

export const ElevateTeamsTitle = styled.span`
	display: inline-block;
	margin-block: 4.56rem 6.37rem;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-block: 4rem;
	}

	p {
		color: #fff;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
		letter-spacing: 0.0225rem;
		text-transform: uppercase;
		background: var(--Main-Indigo, #4f29f3);
		z-index: 4;
		position: relative;
		padding: 0 24px;
	}
`;
export const StartCol = styled(Col)`
	div {
		p {
			color: var(--ffffff, #fff);
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 130%;
			letter-spacing: -0.04rem;
			text-transform: capitalize;
		}

		button {
			color: var(--Main-Indigo, #4f29f3);
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 500;
			line-height: 100%;
			letter-spacing: -0.00438rem;
			border-radius: 6.25rem;
			border: 1.5px solid var(--Main-Indigo, #4f29f3);
			background: var(--Main-Pink, #fda9ce);
			padding: 1.25rem 2rem;
			margin-top: 3rem;
		}
	}
`;

export const EndCol = styled(Col)`
	p {
		color: var(--Gray-8, #efeff0);
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 500;
		line-height: 150%;
		letter-spacing: -0.0125rem;
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-top: 2rem;
	}
`;

export const ElevateTeamsImage = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;

	img {
		width: 100%;
		object-fit: cover;
	}
`;
