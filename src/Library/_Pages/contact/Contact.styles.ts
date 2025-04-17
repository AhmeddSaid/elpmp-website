"use client";
import Image from "next/image";
import styled from "styled-components";
// import { boolean } from "yup";
import { Breakpoints, Section } from "@/Grids";
import { Heading2 } from "@/Typography";

export const ContactContainer = styled.div`
	position: relative;
`;
export const ContactHeroSection = styled(Section)`
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;

	@media screen and (max-width: ${Breakpoints.sm}) {
		.contact-us-heading {
			font-size: 2rem;
		}
	}
`;
export const ImgHolder = styled.div<{ rtl?: boolean }>`
	display: none;
	position: absolute;
	right: ${({ rtl }) => (rtl ? "unset" : "0")};
	left: ${({ rtl }) => (rtl ? "0" : "unset")};
	bottom: 160px;
	width: 80%;
	height: 400px;
	background-image: ${({ rtl }) =>
		rtl
			? "linear-gradient(to left, #f7e43a, #f9991a)"
			: "linear-gradient(to right, #f7e43a, #f9991a)"};
	z-index: -1;
	border-radius: ${({ rtl }) => (rtl ? "0 2rem 2rem 0" : "2rem 0 0 2rem")};
	/* transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")}; */

	& img {
		position: absolute;
		bottom: 0;
		left: ${({ rtl }) => (rtl ? "unset" : "100px")};
		right: ${({ rtl }) => (rtl ? "100px" : "unset")};
		transform: ${({ rtl }) => (rtl ? "scaleX(-1)" : "scaleX(1)")};
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: ${({ rtl }) => (rtl ? "unset" : "0")};
		right: ${({ rtl }) => (rtl ? "0" : "unset")};
		width: 240px;
		height: 140px;
		/* border-radius: 1rem; */
		background-color: #fff;
		z-index: -1;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		display: block;
	}
`;
export const ContactHeroImage = styled(Image)`
	position: absolute;
	top: 50%;
	right: 200px;
	z-index: -1;
	width: 100%;
`;

export const FAQSection = styled.div`
	background: linear-gradient(180deg, #fafafa 0%, #fff 100%);
	padding-top: 271px;
	padding-bottom: 108px;

	& > ${Section} {
		max-width: 685px !important;
	}
`;

export const EnterpriseFAQSection = styled.div`
	background: linear-gradient(180deg, #fff 0%, #f4f4f5 100%);
	position: relative;
	z-index: 3;
	padding-block: 3rem 3.5rem;

	& > ${Section} {
		max-width: 685px !important;
	}
`;
export const TitleHolder = styled.div`
	margin: auto;
	width: fit-content;
	margin-bottom: -2.25rem;
`;
export const FaqHeading = styled(Heading2)`
	margin-bottom: 96px;

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 2rem;
	}
`;
