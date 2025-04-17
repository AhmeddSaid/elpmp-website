"use client";
import styled from "styled-components";
import { Col, Row } from "@/Grids";
import { Heading1 } from "@/Library/Typography/TypographyNew";

export const ProgressBodyContainer = styled(Col)<{ order: number; isActive?: boolean }>`
	order: ${({ order }) => order};
	text-align: center;
`;
export const ProgressBody = styled(Heading1)<{ isActive?: boolean }>`
	color: ${({ isActive }) => (isActive ? "#1D1C1D!important" : "#60626C!important")};
`;

export const ProgressIconContainer = styled(Col)<{ order: number; isActive?: boolean }>`
	order: ${({ order }) => order};

	svg {
		margin: auto;
		fill: red !important;
	}
`;

export const ProgressContainer = styled(Row)`
	margin-bottom: 15rem;
`;
export const ProgressNumber = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
	order: 2;
`;
export const ProgressNumberInner = styled.div<{ isActive?: boolean }>`
	display: flex;
	width: 5rem;
	height: 5rem;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: ${({ isActive }) => (isActive ? "#1D1C1D" : "#ECEFF4")};

	p {
		color: ${({ isActive }) =>
			isActive ? "#fff!important" : "#b3b4b7!important"}; //#b3b4b7 !important;
	}
`;
// color: ${({ isActive }) => (isActive ? "#1D1C1D !important" : "#60626C !important")};
