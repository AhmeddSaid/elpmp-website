"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Grids";

export const CourseHighlightsContainer = styled.section`
	padding-bottom: 88px;
	border-bottom: 0.5px solid #b3b4b7;
	margin-top: 2.5rem;
	position: relative;
	z-index: 5;
	& .HighLightsRow {
		padding-top: 32px;
		@media screen and (min-width: ${Breakpoints.sm}) {
			padding-top: 56px;
		}
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-bottom: 56px;
		//padding-inline: 20px;
	}
	@media screen and (max-width: ${Breakpoints.xxl}) {
		margin: 0 2rem;
	}
`;

export const HighLightsIconShell = styled(Flexbox)`
	gap: 1rem;

	& svg {
		width: 56px;
		height: 56px;
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		gap: 1.75rem;

		svg {
			width: 36px;
			height: 36px;
		}
	}
`;
