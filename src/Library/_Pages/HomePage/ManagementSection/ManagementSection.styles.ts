"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox, Row, Section } from "@/Grids";
import { Display1, Display2, Title1 } from "@/Library/Typography/TypographyNew";

export const Management = styled.section`
	border-radius: 200px 200px 0 0;
	background: var(--Main-Black, #1d1c1d);
	padding-block: 117.92px 0;

	@media screen and (max-width: ${Breakpoints.lg}) {
		border-radius: 64px 64px 0 0;
		padding-block: 93.92px 0;
	}
`;
export const ManagementSectionHeaderContainer = styled.div`
	/* max-width: 694.88px; */
	max-width: 90%;
	margin-inline: auto;
	text-align: center;
	position: relative;
	margin-bottom: 212.96px;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-bottom: 16px;
	}

	&:before {
		content: "";
		width: 100%;
		height: 1px;
		background: linear-gradient(
			270deg,
			rgba(119, 90, 243, 0.1) 0.96%,
			rgba(97, 63, 243, 0.6) 21.73%,
			#4f29f3 44.96%,
			rgba(97, 63, 243, 0.6) 69.12%,
			rgba(119, 90, 243, 0.1) 90.85%
		);
		box-shadow: 0 0 0 0 #8067ef;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 10;
		transform: translateY(58.08px);
		@media screen and (max-width: ${Breakpoints.lg}) {
			display: none;
		}
	}
`;
export const ManagementSectionHeader = styled(Display1)`
	background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.3) 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-top: 40px;
`;
export const ManagementSectionContainerInner = styled.ul`
	margin-top: 55.04px;

	li {
		padding-inline: 40px;
		padding-block: 32px;
		color: var(--Gray-5, #8c8d91);

		&.active {
			border-radius: 20px;
			background: var(--Gray-1, #292c32);
			color: var(--ffffff, #fff);
		}
	}
`;
export const ManagementSectionInnerPersentage = styled.p`
	margin-top: 99.04px;
	padding-inline: 32px 11.04px;
	color: var(--Gray-7, #dadadd);
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%; /* 38.4px */
	letter-spacing: -0.36px;
`;
export const PersentageImage = styled.div`
	padding-inline: 55.04px 51.04px;
	margin-block: 67.04px 160px;

	img {
		width: 100%;
		height: auto;
	}
`;
export const ManagementFooter = styled(Flexbox)`
	background-image: url("/Frame (2).svg");
	//background-color: red;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border-radius: 180px;
	padding-block: 120.96px 112px;
	padding-inline: 96px;
	transform: translateY(0);
	width: 90%;
	margin: auto;
	position: relative;
	z-index: 3;
	margin-top: -200px;

	@media screen and (max-width: ${Breakpoints.xxl}) {
		text-align: center;
		border-radius: 64px;
		background-size: cover;
		flex-direction: column;
		padding-block: 80.96px 89.92px;
		padding-inline: 17.92px;
	}

	a {
		@media screen and (max-width: ${Breakpoints.xxl}) {
			width: 90%;
		}
	}

	button {
		margin-bottom: 0.875rem;
		display: inline-flex;
		border-radius: 100px;
		background: var(--Main-Pink, #fda9ce);
		padding: 28px 48px;
		align-items: center;
		gap: 8px;
		color: var(--Main-Indigo, #4f29f3);
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%; /* 23.4px */
		letter-spacing: -0.36px;
		@media screen and (max-width: ${Breakpoints.xxl}) {
			width: 100%;
			display: inline-flex;
			justify-content: center;
		}
	}
`;
export const ManagementFooterTitle = styled(Display2)`
	color: var(--ffffff, #fff);
	font-feature-settings: "ss04" on;
	margin-bottom: 48px;
`;
export const ManagementFooterBody = styled(Title1)`
	color: var(--ffffff, #fff);
	@media screen and (max-width: ${Breakpoints.xxl}) {
		margin-block: 24px 55.04px;
	}
`;
export const LaptopScreen = styled(Row)`
	position: sticky;
	top: 32px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;

export const MobileScreen = styled(Row)`
	text-align: center;
	display: none;
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: flex;
	}
`;
export const ManagementCaption = styled.div`
	padding-block: 56px;

	:nth-child(1) {
		color: white;
		margin-bottom: 71.04px;
	}

	img {
		width: 50%;
		height: auto;
	}
`;
export const OverflowBox = styled.div`
	height: 10000px;
	width: 100vw;
