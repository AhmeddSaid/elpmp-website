import Link from "next/link";
import React from "react";
import {
	PMPCourseContent,
	PMPCourseContentAR,
} from "../../../../../../messages/Courses/CoursesTopNav";
import { Flexbox } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Label, Title3 } from "@/Library/Typography/TypographyNew";
import {
	CoursesHeaderContainer,
	CoursesHeaderShell,
} from "@/Library/_Pages/Courses/CourseDetails/CoursesHeader/CoursesHeader.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";
import Rating from "@/UI/Rating/Rating";
import uuid from "@/Utils/uuid";

const CourseHeader = ({ hidden, locale }: { hidden: boolean } & Locale) => {
	const t = locale === "en" ? PMPCourseContent : PMPCourseContentAR;
	return (
		<>
			<CoursesHeaderShell hidden={hidden}>
				<CoursesHeaderContainer>
					<Flexbox justify={"space-between"}>
						<div>
							<Title3 className={styles.paddingBottom8} weight={"semibold"}>
								{t.title}
							</Title3>

							<Flexbox aligncenter={"center"} gap={0.75}>
								<Rating rating={4.7} />

								<Label weight={"MD"} size={"MD"}>
									{t.rating.ratingValue} · {t.rating.price}
								</Label>
							</Flexbox>
						</div>

						<div>
							<Flexbox aligncenter={"center"} gap={1.19} as={"ul"}>
								{t.links.map(link => (
									<li key={uuid()}>
										<Link href={link.href}>{link.label}</Link>
									</li>
								))}
								<Button body={t.cta.buttonText} />
							</Flexbox>
						</div>
					</Flexbox>
				</CoursesHeaderContainer>
			</CoursesHeaderShell>
		</>
	);
};

export default CourseHeader;
