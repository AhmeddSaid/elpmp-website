"use client";

import styled from "styled-components";
import { Display1, Heading1, Title2 } from "@/Library/Typography/TypographyNew";

export const YourPathShell = styled.div`
	border-radius: 7.5rem;
	border: 4px solid var(--Indigo-97, #f3f1fe);
	background: var(--ffffff, #fff);
	overflow: hidden;
	text-align: center;
	padding-top: 7rem;
	padding-bottom: 135px;
	margin-bottom: 415px;
`;
export const YouPathTitle = styled(Heading1)`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
`;
export const YouPathHeader = styled(Display1)`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	padding-block: 16px 32px;
`;
export const YouPathBody = styled(Title2)`
	display: inline-block;
	color: var(--Gray-4, #60626c);
	max-width: 37.0625rem;
	text-align: center;
	margin-bottom: 6rem;
`;
