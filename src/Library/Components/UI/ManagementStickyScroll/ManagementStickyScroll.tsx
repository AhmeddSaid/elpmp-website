"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import { Title2 } from "@/Library/Typography/TypographyNew";
import {
	ManagementStickyScrollBackgroundContent,
	ManagementStickyScrollCardContainer,
	ManagementStickyScrollCardTitle,
	ManagementStickyScrollContainer,
} from "@/UI/ManagementStickyScroll/ManagementStickyScroll.styles";
import uuid from "@/Utils/uuid";

export const ManagementStickyScroll = ({
	content,
}: {
	content: { title: ReactNode; content: ReactNode }[];
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<never>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		target: ref,
		// container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", latest => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<ManagementStickyScrollContainer ref={ref}>
			<ManagementStickyScrollCardContainer md={5}>
				{content.map((item, index) => (
					<ManagementStickyScrollCardTitle
						key={uuid()}
						initial={{ backgroundColor: "transparent", color: "var(--Gray-5, #8C8D91)" }}
						animate={{
							backgroundColor: activeCard === index ? "var(--Gray-1, #292c32)" : "transparent",
							color: activeCard === index ? "var(--ffffff, #FFF)" : "var(--Gray-5, #8C8D91)",
						}}
					>
						<Title2 weight={"Regular"} color={activeCard === index ? "white" : "gray"}>
							{item.title}
						</Title2>
					</ManagementStickyScrollCardTitle>
				))}
			</ManagementStickyScrollCardContainer>
			<ManagementStickyScrollBackgroundContent md={5}>
				{content[activeCard].content}
			</ManagementStickyScrollBackgroundContent>
		</ManagementStickyScrollContainer>
	);
};
