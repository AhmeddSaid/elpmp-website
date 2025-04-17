import Image from "next/image";
import React from "react";
import {
	CourseInstructorAR,
	CourseInstructorEN,
} from "../../../../../../messages/Courses/MeetInstructor";
import styles from "../../../../Grids/Spaces.module.css";
import { Col, Row } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import {
	InstructorCaption,
	InstructorCaptionText,
	InstructorContanier,
	InstructorInfo,
	InstructorName,
	InstructorPosition,
	InstructorShell,
} from "@/Library/_Pages/Courses/CourseDetails/CourseInstructor/CourseInstructor.styles";

const CourseInstructor = ({ locale }: Locale) => {
	const t = locale === "en" ? CourseInstructorEN : CourseInstructorAR;
	return (
		<>
			<InstructorContanier id={"instructor"}>
				<Heading1 className={`${styles.paddingBottom32}`}> {t.title}</Heading1>

				<Row>
					<InstructorShell md={6}>
						<InstructorInfo>
							<Image
								id={"instructor-img"}
								width={104}
								height={104}
								src={"/mm_profile_pic.jpg"}
								alt={""}
							/>
							<InstructorName>{t.name}</InstructorName>
							<InstructorPosition>{t.subtitle}</InstructorPosition>
						</InstructorInfo>
					</InstructorShell>

					<Col md={6}>
						<InstructorCaption>
							<InstructorCaptionText>
								<p>{t.description[0]}</p>
								<p className={`${styles.marginBottom16} ${styles.marginTop16}`}>
									{t.description[1]}
								</p>
								<p className={`${styles.marginBottom16} ${styles.marginTop16}`}>
									{t.description[2]}
								</p>
								<p>{t.description[3]}</p>
							</InstructorCaptionText>
						</InstructorCaption>
					</Col>
				</Row>
			</InstructorContanier>
		</>
	);
};

export default CourseInstructor;
