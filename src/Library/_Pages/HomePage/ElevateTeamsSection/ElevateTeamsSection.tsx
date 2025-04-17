import Image from "next/image";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import {
	ElevateTeams,
	ElevateTeamsContainer,
	ElevateTeamsContainerInner,
	ElevateTeamsImage,
	ElevateTeamsTitle,
	EndCol,
	StartCol,
} from "@/Library/_Pages/HomePage/ElevateTeamsSection/ElevateTeamsSection.styles";

const translations = {
	en: {
		subtitle: "ELPMP.com for Enterprises",
		title: "Elevate Your Teams, Power Up Your Projects",
		description:
			"In today's fast-paced business environment, strong project management skills are essential for success. Invest in upskilling your workforce with ELPMP.com - unlock untapped potential, streamline processes, and watch your company's projects consistently execute on time and within budget.",
		cta: "Request a Consultation",
	},
	ar: {
		subtitle: " ELPMP للشركات",
		title: "طور فريقك وحقق قفزة نوعية في مشاريعك",
		description:
			"في عالم الأعمال سريع التغير، تُعد مهارات إدارة المشاريع القوية أساس النجاح. استثمر في تطوير فريقك مع ELPMP.com لتحقق أقصى أطلق العنان لقدراتهم واستفد من إمكاناتهم، وحسّن سير العمليات، لتضمن تنفيذ مشاريع شركتك بدقة، في الوقت المحدد وضمن الميزانية.",
		cta: "احجز استشارتك الآن",
	},
};

const ElevateTeamsSection = ({ locale }: Locale) => {
	const t = translations[locale];
	return (
		<>
			<ElevateTeams>
				<Section>
					<Row justify={"center"}>
						<ElevateTeamsContainer md={10}>
							<ElevateTeamsContainerInner>
								<Col md={12}>
									<ElevateTeamsTitle>
										<p>{t.subtitle}</p>
									</ElevateTeamsTitle>
								</Col>
								<StartCol md={6} className="elevate-col">
									<div>
										<p>{t.title}</p>
										<button>{t.cta}</button>
									</div>
								</StartCol>
								<EndCol md={6} className="elevate-col">
									<span>
										<p>{t.description}</p>
									</span>
								</EndCol>

								<ElevateTeamsImage>
									<Image src={"/Group 31.png"} alt={""} width={612} height={119} />
								</ElevateTeamsImage>
							</ElevateTeamsContainerInner>
						</ElevateTeamsContainer>
					</Row>
				</Section>
			</ElevateTeams>
		</>
	);
};

export default ElevateTeamsSection;
