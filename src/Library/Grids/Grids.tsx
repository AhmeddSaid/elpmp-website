"use client";
import styled, { css } from "styled-components";

export const Breakpoints = {
	sm: "540px",
	md: "720px",
	lg: "991px",
	xl: "1200px",
	xxl: "1392px",
};

export const getContainerMediaQueries = () => css`
	${Object.entries(Breakpoints).map(
		// eslint-disable-next-line
		([key, value]) => `
        @media (min-width: ${value}) {
            max-width: ${value} !important;
        }
    `,
	)}
`;

export const Section = styled.section`
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;
	${getContainerMediaQueries()}
`;

export const ContainerFluid = styled.section`
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;
`;

type FLex = {
	aligncenter?: "center" | "start" | "end" | "flex-end";
	justify?: "space-between" | "center" | "space-around" | "end" | "space-evenly";
	gap?: number;
	columnGap?: number;
};

const getFlexStyles = (props: FLex) => css`
	display: flex;
	align-items: ${props.aligncenter ?? ""};
	justify-content: ${props.justify ?? ""};
	gap: ${`${props.gap}rem` ?? ""};

	& > * {
		box-sizing: border-box;
	}

	& > svg {
		flex-shrink: 0;
	}
`;

export const Flexbox = styled.div<FLex>`
	${getFlexStyles}
`;

export const Row = styled.div<FLex>`
	${getFlexStyles};
	flex-wrap: wrap;
	margin-right: ${({ columnGap }) => `calc(${columnGap || 1.25}rem * -0.5)`};
	margin-left: ${({ columnGap }) => `calc(${columnGap || 1.25}rem * -0.5)`};

	& > * {
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100%;
		max-width: 100%;
		padding-right: ${({ columnGap }) => `calc(${columnGap || 1.25}rem * 0.5)`};
		padding-left: ${({ columnGap }) => `calc(${columnGap || 1.25}rem * 0.5)`};
	}
`;

type ColProps = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
};

export const Col = styled.div<ColProps>`
	flex: 0 0 auto;
	width: ${({ xs }: ColProps) =>
		xs === undefined || xs <= 0 ? "" : `${(xs / 12) * 100}%`} !important;

	@media (min-width: 576px) {
		width: ${({ sm }: ColProps) =>
			sm === undefined || sm <= 0 ? "" : `${(sm / 12) * 100}%`} !important;
	}

	@media (min-width: 768px) {
		flex: 0 0 auto !important;
		width: ${({ md }: ColProps) =>
			md === undefined || md <= 0 ? "" : `${(md / 12) * 100}%`} !important;
	}

	@media (min-width: 992px) {
		flex: 0 0 auto !important;
		width: ${({ lg }: ColProps) =>
			lg === undefined || lg <= 0 ? "" : `${(lg / 12) * 100}%`} !important;
	}

	@media (min-width: 1200px) {
		flex: 0 0 auto !important;
		width: ${({ xl }: ColProps) =>
			xl === undefined || xl <= 0 ? "" : `${(xl / 12) * 100}%`} !important;
	}

	@media (min-width: 1400px) {
		width: ${({ xxl }: ColProps) =>
			xxl === undefined || xxl <= 0 ? "" : `${(xxl / 12) * 100}%`} !important;
	}
`;

export const AutoCol = styled(Col)`
	flex: 0 0 auto;
	width: auto;
`;
