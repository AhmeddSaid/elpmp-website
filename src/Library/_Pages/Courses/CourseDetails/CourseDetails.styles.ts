"use client";
import Link from "next/link";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";
import { Heading2 } from "@/Typography";

export const FaqLink = styled(Link)`
	color: ${({ theme }) => theme.Primary} !important;
	text-decoration: underline;
`;

export const CourseHelpSection = styled.section`
	padding-block: 64px;
	background-color: #1d1c1d;
	padding-bottom: 120px;
	margin-top: 28px;
	position: relative;
	/* &::after {
		content: "";
		position: absolute;
		bottom: 0;
		width: 70%;
		height: 1px;
		background-color: #333233;
		left: 50%;
		transform: translateX(-50%);
	} */
	& button {
		//width: 100%;
	}

	& .center {
		@media screen and (max-width: ${Breakpoints.sm}) {
			text-align: center;
		}
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		border-bottom: 1px solid #37383f;
		padding-block: 64px;
		background-color: #1d1c1d;
		margin-bottom: 0;
		position: relative;

		& button {
			width: fit-content;
			padding: 1.25rem 2.5rem;
			margin: auto;
			font-size: 1rem;
			height: 100%;
			display: flex;
			margin-top: 2.5rem !important;
			font-weight: 500;
		}
	}
`;

export const CourseHelpCenterImage = styled.div`
	margin-top: calc(-1.75rem - 64px);
	margin-bottom: calc(-1.75rem - 64px);
	border-radius: 1rem;
	overflow: hidden;
	display: none;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		display: block;
	}
`;

export const AttenderCard = styled.div`
	padding: 1.5rem 1rem 2.5rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.Ice};
	height: 9.875rem;
	background-image: url("/Group 30.png");
	background-repeat: repeat;
	background-blend-mode: luminosity;
	& > #icon {
		width: 16px;
		height: 4px;
		border-radius: 40px;
		background: ${({ theme }) => theme.Grey[5]};
		margin-bottom: 1.5rem;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		background-image: url("/Group 30.png");
		padding: 2rem 1rem 4.5rem 2rem;
		border-radius: 1rem;
	}
`;

export const PrerequisitesAndEligibilitySection = styled.section`
	padding-block: 32px 48px;
	position: relative;
	z-index: 3;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-block: 48px 56px;
		h2 {
			font-size: 1.5rem;
		}
	}
`;

export const WhoShouldAttendSection = styled.section`
	padding: 24px 16px 40px;
	border-radius: 16px;
	position: relative;
	z-index: 3;
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 32px 0 72px 0;
		//padding-block: 48px;

		border-radius: 16px;
	}
`;

export const CourseCertificateSection = styled.section`
	position: relative;
	z-index: 3;
`;

export const CourseCertificateHeading = styled(Heading2)`
	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 60%;
	}
`;
