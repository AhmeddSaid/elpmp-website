import { useTranslations } from "next-intl";
import React from "react";
import { Row, Section } from "@/Grids";
// import { Display2, Title1 } from "@/Library/Typography/TypographyNew";
import {
	Body,
	BodyContainer,
	MoreQuestionContainer,
	MoreQuestionShell,
	Title,
} from "@/Library/_Pages/Enterprise/HaveMoreQuestion/MoreQuestion.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";
// import Divider from "@/UI/Divider/Divider";

const MoreQuestion = () => {
	const t = useTranslations("Enterprise.MoreQuestion");
	return (
		<>
			<MoreQuestionContainer>
				<Section>
					<Row justify="center">
						{/* <MoreQuestionShell>
								<svg
									className="divider"
									width="1156"
									height="2"
									viewBox="0 0 1156 2"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 1H1156" stroke="url(#paint0_linear_7015_3658)" />
									<defs>
										<linearGradient
											id="paint0_linear_7015_3658"
											x1="0"
											y1="1.5"
											x2="1156"
											y2="1.5"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#BCBED2" stopOpacity="0.2" />
											<stop offset="0.5" stopColor="#8E909F" />
											<stop offset="1" stopColor="#BBBED2" stopOpacity="0.2" />
										</linearGradient>
									</defs>
								</svg>
								<Col className={styles.marginBottom32} lg={6}>
									<Flexbox gap={1} aligncenter={"center"}>
										<FormLinksWrapper>
											<GuaranteeIcon />

											<Body color={"white"} size={"S"}>
												{t("LearnMore.LearnMore1.Heading")}
											</Body>
										</FormLinksWrapper>

										<Flexbox aligncenter={"center"} className="form-arrow-link">
											<LinkStyles size={"MD"}>{t("LearnMore.LearnMore1.Link")}</LinkStyles>
											<ArrowRight />
										</Flexbox>
									</Flexbox>
								</Col>
								<Col className={styles.marginBottom32} lg={6}>
									{" "}
									<Flexbox gap={1} aligncenter={"center"}>
										<FormLinksWrapper>
											<BookOpen />

											<Body color={"white"} size={"S"}>
												{t("LearnMore.LearnMore2.Heading")}
											</Body>
										</FormLinksWrapper>

										<Flexbox aligncenter={"center"} className="form-arrow-link">
											<LinkStyles size={"MD"}>{t("LearnMore.LearnMore2.Link")}</LinkStyles>
											<ArrowRight />
										</Flexbox>
									</Flexbox>
								</Col>
								<Col className={styles.marginBottom32} lg={6}>
									<Flexbox gap={1} aligncenter={"center"}>
										<FormLinksWrapper>
											<PresentationIcon />

											<Body color={"white"} size={"S"}>
												{t("LearnMore.LearnMore3.Heading")}
											</Body>
										</FormLinksWrapper>
										<Flexbox aligncenter={"center"} className="form-arrow-link">
											<LinkStyles size={"MD"}>{t("LearnMore.LearnMore3.Link")}</LinkStyles>
											<ArrowRight />
										</Flexbox>
									</Flexbox>
								</Col>
								<Col className={styles.marginBottom32} lg={6}>
									{" "}
									<Flexbox gap={1} aligncenter={"center"}>
										<FormLinksWrapper>
											<UserGroupSmall />

											<div>
												<Body color={"white"} className={styles.paddingBottom8} size={"S"}>
													{t("LearnMore.LearnMore4.Heading")}
												</Body>

												<WorkWithUsLink TextIswhite size={"MD"}>
													{t("LearnMore.LearnMore4.Link")}
												</WorkWithUsLink>
											</div>
										</FormLinksWrapper>
									</Flexbox>
								</Col>
							</MoreQuestionShell> */}

						{/* <Divider /> */}

						<MoreQuestionShell className={`${styles.marginTop96} ${styles.marginBottom85}`}>
							{/* <Col md={5}> */}
							<Title>{t("Heading")}</Title>
							{/* </Col> */}
							<BodyContainer>
								<Body className={styles.marginBottom56} weight={"Regular"}>
									{t("Body")}
								</Body>

								<Button body={t("Button")} />
							</BodyContainer>
						</MoreQuestionShell>
					</Row>
				</Section>
			</MoreQuestionContainer>
		</>
	);
};

export default MoreQuestion;
