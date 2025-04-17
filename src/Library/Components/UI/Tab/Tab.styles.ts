import styled from "styled-components";

export const TabStyles = styled.li<{ isActive: boolean }>`
	color: ${({ theme, isActive }) => (isActive ? "#ffffff" : theme.Grey[4])};
	background-color: ${({ theme, isActive }) => (isActive ? theme.Black.main : theme.Grey[9])};
	padding: 0.75rem 1rem;
	border-radius: 25rem;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 130%;
	letter-spacing: -0.14px;
	display: inline-block;
	user-select: none;
	cursor: ${({ isActive }) => (isActive ? "" : "pointer")};
	margin-bottom: 0.5rem;

	&:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`;
