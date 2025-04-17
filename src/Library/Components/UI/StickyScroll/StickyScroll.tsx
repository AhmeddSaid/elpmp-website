"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import {
	BackgroundContent,
	Card,
	CardContainer,
	CardTitle,
	ScrollContainer,
} from "@/UI/StickyScroll/StickyScroll.styles";
import uuid from "@/Utils/uuid";

export const StickyScroll = ({
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
	const threshold = 0.1;

	useMotionValueEvent(scrollYProgress, "change", latest => {
		const adjustedProgress = latest + threshold;
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(adjustedProgress - breakpoint);
			if (distance < Math.abs(adjustedProgress - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);

		setActiveCard(closestBreakpointIndex);
	});

	// const linearGradients = [
	// 	"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
	// 	"linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
	// 	"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
	// ];

	// const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

	// useEffect(() => {
	// 	// setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
	// }, [activeCard]);

	return (
		<>
			<ScrollContainer ref={ref}>
				<BackgroundContent md={8}>{content[activeCard].content}</BackgroundContent>
				<CardContainer md={6}>
					{content.map((item, index) => (
						<Card key={uuid()}>
							<CardTitle
								initial={{ opacity: 0 }}
								animate={{ opacity: activeCard === index ? 1 : 0.3 }}
							>
								{item.title}
							</CardTitle>
						</Card>
					))}
				</CardContainer>
			</ScrollContainer>
		</>
	);
};
