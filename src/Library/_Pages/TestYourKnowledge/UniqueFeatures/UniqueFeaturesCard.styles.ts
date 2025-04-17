"use client";
import styled from "styled-components";
import { Body, Heading2 } from "@/Library/Typography/TypographyNew";

export const UniqueFeaturesCardContainer = styled.div`
	svg {
		margin-inline: auto;
		width: 81px;
		height: 80px;
	}

	margin-top: 24px;
`;

export const UniqueFeaturesCardHeading = styled(Heading2)`
	margin-block: 2.5rem 1.5rem;
	color: var(--Indigo-97, #f3f1fe);
`;

export const UniqueFeaturesCardTitle = styled(Body)`
	color: var(--Indigo-86, #c7bbfb);
`;
