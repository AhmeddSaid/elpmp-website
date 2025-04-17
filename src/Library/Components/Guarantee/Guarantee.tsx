"use client";
import React from "react";
import {
	SatisfactionGuaranteeAR,
	SatisfactionGuaranteeEN,
} from "../../../../messages/Courses/SatisfactionGurante";
import { GuaranteeCard } from "@/Components/Guarantee/Guarantee.styles";
import { Locale } from "@/Library/Globals";
import GuaranteeShield from "@/Library/Icongraphy/GuaranteeShield/GuaranteeShield";
import { Body, Title1 } from "@/Library/Typography/TypographyNew";
import styles from "@/Spaces";

const Guarantee = ({ locale }: Locale) => {
	const t = locale === "en" ? SatisfactionGuaranteeEN : SatisfactionGuaranteeAR;
	return (
		<>
			<section className={`positionRelative ${styles.marginTop48} ${styles.marginBottom48}`}>
				<GuaranteeCard>
					<GuaranteeShield />
					<div>
						<Title1 weight={"semibold"}>{t.title}</Title1>

						<Body
							className={`${styles.paddingTop24} ${styles.paddingBottom8}  `}
							weight={"regular"}
							size={"MD"}
						>
							{t.body}
						</Body>
						<Body size={"S"}>{t.note}</Body>
					</div>
				</GuaranteeCard>
			</section>
		</>
	);
};

export default Guarantee;
