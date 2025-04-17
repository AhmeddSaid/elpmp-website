"use client";
import React from "react";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import CarriculumCard from "@/Library/_Pages/Courses/CourseDetails/Caurriculum/CarriculumCard";
import { CaurriculumShell } from "@/Library/_Pages/Courses/CourseDetails/Caurriculum/Caurriculum.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const Curriculum = () => {
	return (
		<>
			<CaurriculumShell id={"Curriculum"}>
				<Highlighter>PMP certification course syllabus</Highlighter>

				<Heading1 className={`${styles.marginBottom32}`}>Curriculum</Heading1>

				{[...Array(5)].map((_, index: number) => {
					return (
						<>
							<CarriculumCard index={index} />
						</>
					);
				})}
			</CaurriculumShell>
		</>
	);
};

export default Curriculum;
