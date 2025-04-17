import Image from "next/image";
import React from "react";
import {
	ConfidenceSectionTranslationAr,
	ConfidenceSectionTranslationEn,
} from "../../../../../messages/home/ConfidenceSection/ConfidenceSection";
import { Col, Flexbox, Row, Section } from "@/Grids";
import { Body, Heading1 } from "@/Library/Typography/TypographyNew";
import {
	Confidence,
	ConfidenceFooterCaption,
	ConfidenceFooterCaptionBody,
	ConfidenceFooterCaptionTitle,
	ConfidenceFooterPercentage,
	ConfidenceHeader,
	ConfidenceSectionFooter,
	ConfidenceSectionFooterInner,
	ConfidenceTitle,
	Percent,
	PercentHolder,
	PercentNum,
	TakeLookSection,
	TakeLookSectionCaption,
	TakeLookSectionTitle,
	VideoHolder,
	VS,
} from "@/Library/_Pages/HomePage/ConfidenceSection/ConfidenceSection.styles";

const ConfidenceSection = ({ topSpace, locale }: { topSpace?: boolean; locale: string }) => {
	const t = locale === "en" ? ConfidenceSectionTranslationEn : ConfidenceSectionTranslationAr;

	return (
		<>
			<Confidence topSpace={topSpace}>
				<Section>
					<Row justify={"center"}>
						<Col md={10}>
							<ConfidenceTitle big align={"center"}>
								{t.title}
							</ConfidenceTitle>
							<ConfidenceHeader size="4rem">{t.Header}</ConfidenceHeader>
							<TakeLookSection as={"ul"}>
								<svg
									width="1"
									height="76"
									viewBox="0 0 1 76"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="0.25"
										y1="1.09278e-08"
										x2="0.249997"
										y2="76"
										stroke="#B3B4B7"
										strokeWidth="0.5"
										strokeDasharray="6 4"
									/>
								</svg>

								<TakeLookSectionCaption md={6} as={"li"}>
									<Body size={"L"}>{t.SubHeader}</Body>
								</TakeLookSectionCaption>
								<TakeLookSectionTitle md={6} as={"li"}>
									<Heading1>{t.TakeALook}</Heading1>
								</TakeLookSectionTitle>
							</TakeLookSection>
							{/* <ConfidenceSectionPlay src={"/Frame 501.png"} alt={""} width={1165} height={683} /> */}
							<VideoHolder>
								<Image
									className={"placeholder"}
									src={"/vid-placeholder.png"}
									alt={""}
									width={400}
									height={400}
								/>
								<button>
									<Image src={"/play-btn.svg"} alt="play" width={100} height={100} />
								</button>
							</VideoHolder>
							<ConfidenceSectionFooter gap={2} justify={"space-between"}>
								<svg
									width="1"
									height="161"
									viewBox="0 0 1 161"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="0.75"
										y1="1.09278e-08"
										x2="0.749993"
										y2="161"
										stroke="#42434A"
										strokeWidth="0.5"
										strokeDasharray="2 5"
									/>
								</svg>

								<ConfidenceSectionFooterInner>
									<ConfidenceFooterPercentage justify={"center"} aligncenter={"center"}>
										<Flexbox justify={"center"} aligncenter={"start"}>
											{/* <Image
												src={"/Frame512.png"}
												style={{ objectFit: "contain" }}
												alt={""}
												width={160}
												height={79}
											/> */}

											<PercentHolder>
												<PercentNum>30</PercentNum>
												<Percent>%</Percent>
											</PercentHolder>
										</Flexbox>
										<VS>vs.</VS>
										<Flexbox>
											{/* <Image
												src={"/Frame513.png"}
												style={{ objectFit: "contain" }}
												alt={""}
												width={202}
												height={78}
											/> */}
											<PercentHolder>
												<PercentNum>100</PercentNum>
												<Percent>%</Percent>
											</PercentHolder>
										</Flexbox>
									</ConfidenceFooterPercentage>
									<p className={"successRate"}>{t.SuccessRate}</p>
								</ConfidenceSectionFooterInner>

								<ConfidenceFooterCaption>
									<ConfidenceFooterCaptionTitle weight={"semibold"}>
										{t.PercentageTitle}
									</ConfidenceFooterCaptionTitle>
									<ConfidenceFooterCaptionBody weight={"regular"} size={"L"}>
										{ConfidenceSectionTranslationEn.PercentageSubTitle[0]}
										<span>{ConfidenceSectionTranslationEn.PercentageSubTitle[1]}</span>
										{ConfidenceSectionTranslationEn.PercentageSubTitle[2]}
										<span>{ConfidenceSectionTranslationEn.PercentageSubTitle[3]}</span>
										{ConfidenceSectionTranslationEn.PercentageSubTitle[4]}
									</ConfidenceFooterCaptionBody>
								</ConfidenceFooterCaption>
							</ConfidenceSectionFooter>
						</Col>
					</Row>
				</Section>
			</Confidence>
		</>
	);
};

export default ConfidenceSection;
