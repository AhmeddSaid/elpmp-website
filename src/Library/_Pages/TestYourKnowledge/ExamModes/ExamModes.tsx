import React from "react";
import { SubTitleHolder } from "../../HomePage/WhyElpmpStands/WhyElpmpStands.styles";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import ChartBarIcon from "@/Library/Icongraphy/ChartBarIcon/ChartBarIcon";
import ClipboardCheck from "@/Library/Icongraphy/Clipboard-check/Clipboard-check";
import ClockIcon from "@/Library/Icongraphy/ClockIcon/ClockIcon";
import {
	ExamModesHeaderCaption,
	ExamModesSection,
	ItemsHolder,
} from "@/Library/_Pages/TestYourKnowledge/ExamModes/ExamModes.styles";
import ExamModesCard from "@/Library/_Pages/TestYourKnowledge/ExamModes/ExamModesCard";
import { Highlighter } from "@/Typography";

const translations = {
	en: {
		subHeading: "Three Exam Modes",
		sectionHeading: "to Master Your Certification Exam",
		modes: {
			learningMode: {
				title: "Learning Mode",
				description1:
					"Perfect your knowledge without time pressure. Practice Mode allows you to dive deep into each question, providing detailed explanations and insights for every answer.",
				description2:
					"Ideal for building foundational knowledge and understanding the reasoning behind each answer.",
			},
			advancedMode: {
				title: "Advanced Mode",
				description1:
					"Simulate real exam conditions with timed sessions. This mode helps you manage your time effectively, ensuring you complete the exam within the allotted time.",
				description2:
					"Enhances your time management skills and boosts your confidence in handling exam pressure.",
			},
			realExamMode: {
				title: "Real-Exam Mode",
				description1:
					"Push your limits with our most rigorous setting. Real-Exam Mode presents a series of difficult questions under exam-like conditions, perfect for final-stage preparation.",
				description2:
					"Prepares you for the toughest questions, ensuring you’re ready for anything on exam day.",
			},
		},
	},
	ar: {
		subHeading: "ثلاثة طرق تدريب",
		sectionHeading: "لتعزيز أدائك في الإختبار الحقيقي",
		modes: {
			learningMode: {
				title: "وضع التعلم",
				description1:
					"حسّن مهاراتك في بيئة خالية من ضغط الوقت، فرصة مثالية لتوسيع معرفتك مع شروحات تفصيلية لكل سؤال وإجابة.",
				description2: "مصمم لتأسيس قاعدة معرفية متينة وتوضيح منطق الإجابات.",
			},
			advancedMode: {
				title: "الوضع المتقدم",
				description1:
					"تجربة محاكاة لظروف الاختبار الفعلي، تهدف إلى تدريبك على تنظيم وقتك بكفاءة لإكمال الاختبار في الوقت المحدد.",
				description2: "تطور مهاراتك في إدارة الوقت وتجعلك أكثر استعدادًا لمواجهة ضغط الامتحان.",
			},
			realExamMode: {
				title: "وضع الامتحان الواقعي",
				description1:
					"تحدَّ نفسك بأصعب بيئة اختبارية. يقدم هذا الوضع أسئلة دقيقة وصعبة تحت ظروف مطابقة تمامًا للاختبار النهائي، مما يجعله الأنسب للتحضير الأخير.",
				description2: "يضمن قدرتك على الإجابة على أصعب الأسئلة بثقة أثناء الاختبار.",
			},
		},
	},
};

const ExamModes = ({ locale }: Locale) => {
	const t = translations[locale];
	return (
		<>
			<ExamModesSection>
				<Section>
					<Row justify={"center"}>
						<Col md={10}>
							<SubTitleHolder>
								<Highlighter big>{t.subHeading}</Highlighter>
							</SubTitleHolder>
							<ExamModesHeaderCaption>{t.sectionHeading}</ExamModesHeaderCaption>
							<ItemsHolder as={"ul"}>
								<Col as={"li"} lg={4}>
									<ExamModesCard
										icon={<ClipboardCheck />}
										heading={t.modes.learningMode.title}
										title1={t.modes.learningMode.description1}
										title2={t.modes.learningMode.description2}
									/>
								</Col>
								<Col as={"li"} lg={4}>
									<ExamModesCard
										icon={<ClockIcon />}
										heading={t.modes.advancedMode.title}
										title1={t.modes.advancedMode.description1}
										title2={t.modes.advancedMode.description2}
									/>
								</Col>
								<Col as={"li"} lg={4}>
									<ExamModesCard
										icon={<ChartBarIcon />}
										heading={t.modes.realExamMode.title}
										title1={t.modes.realExamMode.description1}
										title2={t.modes.realExamMode.description2}
									/>
								</Col>
							</ItemsHolder>
						</Col>
					</Row>
				</Section>
			</ExamModesSection>
		</>
	);
};

export default ExamModes;
