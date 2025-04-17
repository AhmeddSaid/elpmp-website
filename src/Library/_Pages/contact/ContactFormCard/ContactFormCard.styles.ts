"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Label } from "@/Library/Typography/TypographyNew";

export const FormCardShell = styled.div`
	padding: 4.5rem 3.5rem 3rem;
	border-radius: 1.5rem;
	background: var(--ffffff, #fff);
	box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.15);
	width: 35.5rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 100%;
		padding: 2rem 1.5rem;
	}
`;

export const FormLinks = styled.div`
	border-bottom: 0.5px solid var(--Gray-6, #b3b4b7);
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (max-width: ${Breakpoints.sm}) {
		border-bottom: none;

		margin: 1rem 0;
		& > div {
			/* flex-wrap: wrap; */
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.form-arrow-link {
			margin: 0 2.5rem;
		}
	}
`;
export const FormLinksWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
export const LinkStyles = styled(Label)`
	color: var(--Main-Indigo, #4f29f3);
	cursor: pointer;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.31rem;
`;
export const NameContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
		align-items: unset;
	}
`;
export const LabelStyles = styled(Label)`
	color: var(--Gray-4, #60626c);
`;

export const InputStyles = styled.input`
	height: 3rem;

	width: 100%;
	border-radius: 0.5rem;
	border: 1.5px solid var(--Gray-7, #dadadd);
	background: #fff;
	padding-inline: 1rem;
`;

export const TeaxAreaStyles = styled.textarea`
	height: 7.5rem;
	width: 100%;
	align-self: stretch;
	border-radius: 0.5rem;
	border: 1.5px solid var(--Gray-7, #dadadd);
	background: #fff;
	resize: none;
`;

export const WorkWithUsLink = styled(LinkStyles)<{ TextIswhite?: boolean }>`
	//color: var(--Main-Black, #1d1c1d);
	color: ${({ TextIswhite }) => (TextIswhite ? "white" : "var(--Main-Black, #1d1c1d)")};
	text-decoration-line: underline;
`;