`;
export const ScrollerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 13.75rem;
	height: 700px;
	border: 1px solid red;
	position: sticky;
	top: 100px;
	margin-top: -200px;
	overflow: auto;
`;
export const ItemsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const ListItem = styled.li<{ active?: boolean }>`
	width: 28.125rem;
	height: 4.75rem;
	border-radius: 62.5rem;
	padding: 2rem 2.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	color: ${({ active }) => (active ? "#ffffff" : "#8c8d91")};
	background-color: ${({ active }) => (active ? "#292C32" : "transparent")};
`;

// NEW

export const ManagementSectionContainer = styled.div`
	background-color: #1d1c1d;
	padding: 6rem 0 12rem;
	position: relative;
	overflow: hidden;
	/* height: 78rem; */
	border-top-left-radius: 12.5rem;
	border-top-right-radius: 12.5rem;

	@media screen and (max-width: ${Breakpoints.xl}) {
		border-top-left-radius: 4rem;
		border-top-right-radius: 4rem;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		height: auto;
	}
`;
export const TitleHolder = styled.div`
	width: 1000px;
	/* height: 204px; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
	margin: auto;
	& img {
		margin: 1.125rem auto;
	}

	@media screen and (max-width: ${Breakpoints.xl}) {
		width: 90%;
		& .subtitle {
			font-size: 18px;
			text-align: center;
		}
	}
`;
export const Title = styled.h2`
	font-family: Poppins;
	font-weight: 600;
	font-size: 4rem;
	line-height: 4.8rem;
	letter-spacing: -3%;
	text-align: center;
	background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.3) 100%);
	background-clip: text;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: ${Breakpoints.xl}) {
		leading-trim: both;
		text-edge: cap;
		font-family: Poppins;
		font-size: 38px;
		font-style: normal;
		font-weight: 600;
		line-height: 110%; /* 52.8px */
		letter-spacing: -0.96px;
	}
`;
export const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 13.75rem;
	/* margin-top: 100px; */
	height: 520px;
	overflow-y: scroll;
	/* padding-bottom: 10px; */
	/* border: 1px solid green; */
	&::-webkit-scrollbar {
		display: none;
	}
	scroll-snap-type: y mandatory;
	position: relative;
	/* padding-top: 100px; */

	@media screen and (max-width: ${Breakpoints.xl}) {
		gap: 0;
		justify-content: space-evenly;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;
export const ListHolder = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
	position: sticky;
	top: 0;
	height: 100%;
`;
export const Item = styled.li<{ active?: boolean }>`
	display: flex;
	width: 28.1875rem;
	padding: 2rem 2.5rem;
	/* justify-content: center; */
	align-items: center;
	gap: 0.5rem;
	border-radius: 62.5rem;
	background-color: ${({ active }) => (active ? "#292C32" : "transparent")};
	color: ${({ active }) => (active ? "#ffffff" : "#8c8d91")};
	font-family: Poppins;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: -0.18px;
	transition: 300ms;
`;
export const MainContentHolder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	/* border: 1px solid red; */
	/* transform: translateY(-50px); */

	&::before {
		content: "";
		width: 100%;
		height: 100px;
		background-image: linear-gradient(to bottom, #1d1c1d, transparent);
		position: sticky;
		top: 0;
		pointer-events: none;
	}
	&::after {
		content: "";
		width: 100%;
		height: 100px;
		background-image: linear-gradient(to top, #1d1c1d, transparent);
		position: sticky;
		bottom: 0;
		pointer-events: none;
	}
	& .mainContent:last-child {
		padding-bottom: 60px;
	}
	/* padding-bottom: 360px; */
`;
export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 32.375rem;
	/* height: 33.5rem; */
	margin: 0 auto 3rem;
	&:first-child {
		margin: -3rem auto 6rem;
	}
	&:last-child {
		margin: 3rem auto -100px;
		/* padding-bottom: 80px; */
	}
	& p {
		color: #fff;
		font-family: Poppins;
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		letter-spacing: -0.64px;
		/* margin-bottom: 5rem; */
		text-align: center;
	}
	& span {
		color: #fff;
		font-family: Poppins;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: -0.36px;
		margin-top: 2rem;
	}
	& .container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		& div {
			color: #292c32;
			font-feature-settings: "ss04" on;
			-webkit-text-stroke-width: 5px;
			-webkit-text-stroke-color: #4f29f3;
			font-family: Poppins;
			font-size: 184px;
			font-style: normal;
			font-weight: 700;
			line-height: 110%;
			letter-spacing: -3.68px;
		}
	}
`;
export const SectionFooter = styled(Section)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		max-width: 90% !important;
		padding-right: 0;
		padding-left: 0;
		& .ready {
			width: 100%;
		}
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		max-width: 100% !important;
		padding-right: 0;
		padding-left: 0;
		& .ready {
			width: 100%;
		}
	}
`;
