import React from "react";
import {
	CourseAudienceAR,
	CourseAudienceEN,
} from "../../../../../messages/Courses/ForWhoTrasnlation";
import { Col, Row } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import {
	AttenderCard,
	WhoShouldAttendSection,
} from "@/Library/_Pages/Courses/CourseDetails/CourseDetails.styles";
import styles from "@/Spaces";
import { Highlighter, MediumParagraph } from "@/Typography";

const WhoShouldAttend = ({ locale }: Locale) => {
	const t = locale === "en" ? CourseAudienceEN : CourseAudienceAR;
	return (
		<>
			<WhoShouldAttendSection id={"WhoShouldAttend"}>
				<Heading1 className={styles.marginTop8}>{t.subtitle}</Heading1>
				<Highlighter className={`${styles.paddingTop8} ${styles.paddingBottom48}`}>
					{t.title}
				</Highlighter>

				<Row columnGap={0.5} as={"ul"}>
					{t.audience.map((attendance: string) => (
						<>
							<Col md={4} as={"li"} className={`${styles.marginBottom8}  `}>
								<AttenderCard>
									<div id={"icon"} />
									<MediumParagraph weight={"bold"}>{attendance}</MediumParagraph>
								</AttenderCard>
							</Col>
						</>
					))}
				</Row>
			</WhoShouldAttendSection>
		</>
	);
};

export default WhoShouldAttend;
