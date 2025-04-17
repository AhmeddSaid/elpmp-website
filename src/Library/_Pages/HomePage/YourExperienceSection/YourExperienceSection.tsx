import Image from "next/image";
import React from "react";
import {
	YourExperienceTranslationAr,
	YourExperienceTranslationEn,
} from "../../../../../messages/home/YourExperienceSection/YourExperienceSection";
import bg from "/public/extended-bg.svg";
import { Col, Row, Section } from "@/Grids";
import Cap from "@/Library/Icongraphy/Cap/Cap";
import Lamp from "@/Library/Icongraphy/Lamp/Lamp";
import UserGroupIcon from "@/Library/Icongraphy/UserGroupIcon/UserGroupIcon";
import PlayIcon from "@/Library/Icongraphy/playIcon/PlayIcon";
import YourExperienceCard from "@/Library/_Pages/HomePage/YourExperienceSection/YourExperienceCard";
import {
	YourExperience,
	YourExperienceContainerCard,
	YourExperienceHeading,
	YourExperienceTitle,
} from "@/Library/_Pages/HomePage/YourExperienceSection/YourExperienceSection.styles";

const YourExperienceSection = ({ locale }: { locale: string }) => {
	const t = locale === "en" ? YourExperienceTranslationEn : YourExperienceTranslationAr;

	const content = [
		{
			icon: <Cap />,
			title: t.Cards[0].Title,
			body: t.Cards[0].SubTitle,
		},
		{
			icon: <Lamp />,
			title: t.Cards[1].Title,
			body: t.Cards[1].SubTitle,
		},
		{
			icon: <PlayIcon />,
			title: t.Cards[2].Title,
			body: t.Cards[2].SubTitle,
		},
		{
			icon: <UserGroupIcon />,
			title: t.Cards[3].Title,
			body: t.Cards[3].SubTitle,
		},
	];

	return (
		<>
			<YourExperience rtl={locale === "ar"}>
				<Image src={bg} alt={""} fill objectFit="cover" />
				<Section as={"div"}>
					<Row justify={"center"}>
						<Col lg={10}>
							<YourExperienceTitle weight={"Regular"}>{t.Title}</YourExperienceTitle>
							<YourExperienceHeading>{t.Heading}</YourExperienceHeading>

							<YourExperienceContainerCard as={"ul"}>
								{content.map(item => (
									<>
										<Col as={"li"} lg={3}>
											<YourExperienceCard Icon={item.icon} Title={item.title} Caption={item.body} />
										</Col>
									</>
								))}
							</YourExperienceContainerCard>
						</Col>
					</Row>
				</Section>
			</YourExperience>
		</>
	);
};

export default YourExperienceSection;
