import Image from "next/image";
import React from "react";
import {
	CTACoursesAR,
	CTACoursesEN,
} from "../../../../../../messages/Courses/CTASection/CoursesCTASection";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import {
	CourseHelpCenterImage,
	CourseHelpSection,
} from "@/Library/_Pages/Courses/CourseDetails/CourseDetails.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";
import Button from "@/UI/Button/Button";

const CourseHelpCenter = ({ locale }: Locale) => {
	const t = locale === "en" ? CTACoursesEN : CTACoursesAR;
	return (
		<>
			<CourseHelpSection>
				<Section as={"div"}>
					<Row justify="space-between">
						<Col xl={6}>
							<Highlighter className={"center"} big>
								{t.title}
							</Highlighter>

							<div>
								<Heading1 className={"center"} color={"white"}>
									{t.body}
								</Heading1>

								<Button size={"lg"} body={t.button} className={`${styles.marginTop72} center`} />
							</div>
						</Col>

						<Col xl={3}>
							<CourseHelpCenterImage>
								<Image width={340} height={520} src={"/Frame 261.png"} alt={""} />
							</CourseHelpCenterImage>
						</Col>
					</Row>
				</Section>
			</CourseHelpSection>
		</>
	);
};

export default CourseHelpCenter;
