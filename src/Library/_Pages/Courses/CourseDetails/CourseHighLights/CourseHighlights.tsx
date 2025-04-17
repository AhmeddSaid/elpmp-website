import React from "react";
import {
	CoursesTranslationAr,
	CoursesTranslationEn,
} from "../../../../../../messages/Courses/Courses";
import HighLightsIconSection from "@/Components/HighLightsIconSection/HighLightsIconSection";
import { Col, Row } from "@/Grids";
import BadgeCheck from "@/Library/Icongraphy/BadgeCheck/BadgeCheck";
import BookOpenLine from "@/Library/Icongraphy/BookOpenLine/BookOpenLine";
import ClipboardCheck from "@/Library/Icongraphy/Clipboard-check/Clipboard-check";
import ClipboardList from "@/Library/Icongraphy/Clipboard-list/Clipboard-list";
import Duplicate from "@/Library/Icongraphy/Duplicate/Duplicate";
import Play from "@/Library/Icongraphy/Play/Play";
import Tickets from "@/Library/Icongraphy/Tickets/Tickets";
import Users from "@/Library/Icongraphy/Users/Users";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import { CourseHighlightsContainer } from "@/Library/_Pages/Courses/CourseDetails/CourseHighLights/CourseHighlights.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const CourseHighlights = ({ locale }: { locale: "en" | "ar" }) => {
	const icon = [
		{ icon: <Play /> },
		{ icon: <BookOpenLine /> },
		{ icon: <Tickets /> },
		{ icon: <BadgeCheck /> },
		{ icon: <Duplicate /> },
		{ icon: <ClipboardCheck /> },
		{ icon: <ClipboardList /> },
		{ icon: <Users /> },
	];
	const t = locale === "en" ? CoursesTranslationEn.Highlights : CoursesTranslationAr.Highlights;
	return (
		<>
			<CourseHighlightsContainer>
				<Highlighter>{t.Title}</Highlighter>

				<Heading1 className={`${styles.marginTop4} CourseHighLightsHeader`}>{t.Heading}</Heading1>

				<Row as={"ul"} className={"HighLightsRow"}>
					{t.Preparation.map((item, i) => {
						return (
							<>
								<Col as={"li"} lg={6} className={`${styles.paddingBottom32}`}>
									<HighLightsIconSection icon={icon[i].icon} content={item} />
								</Col>
							</>
						);
					})}
				</Row>
			</CourseHighlightsContainer>
		</>
	);
};

export default CourseHighlights;
