import React from "react";
import {
	CoursesTranslationAr,
	CoursesTranslationEn,
} from "../../../../../../messages/Courses/Courses";
import { WhyElpmpContainer } from "./WhyElpmp.styles";
import { Col, Row } from "@/Grids";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import WhyElpmpCard from "@/Library/_Pages/Courses/CourseDetails/WhyElpmp/WhyElpmpCard";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";
import Divider from "@/UI/Divider/Divider";

const WhyElpmp = ({ locale }: { locale: "en" | "ar" }) => {
	const t = locale === "en" ? CoursesTranslationEn.WhyPmp : CoursesTranslationAr.WhyPmp;
	return (
		<>
			<WhyElpmpContainer
				className={`${styles.marginTop48} ${styles.paddingTop32} ${styles.marginBottom48} ${styles.paddingBottom48} `}
			>
				<Highlighter>{t.title}</Highlighter>
				<Heading1 className={`${styles.marginTop4} ${styles.marginBottom32}`}>
					{t.subtitle}
				</Heading1>
				<Row columnGap={0.5} as={"ul"}>
					{t.features.map(item => {
						return (
							<>
								<Col as={"li"} md={6} lg={4} xl={4} className={`${styles.marginBottom8}`}>
									<WhyElpmpCard title={item.title} body={item.description} />
								</Col>
							</>
						);
					})}
				</Row>
			</WhyElpmpContainer>
			<Divider />
		</>
	);
};

export default WhyElpmp;
