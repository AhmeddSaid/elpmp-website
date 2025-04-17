"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const TimelineShell = styled.div`
	width: 100%;
	background-color: white;
	font-family: sans-serif;
	overflow: hidden;
	@media (min-width: 768px) {
		padding-left: 2.5rem; /* 10px in Tailwind is 2.5rem */
		padding-right: 2.5rem;
	}

	@media (prefers-color-scheme: dark) {
		background-color: white; /* This is the equivalent of Tailwind's dark:bg-neutral-950 */
	}
`;

export const TimelineHeader = styled.div`
	max-width: 80rem;
	/* max-w-7xl corresponds to 80rem in Tailwind */
	margin-left: auto;
	margin-right: auto;
	padding-top: 5rem; /* py-20 corresponds to 5rem */
	padding-bottom: 5rem; /* py-20 corresponds to 5rem */
	padding-left: 1rem; /* px-4 corresponds to 1rem */
	padding-right: 1rem; /* px-4 corresponds to 1rem */

	@media (min-width: 768px) {
		padding-left: 2rem; /* md:px-8 corresponds to 2rem */
		padding-right: 2rem; /* md:px-8 corresponds to 2rem */
	}

	@media (min-width: 1024px) {
		padding-left: 2.5rem; /* lg:px-10 corresponds to 2.5rem */
		padding-right: 2.5rem; /* lg:px-10 corresponds to 2.5rem */
	}
