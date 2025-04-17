import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import imgSrc from "../../../../public/contact-2.webp";
import { Col, Row } from "@/Grids";
import {
	ContactContainer,
	ContactHeroSection,
	ImgHolder,
} from "@/Library/_Pages/contact/Contact.styles";
import ContactFormCard from "@/Library/_Pages/contact/ContactFormCard/ContactFormCard";
import styles from "@/Spaces";
import { Heading1, Highlighter } from "@/Typography";

const ContactHero = ({ locale }: { locale: "en" | "ar" }) => {
	const t = useTranslations("ContactUs");
	return (
		<ContactContainer>
			{/*<ContactHeroImage src={"/contact-us.png"} width={1299} height={459} alt={""} />*/}
			<ImgHolder rtl={locale === "ar"}>
				<Image src={imgSrc} alt={""} quality={100} />
			</ImgHolder>
			<ContactHeroSection>
				<Row justify={"center"}>
					<Col xl={5}>
						<Highlighter
							medium
							// className={`${styles.marginBottom40} ${styles.marginTop24}`}
							// weight={"bold"}
							// color={"brand"}
						>
							{t("Title")}
						</Highlighter>
						<Heading1 className={`contact-us-heading ${styles.marginBottom32}`}>
							{t("Heading")}
						</Heading1>

						{/*<FormLinks>*/}
						{/*	<Flexbox gap={1} aligncenter={"center"}>*/}
						{/*		<FormLinksWrapper>*/}
						{/*			<GuaranteeIcon />*/}

						{/*			<Body size={"S"}>{t("Form.LearnMore.LearnMore1.Heading")}</Body>*/}
						{/*		</FormLinksWrapper>*/}

						{/*		/!*<Flexbox aligncenter={"center"} className="form-arrow-link">*!/*/}
						{/*		/!*	<LinkStyles size={"MD"}>{t("LearnMore.LearnMore1.Link")}</LinkStyles>*!/*/}
						{/*		/!*	<ArrowRight />*!/*/}
						{/*		/!*</Flexbox>*!/*/}
						{/*	</Flexbox>*/}
						{/*	<Flexbox gap={1} aligncenter={"center"}>*/}
						{/*		<FormLinksWrapper>*/}
						{/*			<BookOpen />*/}

						{/*			<Body size={"S"}>{t("Form.LearnMore.LearnMore2.Heading")}</Body>*/}
						{/*		</FormLinksWrapper>*/}

						{/*		/!*<Flexbox aligncenter={"center"} className="form-arrow-link">*!/*/}
						{/*		/!*	<LinkStyles size={"MD"}>{t("Form.LearnMore.LearnMore2.Link")}</LinkStyles>*!/*/}
						{/*		/!*	<ArrowRight />*!/*/}
						{/*		/!*</Flexbox>*!/*/}
						{/*	</Flexbox>*/}
						{/*	<Flexbox gap={1} aligncenter={"center"}>*/}
						{/*		<FormLinksWrapper>*/}
						{/*			<PresentationIcon />*/}

						{/*			<Body size={"S"}>{t("Form.LearnMore.LearnMore3.Heading")}</Body>*/}
						{/*		</FormLinksWrapper>*/}
						{/*		/!*<Flexbox aligncenter={"center"} className="form-arrow-link">*!/*/}
						{/*		/!*	<LinkStyles size={"MD"}>{t("Form.LearnMore.LearnMore3.Link")}</LinkStyles>*!/*/}
						{/*		/!*	<ArrowRight />*!/*/}
						{/*		/!*</Flexbox>*!/*/}
						{/*	</Flexbox>*/}
						{/*	<Flexbox gap={1} aligncenter={"center"}>*/}
						{/*		<FormLinksWrapper>*/}
						{/*			<UserGroupSmall />*/}

						{/*			<div>*/}
						{/*				<Body className={styles.paddingBottom8} size={"S"}>*/}
						{/*					{t("Form.LearnMore.LearnMore4.Heading")}*/}
						{/*				</Body>*/}

						{/*				<WorkWithUsLink size={"MD"}>*/}
						{/*					{t("Form.LearnMore.LearnMore4.Link")}*/}
						{/*				</WorkWithUsLink>*/}
						{/*			</div>*/}
						{/*		</FormLinksWrapper>*/}
						{/*	</Flexbox>*/}
						{/*</FormLinks>*/}
					</Col>

					<Col xl={5}>
						<ContactFormCard />
					</Col>
				</Row>
			</ContactHeroSection>
		</ContactContainer>
	);
};

export default ContactHero;
