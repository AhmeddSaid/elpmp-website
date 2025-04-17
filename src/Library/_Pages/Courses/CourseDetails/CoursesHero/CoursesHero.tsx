import React from "react";
import {
	PMPCertificationCourseAR,
	PMPCertificationCourseEN,
} from "../../../../../../messages/Courses/CoursesHeroSection";
import { EnrollBtn } from "../CoursesHeader/CoursesHeader.styles";
import CoursesCard from "./CoursesCard";
// import Button from "@/Components/UI/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Grids";
import RightIcon from "@/Library/Icongraphy/RightIcon/RightIcon";
import { Display2, Heading1, Heading2, Title2, Title4 } from "@/Library/Typography/TypographyNew";
import {
	BgGrayDiv,
	ColoufullSpan,
	CourseContainer,
	CourseContainerShell,
	CourseShell,
	CoursesHeroSection,
	HeroCardContainer,
	HeroInstructorName,
	OpacityTitle,
	RatingInfo,
	TotalRating,
} from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesHero.styles";
import styles from "@/Spaces";
import Rating from "@/UI/Rating/Rating";
import uuid from "@/Utils/uuid";

const CoursesHero = ({ locale }: { locale: "en" | "ar" }) => {
	const t = locale === "en" ? PMPCertificationCourseEN : PMPCertificationCourseAR;
	return (
		<>
			<CourseContainerShell>
				<BgGrayDiv>
					<HeroCardContainer>
						<CoursesCard locale={locale} />
					</HeroCardContainer>
					<Section>
						<Row justify={"space-between"}>
							<Col xl={7}>
								<CourseContainer className={`${styles.paddingTop80}`}>
									<Heading2>{t.title}</Heading2>
									<Display2 className={`${styles.paddingTop24} ${styles.paddingBottom56}`}>
										{t.subtitle}
									</Display2>
									<RatingInfo
										gap={2.5}
										className={`${styles.marginBottom56} ${styles.paddingTop16} ${styles.paddingBottom16}`}
									>
										<Flexbox as={"a"} href={"#WhatTheyAreSaying"} gap={0.5} aligncenter={"center"}>
											<Rating rating={4.7} />

											<TotalRating className={"totalRating"}>4.7</TotalRating>
											<TotalRating size={"MD"} underline>
												{locale === "en" ? "(28 ratings)" : "تقيم"}
											</TotalRating>
										</Flexbox>

										<Flexbox aligncenter={"center"} gap={0.38}>
											<OpacityTitle weight={"Regular"}>
												{locale === "en" ? "Instructor:" : "المدرب"}
											</OpacityTitle>
											<HeroInstructorName>
												{locale === "en" ? "Mustafa Maher" : "مصطفى ماهر"}
											</HeroInstructorName>
										</Flexbox>

										<Flexbox aligncenter={"center"} gap={0.25}>
											<Title4 weight={"SemiBold"}>308</Title4>
											<OpacityTitle>{locale === "en" ? "Students enrolled" : "طلاب"}</OpacityTitle>
										</Flexbox>
									</RatingInfo>

									<div className={`${styles.paddingBottom56} `}>
										<EnrollBtn body={t.buttonText} />
									</div>
								</CourseContainer>
							</Col>
						</Row>
					</Section>
				</BgGrayDiv>
				<CoursesHeroSection>
					<Row>
						<Col xl={7}>
							<CourseShell>
								<Heading1 className={`${styles.paddingBottom40} ${styles.paddingTop56}`}>
									{t.description} <ColoufullSpan>{t.highlight}</ColoufullSpan>
								</Heading1>
								{t.points.map(item => (
									<Flexbox key={uuid()} gap={1.5} className={`${styles.paddingBottom24}`}>
										<RightIcon />
										<Title2 color={"white"} weight={"Regular"}>
											{item}
										</Title2>
									</Flexbox>
								))}

								{/*<Flexbox gap={1.5} className={`${styles.paddingBottom24}`}>*/}
								{/*	<RightIcon />*/}
								{/*	<Title2 color={"white"} weight={"Regular"}>*/}
								{/*		Worlds #1 PMP Exam Prep to Pass in Your First Attempt*/}
								{/*	</Title2>*/}
								{/*</Flexbox>*/}
								{/*<Flexbox gap={1.5} className={`${styles.paddingBottom24}`}>*/}
								{/*	<RightIcon />*/}
								{/*	<Title2 color={"white"} weight={"Regular"}>*/}
								{/*		Worlds #1 PMP Exam Prep to Pass in Your First Attempt*/}
								{/*	</Title2>*/}
								{/*</Flexbox>*/}
								{/*<Flexbox gap={1.5} className={`${styles.paddingBottom24}`}>*/}
								{/*	<RightIcon />*/}
								{/*	<Title2 color={"white"} weight={"Regular"}>*/}
								{/*		Worlds #1 PMP Exam Prep to Pass in Your First Attempt*/}
								{/*	</Title2>*/}
								{/*</Flexbox>*/}
							</CourseShell>
						</Col>
					</Row>
				</CoursesHeroSection>
			</CourseContainerShell>
		</>
	);
};

export default CoursesHero;
