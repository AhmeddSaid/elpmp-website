import styled, { DefaultTheme } from "styled-components";
import { Row } from "@/Grids";

export const QuestionBox = styled.li`
	padding: 2rem 1rem 2rem 0;
	border-bottom: 0.5px solid ${({ theme }: { theme: DefaultTheme }) => theme.Grey[7]};
	&:last-child {
		border-bottom: none;
	}
`;

export const Answer = styled.p<{ isOpen: boolean }>`
	color: ${({ theme }: { theme: DefaultTheme }) => theme.Grey[4]};
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: -0.2px;
	padding: 1.5rem 2.5rem 0 0;
	display: ${({ isOpen }: { isOpen: boolean }): string => (isOpen ? "" : "none")};
	transition: 0.7s;
`;

export const Question = styled.p`
	color: ${({ theme }: { theme: DefaultTheme }) => theme.Black.main};
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 500;
	line-height: 130%;
	letter-spacing: -0.2px;
`;

export const QuestionContainer = styled(Row)`
	cursor: pointer;
`;