`;

export const TimelineP = styled.h2`
	color: var(--Main-Black, #1d1c1d);
	text-align: center;
	padding-block: 16px 32px;
	/* Display/1/Xl */
	font-size: 64px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%; /* 76.8px */
	letter-spacing: -1.92px;
	text-transform: capitalize;

	@media (prefers-color-scheme: dark) {
		color: black; /* dark:text-white */
	}

	max-width: 64rem; /* max-w-4xl corresponds to 64rem */
`;

export const TimelineP2 = styled.p`
	color: var(--Gray-4, #60626c);
	text-align: center;

	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: -0.18px;

	@media (prefers-color-scheme: dark) {
		color: #d1d5db;
	}
`;

export const TimeLineBodyShell = styled.div`
	position: relative;
	max-width: 830px; /* max-w-7xl corresponds to 80rem (1280px) */
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 5rem; /* pb-20 corresponds to 5rem (80px) */
`;

export const TimeLineBody = styled.div`
	display: flex;
	justify-content: flex-start; /* justify-start */
	padding-top: 2.5rem; /* pt-10 corresponds to 2.5rem (40px) */
	align-items: center;

	@media (min-width: 768px) {
		padding-top: 10rem; /* md:pt-40 corresponds to 10rem (160px) */
		gap: 2.5rem; /* md:gap-10 corresponds to 2.5rem (40px) */
	}
`;

export const TimeLineBody1 = styled.div`
	//position: sticky;
	display: flex;
	flex-direction: column; /* flex-col */
	z-index: 40;
	align-items: center; /* items-center */
	top: 10rem; /* top-40 corresponds to 10rem (160px) */
	max-width: 20rem; /* max-w-xs corresponds to 20rem (320px) */

	@media (min-width: 768px) {
		flex-direction: row; /* md:flex-row */
		width: 100%; /* md:w-full */
	}

	@media (min-width: 1024px) {
		max-width: 24rem; /* lg:max-w-sm corresponds to 24rem (384px) */
	}
`;

export const TimeLineBody2 = styled.div<{ active?: boolean }>`
	height: 2.5rem; /* h-10 corresponds to 2.5rem (40px) */
	width: 2.5rem; /* w-10 corresponds to 2.5rem (40px) */
	position: absolute;
	left: 50%;
	transform: translateX(-50%); /* left-3 corresponds to 0.75rem (12px) */
	border-radius: 9999px; /* rounded-full for a circular shape */
	//background-color: black; /* bg-white */
	background: ${({ active }) =>
		active ? "var(--Main-Black, #1d1c1d)" : "var(--Main-Ice, #ECEFF4)"} !important;
	transition: all 1s ease-in;

	display: flex;
	align-items: center; /* items-center */
	justify-content: center; /* justify-center */

	@media (prefers-color-scheme: dark) {
		background-color: black; /* dark:bg-black */
	}

	p {
		color: ${({ active }) =>
			active ? " var(--ffffff, #FFF)" : "var(--Gray-6, #B3B4B7)"} !important;
		transition: all 0.5s ease-in;
	}
`;

export const TimeLineBody3 = styled.div`
	padding: 0.5rem;
	border-radius: 9999px;
	border-width: 1px;
	width: 1rem;
	height: 1rem;
`;

export const TimeLineBodyH3 = styled.h3<{ active?: boolean; position: "left" | "right" }>`
	//display: none; /* hidden */
	color: ${({ active }) =>
		active ? "var(--Main-Black, #1D1C1D)" : " var(--Gray-4, #60626C)"} !important;
	transition: all 1s ease-in;

	@media (min-width: 768px) {
		display: block;
		font-size: 3rem;
	}

	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: 130%;
	letter-spacing: -0.64px;
	text-transform: capitalize;

	text-align: ${({ position }) => (position === "left" ? "left" : "right")};

	& svg {
		position: ${({ position }) => (position === "right" ? "relative" : "")};
		left: ${({ position }) => (position === "right" ? "100%" : "")};
		transform: translateX(${({ position }) => (position === "right" ? "-100%" : "")});
	}

	& svg path {
		fill: ${({ active }) => (active ? "var(--Main-Black, #1d1c1d)" : " #ECEFF4")} !important;
	}
`;

export const TimeLineBody4 = styled.div`
	position: relative; /* relative */
	padding-left: 5rem; /* pl-20 corresponds to 5rem (80px) */
	padding-right: 1rem; /* pr-4 corresponds to 1rem (16px) */
	width: 100%; /* w-full */

	@media (min-width: 768px) {
		padding-left: 1rem; /* md:pl-4 corresponds to 1rem (16px) */
	}
`;

export const TimeLineBody4H3 = styled.h3`
	display: block; /* block */
	font-size: 1.5rem; /* text-2xl corresponds to 1.5rem (24px) */
	margin-bottom: 1rem; /* mb-4 corresponds to 1rem (16px) */
	text-align: left; /* text-left */
	font-weight: bold; /* font-bold */
	color: #6b7280; /* text-neutral-500 corresponds to this hex value */

	@media (min-width: 768px) {
		display: none; /* md:hidden */
	}

	@media (prefers-color-scheme: dark) {
		color: #6b7280; /* dark:text-neutral-500 (same as text-neutral-500) */
	}
`;

export const TimeLineBody5 = styled.div`
	position: absolute; /* absolute */
	left: 50%;
	transform: translateX(-50%); /* left-8 corresponds to 2rem (32px) */
	top: 0;
	//overflow: hidden; /* overflow-hidden */
	width: 4px; /* w-[2px] */
	height: 85%;
	//background: linear-gradient(to bottom, var(--tw-gradient-stops)); /* bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] */
	//background: linear-gradient(to bottom, transparent 0%, #e5e7eb 0%, transparent 99%); /* from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] */
	background: black;
	@media (prefers-color-scheme: dark) {
		//background: linear-gradient(
		//	to bottom,
		//	transparent 0%,
		//	gray 0%,
		//	transparent 99%
		//); /* dark:via-neutral-700 */
		background: lightgray;
		height: 85% !important;
		//overflow: hidden;
	}

	mask-image: gray;

	&:after {
		content: "";

		border-radius: 50%;
		background: #1d1c1d;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 0;

		left: 50%;
		transform: translatex(-50%);
	}
`;

export const TimeLineBody6 = styled(motion.div)`
	position: absolute; /* absolute */
	left: 0; /* inset-x-0 makes left and right 0 */
	right: 0; /* inset-x-0 makes left and right 0 */
	top: 0; /* top-0 */
	width: 4px; /* w-[2px] */
	background: black;
	max-height: 100% !important;
	//background: linear-gradient(
	//	to top,
	//	#805ad5 0%,
	//	#3b82f6 10%,
	//	transparent 100%
	//); /* bg-gradient-to-t with colors and positions */
	border-radius: 9999px; /* rounded-full for circular edges */
`;

export const Text = styled.p`
	color: black; /* Replace with your neutral-800 color */
	font-size: 0.75rem; /* text-xs */
	font-weight: 400; /* font-normal */
	margin-bottom: 2rem; /* mb-8 */

	@media (min-width: 768px) {
		font-size: 0.875rem; /* md:text-sm */
	}

	@media (prefers-color-scheme: dark) {
		color: black; /* Replace with your dark neutral-200 color */
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem; /* This corresponds to Tailwind's gap-4 (1rem = 16px) */
`;

export const StartBlackDot = styled.div`
	background: #1d1c1d;
	width: 20px;
	height: 20px;
	position: absolute;
	left: -8px;
	border-radius: 50%;
`;
