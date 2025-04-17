import React from "react";
import { Title3 } from "@/Library/Typography/TypographyNew";
import LessonsShell from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/LessonsShell";
import { DomainContanier } from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/WhatsInside.styles";
import { DomainShell } from "@/UI/Lesson/Lesson.styles";

const Domain = ({ domain, lessons }: { domain: string; lessons: string[] }) => {
	return (
		<>
			<DomainContanier>
				<Title3 weight={"semibold"}>{domain}</Title3>
			</DomainContanier>

			<DomainShell>
				<LessonsShell
					lessons={lessons}
					chapterNumber={1}
					title={"title"}
					time={"8 lessons • 4:25 hours"}
					caption={
						"Everything you need to know to get setup, organized, and begin in PMP Everything you need to know to get setup"
					}
				/>{" "}
				<LessonsShell
					lessons={lessons}
					chapterNumber={1}
					title={"title"}
					time={"8 lessons • 4:25 hours"}
					caption={
						"Everything you need to know to get setup, organized, and begin in PMP Everything you need to know to get setup"
					}
				/>
			</DomainShell>
		</>
	);
};

export default Domain;
