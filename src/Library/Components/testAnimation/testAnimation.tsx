"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
	TimeLineBody,
	TimeLineBody1,
	TimeLineBody2,
	TimeLineBody4,
	TimeLineBody5,
	TimeLineBody6,
	TimeLineBodyH3,
	TimeLineBodyShell,
	TimelineHeader,
	TimelineP,
	TimelineP2,
	TimelineShell,
} from "@/Components/testAnimation/TestStyles";
import { Col, Flexbox, Row, Section } from "@/Grids";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import { YourPathShell } from "@/Library/_Pages/HomePage/YourPath/YourPath.styles";
import uuid from "@/Utils/uuid";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
	isRight: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [entryPositions, setEntryPositions] = useState<number[]>([]);
	const [activeIndexes, setActiveIndexes] = useState<boolean[]>(Array(data.length).fill(false));

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	useEffect(() => {
		if (ref.current) {
			const positions = Array.from(ref.current.children).map(
				child => child.getBoundingClientRect().top + window.scrollY,
			);
			setEntryPositions(positions);
		}
	}, [data]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY + window.innerHeight / 2; // Middle of the viewport
			const newActiveIndexes = Array(data.length).fill(false);

			for (let i = 0; i < entryPositions.length; i++) {
				// Mark the current and previous entries as active
				if (scrollY >= entryPositions[i]) {
					newActiveIndexes[i] = true;
				}
			}

			setActiveIndexes(newActiveIndexes);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [entryPositions, data.length]);

	return (
		<Section>
			<Row justify={"center"}>
				<Col md={10}>
					<YourPathShell>
						<TimelineShell ref={containerRef}>
							<TimelineHeader>
								<Heading1>Your Path</Heading1>
								<TimelineP>Changelog from my journey</TimelineP>
								<TimelineP2>
									I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline
									of my journey.
								</TimelineP2>
							</TimelineHeader>

							<TimeLineBodyShell ref={ref}>
								{data.map((item, index) => (
									<TimeLineBody key={uuid()}>
										<TimeLineBody1>
											<TimeLineBody2 active={activeIndexes[index]}>
												<Flexbox justify={"center"}>
													<p>{index + 1}</p>
												</Flexbox>
											</TimeLineBody2>
											<TimeLineBodyH3 position={"left"} active={activeIndexes[index]}>
												{item.isRight ? item.title : item.content}
											</TimeLineBodyH3>
										</TimeLineBody1>

										<TimeLineBody4>
											<TimeLineBodyH3 position={"right"} active={activeIndexes[index]}>
												{item.isRight ? item.content : item.title}
											</TimeLineBodyH3>
										</TimeLineBody4>
									</TimeLineBody>
								))}
								<TimeLineBody5 style={{ height: height + "px" }}>
									<TimeLineBody6
										style={{
											height: heightTransform,
											opacity: opacityTransform,
										}}
									/>
								</TimeLineBody5>
							</TimeLineBodyShell>
						</TimelineShell>
					</YourPathShell>
				</Col>
			</Row>
		</Section>
	);
};
