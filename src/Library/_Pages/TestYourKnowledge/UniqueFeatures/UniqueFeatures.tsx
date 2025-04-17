import Image from "next/image";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import AcademicCap from "@/Library/Icongraphy/AcademicCap/AcademicCap";
import DataBase from "@/Library/Icongraphy/DataBase/DataBase";
import Presentation from "@/Library/Icongraphy/Presentation/Presentation";
import {
	UniqueFeaturesCaption,
	UniqueFeaturesHeading,
	UniqueFeaturesSection,
} from "@/Library/_Pages/TestYourKnowledge/UniqueFeatures/UniqueFeatures.styles";
import UniqueFeaturesCard from "@/Library/_Pages/TestYourKnowledge/UniqueFeatures/UniqueFeaturesCard";
import bg from "/public/bg-3.svg";

const translations = {
	en: {
		subtitle: "Unique Features",
		title: "Unleash the Full Potential of Your Exam Prep",
		features: {
			adaptiveLearning: {
				title: "Adaptive Learning",
				description:
					"Our simulator adapts to your learning pace and style, ensuring you focus on areas that need improvement.",
			},
			performanceAnalytics: {
				title: "Detailed Performance Analytics",
				description:
					"Track your progress with in-depth analytics highlighting your strengths and improvement areas.",
			},
			questionBank: {
				title: "Vast Question Bank",
				description:
					"Access a comprehensive database of 2,500+ exam-realistic questions, regularly updated to reflect the latest PMI exam changes.",
			},
		},
	},
	ar: {
		subtitle: "ميزات فريدة من نوعها",
		title: "طور إمكانياتك بالكامل للتحضير للاختبار",
		features: {
			adaptiveLearning: {
				title: "التعلم المرن",
				description:
					"يتأقلم محاكي الاختبار مع سرعتك وأسلوبك التعليمي، لضمان تركيزك على النقاط التي تحتاج إلى تحسين.",
			},
			performanceAnalytics: {
				title: "تحليل متكامل لأدائك",
				description: "استخدم التحليلات الدقيقة لمتابعة أدائك ومعرفة المجالات التي تحتاج إلى تحسين.",
			},
			questionBank: {
				title: "بنك أسئلة متجدد",
				description:
					"استمتع بمجموعة ضخمة من 2500+ سؤال دقيق يعكس الاختبار الحقيقي، يتم تحديثها بانتظام لتتوافق مع أحدث معايير PMI.",
			},
		},
	},
};

const UniqueFeatures = ({ locale }: Locale) => {
	const t = translations[locale];
	return (
		<>
			<UniqueFeaturesSection>
				<Image src={bg} alt={""} fill objectFit="cover" />
				<Section>
					<Row justify={"center"}>
						<Col md={10}>
							<UniqueFeaturesHeading>{t.subtitle}</UniqueFeaturesHeading>
							<UniqueFeaturesCaption>{t.title}</UniqueFeaturesCaption>
							<Row as={"ul"}>
								<Col as={"li"} md={4}>
									<UniqueFeaturesCard
										icon={<AcademicCap />}
										heading={t.features.adaptiveLearning.title}
										title={t.features.adaptiveLearning.description}
									></UniqueFeaturesCard>
								</Col>
								<Col as={"li"} md={4}>
									<UniqueFeaturesCard
										icon={<Presentation />}
										heading={t.features.performanceAnalytics.title}
										title={t.features.performanceAnalytics.description}
									></UniqueFeaturesCard>
								</Col>
								<Col as={"li"} md={4}>
									<UniqueFeaturesCard
										icon={<DataBase />}
										heading={t.features.questionBank.title}
										title={t.features.questionBank.description}
									></UniqueFeaturesCard>
								</Col>
							</Row>
						</Col>
					</Row>
				</Section>
			</UniqueFeaturesSection>
		</>
	);
};

export default UniqueFeatures;
