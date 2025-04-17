"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const FooterStyles = styled.footer`
	background-color: #1d1c1d;
	padding-top: 3.875rem;
	padding-bottom: 2.5rem;
	direction: ltr;
	.flexDirectionColInResponsive {
		@media screen and (max-width: ${Breakpoints.sm}) {
			flex-direction: column;
			align-items: start;
		}
	}
`;

export const SocialItem = styled.li`
	&:not(:last-child) {
		margin-inline-end: 0.25rem;
	}
`;

export const LiStyles = styled.div`
	li {
		list-style-type: disc;
		list-style-position: inside;
	}

	position: relative;

	p {
		padding-inline-start: 15px;
	}

	&:after {
		content: "";
		background: #8c8d91;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		z-index: 1000;
		position: absolute;
		top: 7px;
		left: 0;
	}
`;

export const FooterDisclaimerShell = styled.div`
	padding-top: 40px;

	display: flex;
	flex-direction: column;
	gap: 18px;

	max-width: 801px;
`;
