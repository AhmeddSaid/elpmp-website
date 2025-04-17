"use client";

import React from "react";
import {
	CurriculumAR,
	CurriculumEN,
} from "../../../../../../messages/Courses/CurriculumTranslation";
import { Locale } from "@/Library/Globals";
import { Body, Heading1 } from "@/Library/Typography/TypographyNew";
import Domain from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/Domain";
import { WhatsInsideShell } from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/WhatsInside.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const WhatsInside = ({ locale }: Locale) => {
	const t = locale === "en" ? CurriculumEN : CurriculumAR;
	return (
		<>
			<WhatsInsideShell>
				<Highlighter>{t.title}</Highlighter>
				<Heading1>{t.subtitle}</Heading1>
				<Body className={`${styles.paddingTop16}`}>
					{t.description[0]}
					{t.description[1]}
				</Body>

				<Domain
					lessons={["lesson1", "lesson2", "lesson3", "lesson4", "lesson5", "lesson6", "lesson7"]}
					domain={"Domain 1"}
				/>
				<Domain
					lessons={["lesson", "lesson", "lesson", "lesson", "lesson	", "lesson6", "lesson7"]}
					domain={"Domain 2"}
				/>
			</WhatsInsideShell>
		</>
	);
};

export default WhatsInside;
