"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const StickyPriceShell = styled.div<{ hidden: boolean }>`
	border-radius: 16px 16px 0 0;
	background: #fff;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
	padding: 17px 20px;

	display: ${({ hidden }) => (hidden ? "none" : "flex")};
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	width: 100%;
	position: sticky;
	bottom: 0;
	left: 0;
	//right: 0;
	z-index: 121211222;

	& button {
		position: absolute;
		right: 20px;
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		display: none;
	}
`;
