"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const WhyCard = styled.div`
	padding: 2rem 1rem 1.5rem;
	border-radius: 1rem;
	border: 1.5px solid var(--Gray-7, #dadadd);
	background: var(--ffffff, #fff);
	height: 100%;

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 32px 24px 24px 24px;
	}
`;
