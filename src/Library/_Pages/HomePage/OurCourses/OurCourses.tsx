import React from "react";
import {
	OurCoursesTranslationAr,
	OurCoursesTranslationEn,
} from "../../../../../messages/home/OurCourses/OurCourses";
import { Col, Row } from "@/Grids";
import {
	CourseList,
	OurCoursesHeader,
	OurCoursesSection,
	OurCoursesSectionInner,
} from "@/Library/_Pages/HomePage/OurCourses/OurCourses.styles";
import OurCoursesCardInner from "@/Library/_Pages/HomePage/OurCourses/OurCoursesCardInner";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const OurCourses = ({ locale }: { locale: string }) => {
	const t = locale === "en" ? OurCoursesTranslationEn : OurCoursesTranslationAr;

	return (
		<>
			<OurCoursesSection>
				<OurCoursesSectionInner as={"div"}>
					<Row justify={"center"}>
						<Col md={10}>
							<Highlighter big align={"center"}>
								{t.Title}
							</Highlighter>
							<OurCoursesHeader rtl={locale === "ar"} size="4rem">
								{t.SectionHeading}
							</OurCoursesHeader>

							<CourseList as={"ul"} className={`${styles.marginTop72}`}>
								{t.Card.map(item => (
									<>
										<Col as={"li"} sm={12} md={8} lg={8} xl={4}>
											<OurCoursesCardInner content={item} />
										</Col>
									</>
								))}
							</CourseList>
						</Col>
					</Row>
				</OurCoursesSectionInner>
			</OurCoursesSection>
		</>
	);
};

export default OurCourses;
