"use client";

import Link from "next/link";
import styled from "styled-components";
import Button from "@/Components/UI/Button/Button";
import { Breakpoints, Col, Flexbox, Row } from "@/Grids";
import { Body } from "@/Library/Typography/TypographyNew";

export const DesktopCourseCard = styled(Col)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;
export const MobileCourseCard = styled(Row)<{ hidden: boolean }>`
	background-color: #292729;
	margin-left: unset;
	margin-right: unset;
	padding-top: 96px;
	margin-top: -72px;
	display: ${({ hidden }) => hidden && "none"};
	// @media screen and (min-width: ${Breakpoints.lg}) {
	// 	display: none;
	// }
`;
export const CardContainer = styled.div`
	padding-inline: 16px;

	@media screen and (min-width: ${Breakpoints.xl}) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		display: none;
	}
`;

export const PriceContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	//background: teal;
	display: flex;
	align-items: end;
`;

export const CourseCardShell = styled.div<{ locale: "en" | "ar" }>`
	border-radius: 24px;
	/* border: 1px solid rgba(29, 28, 29, 0.1); */
	background: var(--ffffff, #fff);
	box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.12);
	//width: 100%;
	overflow: hidden;
	/* position: static; */
	position: relative;
	z-index: 100;

	/* right: ${({ locale }) => (locale === "en" ? "70% !important" : "unset")}; */
	/* transform: translateX(-50%) !important; */

	&::after {
		content: "";
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		position: sticky;
		max-width: 23rem;
		/* right: 0rem !important; */
		//right: 8%;
		/* right: ${({ locale }) => (locale === "en" ? "8%" : "unset")};
		left: ${({ locale }) => (locale !== "en" ? "8%" : "unset")};
		margin-left: ${({ locale }) => (locale === "en" ? "auto" : "unset")};
		margin-right: ${({ locale }) => (locale !== "en" ? "auto" : "unset")}; */
		//margin-left: auto;
		margin-bottom: 48px;
		/* right: ${({ locale }) => (locale === "en" ? "8%" : "unset")};
		left: ${({ locale }) => (locale !== "en" ? "8%" : "unset")}; */
		top: 6.75rem;

		left: ${({ locale }) => (locale === "en" ? "60% !important" : "unset")};
		right: ${({ locale }) => (locale === "en" ? "unset" : "60% !important")};
	}

	.CourseCardImageContainer {
		position: relative;
		& .overlay {
			position: absolute;
			background: var(--0-b-0-d-14, rgba(11, 13, 20, 0.4));
			width: 100%;
			height: 100%;
			& svg {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`;

export const CourseCardContainer = styled.div`
	padding-inline: 2rem;
`;

export const CourseCardCaption = styled.div``;

export const CardCoursesBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: var(--Main-Black, #1d1c1d);
`;

export const DiscountContanier = styled.div`
	color: var(--Gray-5, #8c8d91);
	display: flex;
	align-items: center;
`;

export const BeforDiscount = styled.p`
	color: var(--Gray-5, #8c8d91);
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: -0.2px;
	/* text-decoration-line: strikethrough; */
	text-decoration-line: line-through;
`;

export const CarfFotter = styled(Flexbox)`
	padding: 16px 32px;
	gap: 12px;
	border-top: 0.0313rem solid var(--Gray-7, #dadadd);
	background: var(--Gray-9, #f4f5f5);
`;

export const FotterCaption = styled(Body)`
	color: var(--Gray-4, #60626c);
`;

export const RefundSpan = styled.span`
	color: var(--Main-Black, #1d1c1d);
`;
export const RefundPoliceSpan = styled(Link)`
	color: var(--Main-Indigo, #4f29f3);
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`;

export const ContainerAll = styled.div`
	position: relative;
`;

export const SmallScreenInfo = styled.div`
	display: none;

	@media screen and (max-width: ${Breakpoints.sm}) {
		display: block;
		padding-block: 1rem;
		margin-block: 1rem;
		border-top: 0.0625rem solid var(--Gray-7, #dadadd);
		border-bottom: 0.0625rem solid var(--Gray-7, #dadadd);
	}
`;

export const SmallScreenHeaderInfo = styled.div`
	display: none;
	@media screen and (max-width: ${Breakpoints.sm}) {
		display: block;
	}
`;

export const EnrollBtn = styled(Button)`
	display: flex;
	height: 56px;
	padding: 8px 24px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 100px;
	background: var(--Main-Indigo, #4f29f3);
	color: var(--ffffff, #fff);
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 100%;
	letter-spacing: -0.08px;
`;
