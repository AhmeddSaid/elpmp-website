"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Body } from "@/Library/Typography/TypographyNew";

export const LessonsBody = styled.div`
	padding: 0.5rem 2rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 2px 16px;
	}
`;

export const PreviewStyles = styled(Body)`
	color: var(--Main-Indigo, #4f29f3);

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;

export const DomainShell = styled.div`
	border-radius: 0 1.5rem 1.5rem 1.5rem;
	border: 1px solid var(--Gray-7, #dadadd);
	overflow: hidden;
`;
