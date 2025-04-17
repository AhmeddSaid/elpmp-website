import React from "react";
import { Col, Row, Section } from "@/Grids";
import {
	EnterpriseHero,
	EnterpriseHeroCaption,
	EnterpriseHeroContainer,
	EnterPriseHeroHeading,
	EnterpriseHighLighter,
	EnterpriseImage,
} from "@/Library/_Pages/Enterprise/EnterpriseHero/EnterpriseHero.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";

const EnterpriseHeroSection = ({
	Highlight,
	title,
	subTitle,
	button,
	locale,
	lines,
	image,
}: {
	title: string;
	subTitle: string;
	button: string;
	Highlight: string;
	lines?: boolean;
	locale: "en" | "ar";
	image: string;
}) => {
	// const t = useTranslations("Enterprise.HeroSection");
	return (
		<EnterpriseHero rtl={locale === "ar"} lines={lines}>
			<svg
				className="svg2"
				width="448"
				height="706"
				viewBox="0 0 448 706"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M357.833 431.528V431.028H357.333H0.5V0.861328H535.5V705.5H357.833V431.528Z"
					stroke="#DADADD"
				/>
			</svg>
			<svg
				className="svg1"
				width="769"
				height="766"
				viewBox="0 0 769 766"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M512 382.25H511.5V382.75V765.091H256.041H0.5V383.25H256.041H256.541V382.75V0.5H767.541V382.25H512Z"
					stroke="url(#paint0_linear_6946_3656)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_6946_3656"
						x1="481.04"
						y1="-15.1393"
						x2="-287.304"
						y2="801.262"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#F4F5F5" />
						<stop offset="1" stopColor="#DBDBDC" />
					</linearGradient>
				</defs>
			</svg>
			<Section className={`${styles.paddingTop120} ${styles.paddingBottom96} `}>
				<Row justify={"center"}>
					<Col md={10}>
						<Row justify="center">
							<EnterpriseHeroContainer lg={6}>
								<EnterpriseHighLighter align={"center"}>{Highlight}</EnterpriseHighLighter>

								<EnterPriseHeroHeading
									className={`${styles.paddingTop40} ${styles.paddingBottom40}`}
								>
									{title}
								</EnterPriseHeroHeading>

								<EnterpriseHeroCaption className={`${styles.paddingBottom64}`}>
									{subTitle}
								</EnterpriseHeroCaption>

								<Button fontSize={"18px"} weight={"600"} size={"xl"} body={button} />
							</EnterpriseHeroContainer>

							<Col lg={6}>
								<EnterpriseImage priority={true} width={568} height={695} src={image} alt={""} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Section>
		</EnterpriseHero>
	);
};

export default EnterpriseHeroSection;
