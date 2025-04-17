import React, { useState } from "react";
import { Flexbox } from "@/Grids";
import Chevron from "@/Library/Icongraphy/Chevron/16/Chevron";
import { Label, Title3, Title4 } from "@/Library/Typography/TypographyNew";
import {
	ChevronContainer,
	IndexContainer,
} from "@/Library/_Pages/Courses/CourseDetails/Caurriculum/Caurriculum.styles";
import {
	ChapterShell,
	LessonCaption,
	LessonInfo,
	LessonsContainer,
	LessonsInfo,
	LessonsParagraph,
} from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/WhatsInside.styles";
import styles from "@/Spaces";
import Lesson from "@/UI/Lesson/Lesson";

const LessonsShell = ({
	title,
	chapterNumber,
	time,
	lessons = ["a"],
	caption,
}: {
	title: string;
	chapterNumber: number;
	time: string;
	lessons?: string[];
	caption: string;
}) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<LessonsContainer>
				<LessonCaption
					active={open}
					gap={1.25}
					justify={"space-between"}
					onClick={() => setOpen(prev => !prev)}
				>
					{/*<IndexContainer active={open}>*/}
					{/*	<Title4 className={"Index"} weight={"Medium"}>*/}
					{/*		{chapterNumber}*/}
					{/*	</Title4>*/}
					{/*</IndexContainer>*/}
					<div>
						<LessonsInfo aligncenter={"center"} justify={"space-between"}>
							<Flexbox aligncenter={"center"} gap={1}>
								<IndexContainer active={open}>
									<Title4 className={"Index"} weight={"Medium"}>
										{chapterNumber}
									</Title4>
								</IndexContainer>

								<Title3 weight={"semibold"}>{title}</Title3>
							</Flexbox>

							<LessonInfo>
								<Label weight={"MD"}>{time} </Label>
							</LessonInfo>
						</LessonsInfo>
						<LessonsParagraph className={`${styles.paddingTop12}`} size={"MD"} weight={"regular"}>
							{caption}
						</LessonsParagraph>
					</div>
					<ChevronContainer className={`rotate ${!open ? "active" : ""}`}>
						<Chevron />
					</ChevronContainer>
				</LessonCaption>

				<ChapterShell className={open ? "" : "displayNone"}>
					{lessons.map((item, index) => {
						return (
							<>
								<Lesson isPreview={index % 2 === 0} name={item} time={6.5} />
							</>
						);
					})}
				</ChapterShell>
			</LessonsContainer>
		</>
	);
};

export default LessonsShell;
