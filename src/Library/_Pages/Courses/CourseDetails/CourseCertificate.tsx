import Image from "next/image";
import React from "react";
import {
	PMPCertificationAR,
	PMPCertificationEN,
} from "../../../../../messages/Courses/CertificateTranslation";
import { CourseCertificateHeading, CourseCertificateSection } from "./CourseDetails.styles";
import { Locale } from "@/Library/Globals";
import { Title2 } from "@/Library/Typography/TypographyNew";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";

const CourseCertificate = ({ locale }: Locale) => {
	const t = locale === "en" ? PMPCertificationEN : PMPCertificationAR;

	return (
		<>
			<CourseCertificateSection className={`${styles.paddingBottom48} ${styles.paddingTop32}`}>
				<Highlighter className={styles.marginTop8}>{t.subtitle}</Highlighter>
				<CourseCertificateHeading small className={`${styles.marginBottom8} ${styles.marginTop12}`}>
					{t.title}
				</CourseCertificateHeading>
				<Title2 weight={"Regular"} className={styles.marginBottom40}>
					{t.body}{" "}
				</Title2>
				<Image
					className={"img"}
					src={"/certificate-showcase.png"}
					alt={"certificate-showcase"}
					width={705}
					height={417}
				/>
			</CourseCertificateSection>
		</>
	);
};

export default CourseCertificate;
