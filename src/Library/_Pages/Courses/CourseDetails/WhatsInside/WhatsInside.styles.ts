"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Grids";
import { Body } from "@/Library/Typography/TypographyNew";

export const DomainContanier = styled.div`
	border-radius: 0.25rem 1.5rem 0rem 0rem;
	background: var(--Main-Black, #1d1c1d);
	padding: 0.75rem 1.5rem;
	width: fit-content;
	color: var(--ffffff, #fff);
	margin-top: 2.5rem;
`;

export const LessonCaption = styled(Flexbox)<{ active: boolean }>`
	padding: 1rem 2rem;
	user-select: none;
	cursor: pointer;
	background: ${({ active }) => (active ? "var(--Gray-9, #F4F5F5);" : "")};
`;

export const LessonsContainer = styled.div`
	background: var(--ffffff, #fff);
	//overflow: hidden;
	user-select: none;
	&:not(:last-child) {
		& ${LessonCaption} {
			border-bottom: 0.5px solid var(--Gray-7, #dadadd);
		}
	}
`;

export const LessonInfo = styled.div`
	border-radius: 0.25rem;
	border: 0.5px solid var(--Gray-6, #b3b4b7);
	background: var(--ffffff, #fff);
	color: var(--Gray-2, #37383f);
	padding: 0.5rem 1rem;

	p {
		color: var(--Gray-2, #37383f);
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 100%; /* 12px */
		letter-spacing: 0.36px;
		text-transform: uppercase;
	}
`;

export const LessonsParagraph = styled(Body)`
	overflow: hidden;
	color: var(--Gray-4, #60626c);
	text-overflow: ellipsis;
	//width: 590px;
`;

export const ChapterShell = styled.ul`
	&:last-child {
		border-bottom: 0.5px solid var(--Gray-7, #dadadd);
	}

	&:not(:last-child) {
		border-top: 1px solid red;
	}
`;

export const LessonsInfo = styled(Flexbox)`
	//flex-direction: column;
	align-items: start;

	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const WhatsInsideShell = styled.div`
	padding-block: 32px 40px;
	margin-top: 48px;
	position: relative;
	z-index: 3;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 16px;
	}
`;
