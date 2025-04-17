"use client";
import React, { useState } from "react";
import {
	PMPLearningAR,
	PMPLearningEN,
} from "../../../../../../messages/Courses/LearningObjectivies";
import { Col, Flexbox, Row } from "@/Grids";
import { Locale } from "@/Library/Globals";
import DownArrow from "@/Library/Icongraphy/DownArrow/DownArrow";
import { Body, Heading1, Title4 } from "@/Library/Typography/TypographyNew";
import {
	IndexContainer,
	IndexStyles,
	LearningObjectivesContainer,
	ViewMoreDiv,
	ViewMoreStyles,
} from "@/Library/_Pages/Courses/CourseDetails/LearningObjectives/LearningObjectives.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const LearningObjectives = ({ locale }: Locale) => {
	const t = locale === "en" ? PMPLearningEN : PMPLearningAR;
	const [total, setTotal] = useState<number>(6);
	return (
		<>
			<LearningObjectivesContainer id={"LearningObjectives"}>
				<Highlighter>{t.title}</Highlighter>
				<Heading1 className={`${styles.paddingBottom32}`}>{t.subtitle}</Heading1>

				<Row>
					{[...t.objectives.slice(0, total)].map((item, index) => {
						return (
							<>
								<Col md={6}>
									<div className={`${styles.paddingBottom16} ${styles.paddingTop16}`}>
										<Flexbox gap={1.25}>
											<IndexContainer>
												<IndexStyles weight={"Medium"}>{index + 1}</IndexStyles>
											</IndexContainer>
											<div>
												<Title4 weight={"SemiBold"} className={`${styles.paddingBottom12}`}>
													{item.title}
												</Title4>
												<Body size={"S"}>{item.description}</Body>
											</div>
										</Flexbox>
									</div>
								</Col>
							</>
						);
					})}
				</Row>

				{total <= 6 && (
					<ViewMoreDiv onClick={() => setTotal(12)}>
						<ViewMoreStyles weight={"Medium"}>
							{locale === "en" ? "View all" : "عرض الكل"}
						</ViewMoreStyles>
						<DownArrow />
					</ViewMoreDiv>
				)}
			</LearningObjectivesContainer>
		</>
	);
};

export default LearningObjectives;
