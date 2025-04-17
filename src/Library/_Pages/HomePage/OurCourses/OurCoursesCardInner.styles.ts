"use client";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Heading1 } from "@/Library/Typography/TypographyNew";

export const CardInner = styled.article`
	border-radius: 2rem;
	border: 1px solid var(--Gray-7, #dadadd);
	background: var(--ffffff, #fff);
	overflow: hidden;
	transition: all 0.4s ease-in-out;
	height: 100%;
	&:hover {
		border: 1px solid var(--Indigo-70, #886ef7);
		box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.08);
	}
	@media screen and (min-width: ${Breakpoints.xxl}) {
		width: 23.25rem;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		margin-bottom: 1.25rem;
	}
`;
export const OurCoursesCardCaption = styled.div`
	margin-block: 1.25rem 2rem;
	padding-inline: 1.5rem;

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.75rem;

		li {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;
export const OurCoursesCardCaptionList = styled.ul`
	margin-block: 1.25rem 2rem;

	li {
		color: var(--Gray-3, #42434a);
		font-style: normal;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 150%;
	}
`;
export const OurCoursesCardImage = styled(Image)`
	width: 100%;
	object-fit: cover;
`;
export const OurCoursesCardCaptionTitle = styled(Heading1)`
	color: var(--Main-Black, #1d1c1d);
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.04rem;
	text-transform: capitalize;
`;
