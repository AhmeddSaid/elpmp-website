import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import {
	ChallengeCaption,
	ChallengeContainer,
	ChallengeHighLighter,
	ChallengeInsights,
	InsightCardShel,
	InsightsBody,
	InsightsCaption,
	InsightsContainer,
	InsightShell,
	InsightsParagraph,
	InsightsShell,
	SpanStyle,
} from "@/Library/_Pages/Enterprise/Challanges/Challenge.styles";

import styles from "@/Spaces";
import { Heading2, Heading3 } from "@/Typography";

const Challenge = () => {
	const t = useTranslations("Enterprise.Challenge");
	return (
		<>
			<ChallengeContainer>
				<Section>
					<Row justify={"center"}>
						<Col md={10}>
							<InsightsShell>
								<div>
									<ChallengeHighLighter medium className={`${styles.paddingBottom40}`}>
										{t("Title")}
									</ChallengeHighLighter>

									<ChallengeCaption>
										<p>{t("Caption.Caption1")}</p>
										<p>{t("Caption.Caption2")}</p>
										<p>{t("Caption.Caption3")}</p>
									</ChallengeCaption>
								</div>

								<InsightShell>
									{/*<BlueShadowContainer>*/}
									{/*	<BlueShadows></BlueShadows>*/}
									{/*</BlueShadowContainer>*/}
									<InsightCardShel>
										<Row justify={"center"}>
											<InsightsContainer className={"FirstCol"} lg={6}>
												<ChallengeInsights>
													{/*{t("Insights.Insight1.Percent")} */}
													<Image src={"/Enterprise/Frame10.svg"} alt={""} width={170} height={67} />
												</ChallengeInsights>
												<InsightsParagraph>
													{t("Insights.Insight1.Paragraph.Part1")}
													<SpanStyle> {t("Insights.Insight1.Paragraph.Part2")}</SpanStyle>
													{t("Insights.Insight1.Paragraph.Part3")}{" "}
													<SpanStyle>{t("Insights.Insight1.Paragraph.Part4")}</SpanStyle>
													{t("Insights.Insight1.Paragraph.Part5")}
												</InsightsParagraph>
											</InsightsContainer>

											<InsightsContainer className={"SecCol"} lg={6}>
												<ChallengeInsights>
													{/*{t("Insights.Insight2.Percent")}*/}
													<Image src={"/Enterprise/Frame25.svg"} alt={""} width={170} height={67} />
												</ChallengeInsights>
												<InsightsParagraph>{t("Insights.Insight2.Paragraph")}</InsightsParagraph>
											</InsightsContainer>
										</Row>
									</InsightCardShel>
								</InsightShell>

								<Row className={`${styles.paddingTop80}`} justify={"center"}>
									<Col lg={5}>
										<InsightsBody className={`${styles.paddingBottom16}`}>
											{t("Body.Paragraphs.Paragraph1")}
										</InsightsBody>
										<Heading3 color={"white"}>{t("Body.Paragraphs.Paragraph2")}</Heading3>
									</Col>
									<Col lg={5}>
										<InsightsCaption className={`${styles.paddingBottom48}`}>
											{t("Body.Paragraphs.Paragraph3")}
										</InsightsCaption>
										<InsightsCaption>{t("Body.Paragraphs.Paragraph4")}</InsightsCaption>
									</Col>
								</Row>

								<Row
									className={`${styles.marginTop144} ${styles.paddingBottom144}`}
									justify={"center"}
									aligncenter="center"
								>
									<Col lg={5}>
										<Heading2 color={"white"}>{t("Body.Paragraphs.Paragraph5")}</Heading2>
									</Col>
									<Col lg={5}>
										<div>
											<ul>
												<li className={styles.paddingBottom40}>
													<InsightsCaption> {t("Body.Paragraphs.Paragraph6")} </InsightsCaption>
												</li>
												<li>
													<InsightsCaption>{t("Body.Paragraphs.Paragraph7")}</InsightsCaption>
												</li>
											</ul>
										</div>
									</Col>
								</Row>
							</InsightsShell>
						</Col>
					</Row>
				</Section>
			</ChallengeContainer>
		</>
	);
};

export default Challenge;
