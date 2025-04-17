import Image from "next/image";
import React from "react";
import styles from "./../../../Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Display1 } from "@/Library/Typography/TypographyNew";
import {
	ManagementFooter,
	ManagementFooterBody,
	ManagementFooterTitle,
} from "@/Library/_Pages/HomePage/ManagementSection/ManagementSection.styles";
import {
	SelectYourExamHeader,
	SelectYourExamHeaderSubTitle,
	SelectYourExamSection,
} from "@/Library/_Pages/TestYourKnowledge/SelectYourExam/SelectYourExam.styles";
import SelectYourExamCard from "@/Library/_Pages/TestYourKnowledge/SelectYourExam/SelectYourExamCard";
import { Highlighter } from "@/Typography";

const translations = {
	en: {
		subtitle: "Select Your Certification Exam",
		title: "Choose Your Certification And Let’s Get Started",
		description:
			"Take the first step toward career success. Select your certification exam below and access expert-crafted resources designed to help you thrive.",
		certifications: {
			pmp: "PMP (Project Management Professional)",
			pmiRmp: "PMI-RMP (PMI Risk Management Professional)",
			pmiAcp: "PMI-ACP (PMI Agile Certified Practitioner)",
			pmiPba: "PMI-PBA (PMI Professional in Business Analysis)",
		},
	},
	ar: {
		subtitle: "حدد امتحان الشهادة الخاص بك",
		title: "اختر شهادتك وابدأ رحلتك نحو الإعتماد بثقة!",
		description:
			"ابدأ أولى خطواتك نحو التميز المهني. اختر الشهادة واطلع على امتحاناتنا المتخصصة للتفوق في الاختبار.",
		certifications: {
			pmp: "إدارة المشاريع الاحترافية (PMP)®",
			pmiRmp: "محترف إدارة المخاطر (PMI-RMP)®",
			pmiAcp: "ممارس معتمد في إدارة المشاريع الرشيقة (PMI-ACP)®",
			pmiPba: "شهادة المحترف في تحليل الأعمال (PMI-PBA)",
		},
	},
};

const SelectYourExam = ({ locale }: Locale) => {
	const t = translations[locale];
	const data = [
		{ exam: "PMP", examFullName: t.certifications.pmp },
		{
			exam: "PMI-RMP",
			examFullName: t.certifications.pmiRmp,
		},
		{
			exam: "PMI-PBA",
			examFullName: t.certifications.pmiPba,
		},
		{
			exam: "PMI-ACP",
			examFullName: t.certifications.pmiAcp,
		},
	];

	return (
		<>
			<SelectYourExamSection>
				<Image src={"/dots.svg"} alt={""} fill objectFit="cover" />

				<Section as={"div"}>
					<Row justify="center">
						<Col md={10}>
							<SelectYourExamHeader>
								<Highlighter big align={"center"}>
									{t.subtitle}
								</Highlighter>
								<Display1>{t.title}</Display1>
								<SelectYourExamHeaderSubTitle>{t.description}</SelectYourExamHeaderSubTitle>
							</SelectYourExamHeader>

							<Row className={styles.marginTop96}>
								{data.map(item => {
									return (
										<>
											<Col md={6} lg={6} xl={3}>
												<SelectYourExamCard exam={item.exam} examFullName={item.examFullName} />
											</Col>
										</>
									);
								})}
							</Row>
						</Col>
					</Row>
				</Section>
			</SelectYourExamSection>
			<Section>
				<ManagementFooter justify={"space-between"} aligncenter={"center"}>
					<div>
						<ManagementFooterTitle>Ready to level up?</ManagementFooterTitle>
						<ManagementFooterBody weight={"Regular"}>
							Explore our PMP-prep resources today!
						</ManagementFooterBody>
					</div>

					<button>Explore our courses</button>
				</ManagementFooter>
			</Section>
		</>
	);
};

export default SelectYourExam;
