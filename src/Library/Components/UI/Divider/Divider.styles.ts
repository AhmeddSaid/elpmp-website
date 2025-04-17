"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const DividerStyles = styled.div<{ color?: "grey" | "divider" }>`
	height: 0.5px;
	width: 100%;
	background: ${({ theme, color }) => (color === "grey" ? theme.Grey[4] : theme.Grey.divider)};

	@media screen and (max-width: ${Breakpoints.sm}) {
		display: none;
	}
`;
