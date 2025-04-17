"use client";
import Image from "next/image";
import React from "react";
import { OurPriorityTranslation } from "../../../../../messages/home/PMPCertified/OurPriority.translation";
import { Col, Flexbox, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import OutlineArrowRight from "@/Library/Icongraphy/OutlineArrowRight/OutlineArrowRight";
import Shield from "@/Library/Icongraphy/shield/shield";
import {
	MoveBorder,
	OurPriorityCaption,
	OurPriorityCaptionBody,
	OurPriorityCaptionHeader,
	OurPriorityCaptionLink,
	OurPriorityContainer,
	OurPriorityContainerInner,
	OurPrioritySection,
	OurPriorityTitle,
} from "@/Library/_Pages/HomePage/OurPriority/OurPriority.styles";

const OurPriority = ({ locale }: Locale) => {
	const t = locale === "en" ? OurPriorityTranslation.en : OurPriorityTranslation.ar;
	return (
		<>
			<OurPrioritySection>
				<Section as={"div"}>
					<Row justify={"center"}>
						<Col md={10}>
							<Row justify={"center"} aligncenter={"center"}>
								<OurPriorityContainer>
									<MoveBorder />

									<OurPriorityContainerInner aligncenter={"center"} gap={3}>
										<Image src={"/Group 30.png"} alt={""} width={1156} height={471} />
										<Shield />
										<OurPriorityCaption>
											<OurPriorityTitle>{t.title}</OurPriorityTitle>
											<OurPriorityCaptionHeader>{t.subtitle}</OurPriorityCaptionHeader>
											<OurPriorityCaptionBody weight={"regular"} size={"MD"} as={"p"}>
												{t.description}
											</OurPriorityCaptionBody>

											<Flexbox>
												<OurPriorityCaptionLink size={"L"} weight={"MD"} as={"p"}>
													{t.button}
												</OurPriorityCaptionLink>
												<OutlineArrowRight />
											</Flexbox>
										</OurPriorityCaption>
									</OurPriorityContainerInner>
								</OurPriorityContainer>
							</Row>
						</Col>
					</Row>
				</Section>
			</OurPrioritySection>
		</>
	);
};

export default OurPriority;
