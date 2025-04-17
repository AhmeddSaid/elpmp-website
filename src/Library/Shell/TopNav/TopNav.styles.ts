"use client";
import styled, { DefaultTheme } from "styled-components";
import { Breakpoints, Flexbox } from "@/Grids";

export const NavItem = styled.li`
	& a {
		color: ${({ theme }: { theme: DefaultTheme }) => theme.Black.main} !important;
	}

	&:not(:first-child) {
		padding-inline-start: 1rem;
	}
`;

export const NavItemContainer = styled.ul`
	display: flex;
	align-items: center;
`;

export const NavigationBar = styled.nav`
	padding: 1rem 5.5rem;
	border-radius: 0 0 24px 24px;
	background: rgba(255, 255, 255, 0.86);
	box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(10px);
	height: 4.5rem;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 111111;
	@media screen and (max-width: ${Breakpoints.xl}) {
		display: none;
	}
`;

export const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SmallNavigationBarShell = styled.div<{ open: boolean }>`
	width: 100%;
	//height: fit-content;
	height: ${({ open }) => (open ? "100vh" : "fit-content")};
	border-radius: 0 0 24px 24px;
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(10px);
`;

export const SmallNavigationBar = styled(Flexbox)`
	display: none;
	@media screen and (max-width: ${Breakpoints.xl}) {
		max-width: 100%;
		//height: 100vh;
		//border-radius: 0 0 24px 24px;
		//background: rgba(255, 255, 255, 0.9);
		//box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);
		//backdrop-filter: blur(10px);
		padding: 16px 12px 16px 20px;
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		text-align: center;
		z-index: 11111101010;
	}
`;

export const SmallNavigationBarMenu = styled.div<{ open: boolean }>`
	//background: teal;
	padding: 16px 12px 16px 20px;
	z-index: 11212251;
	width: 100%;
	height: 90%;
	display: ${({ open }) => (open ? "flex" : "none")};
	//display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-height: 90dvh;
	position: fixed;
`;

export const SmallNavigationBarMenuLinks = styled(Flexbox)`
	flex-direction: column;
	gap: 24px;

	a {
		color: black;
		cursor: pointer;
	}
`;

export const SmallNavigationBarButton = styled(Flexbox)`
	flex-direction: column;
	gap: 8px;
`;
