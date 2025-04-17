import { randomUUID } from "node:crypto";
import { useTranslations } from "next-intl";
import React from "react";
import styles from "../../../Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Grids";
import LightningBolt from "@/Library/Icongraphy/LightningBolt/LightningBolt";
import Puzzle from "@/Library/Icongraphy/Puzzle/Puzzle";
import StarsIcon from "@/Library/Icongraphy/SatrsIcon/StarsIcon";
import ScalableIcon from "@/Library/Icongraphy/ScalableIcon/ScalableIcon";
// import { Display2, Heading2 } from "@/Library/Typography/TypographyNew";
import {
	BenefitBody,
	BenefitHead,
	BenefitsCaption,
	Title,
} from "@/Library/_Pages/Enterprise/ Benefits/ Benefits.styles";
import BenefitsCard from "@/Library/_Pages/Enterprise/ Benefits/BenefitsCard";
// import { Highlighter } from "@/Typography";

const Benefits = () => {
	const t = useTranslations("Enterprise.Benefits");
	return (
		<>
			<Section className={`${styles.paddingBottom144} ${styles.paddingTop192} `}>
				<Row gap={2} justify={"space-evenly"}>
					<Col lg={5}>
						<BenefitsCaption>
							<Title>{t("Title")}</Title>

							<BenefitHead className={`${styles.paddingTop32} ${styles.paddingBottom40}`}>
								{t("Heading")}
							</BenefitHead>
							<BenefitBody weight={"SemiBold"}>{t("Body")}</BenefitBody>
						</BenefitsCaption>
					</Col>

					<Col lg={4}>
						<BenefitsCard
							key={randomUUID()}
							index={0}
							icon={<LightningBolt />}
							title={t(`Cards.Card${1}.Title`)}
							caption={t(`Cards.Card${1}.Caption`)}
							headingColor={"white"}
							cardImage={"/Enterprise/Frame702.svg"}
						/>

						<BenefitsCard
							key={randomUUID()}
							index={1}
							icon={<StarsIcon />}
							title={t(`Cards.Card${2}.Title`)}
							caption={t(`Cards.Card${2}.Caption`)}
							headingColor={"white"}
							cardImage={"/Enterprise/Frame721.svg"}
						/>
						<BenefitsCard
							key={randomUUID()}
							index={2}
							icon={<ScalableIcon />}
							title={t(`Cards.Card${3}.Title`)}
							caption={t(`Cards.Card${3}.Caption`)}
							headingColor={"black"}
							bodyColor={"gray"}
							cardImage={"/Enterprise/Frame722.svg"}
						/>
						<BenefitsCard
							key={randomUUID()}
							index={3}
							icon={<Puzzle />}
							title={t(`Cards.Card${4}.Title`)}
							caption={t(`Cards.Card${4}.Caption`)}
							headingColor={"black"}
							bodyColor={"gray"}
							cardImage={"/Enterprise/Frame723.svg"}
						/>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default Benefits;
