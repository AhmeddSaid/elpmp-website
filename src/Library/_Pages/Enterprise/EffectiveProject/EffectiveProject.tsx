import { randomUUID } from "node:crypto";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import Num20 from "@/Library/Icongraphy/20%/Num20";
import Num30 from "@/Library/Icongraphy/30%/Num30";
import Num600 from "@/Library/Icongraphy/600%/600%";
import EffectiveCard from "@/Library/_Pages/Enterprise/EffectiveProject/EffectiveCard";
import {
	CardHeadingIcon,
	EffectiveHeading,
	EffectiveProjectShell,
	ProjectCard,
} from "@/Library/_Pages/Enterprise/EffectiveProject/EffectiveProject.styles";
import ReadySection from "@/Library/_Pages/Enterprise/ReadySection/ReadySection";
import styles from "@/Spaces";

const EffectiveProject = () => {
	const icon = [
		{
			icon: <Num600 />,
		},
		{ icon: <Num30 /> },
		{ icon: <Num20 /> },
		{
			icon: (
				<CardHeadingIcon>
					<p>Increase </p>
					<p>customer </p>
					<p>satisfaction</p>
				</CardHeadingIcon>
			),
		},
	];
	const t = useTranslations("Enterprise.Effective");
	return (
		<>
			<EffectiveProjectShell>
				<Section as={"div"}>
					<Row justify={"center"}>
						<Col md={12}>
							<EffectiveHeading>{t("Title")}</EffectiveHeading>

							<Row className={`${styles.paddingTop96}`} as={"ul"}>
								{[...Array(4)].map((_, index) => (
									<>
										<ProjectCard md={6} xl={3} as={"li"} key={randomUUID()}>
											<EffectiveCard
												key={randomUUID()}
												Icon={icon[index].icon}
												Heading={t(`Cards.Card${index + 1}.Heading`)}
												Body={t(`Cards.Card${index + 1}.Body`)}
											/>
										</ProjectCard>
									</>
								))}
							</Row>
						</Col>
					</Row>
					<ReadySection
						title={"Ready to boost your company?"}
						body={
							"Don't let inconsistent project results hold your enterprise back. Contact us today to learn how our project management solutions can help you achieve unmatched success."
						}
						cta={"Contact Us"}
					/>
				</Section>
			</EffectiveProjectShell>
		</>
	);
};

export default EffectiveProject;
