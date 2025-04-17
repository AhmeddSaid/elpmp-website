import Image from "next/image";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import OpenBookLarge from "@/Library/Icongraphy/OpenBookLarge/OpenBookLarge";
import { Heading2, Title1, Title2 } from "@/Library/Typography/TypographyNew";
import {
	FocuseBody,
	FocuseCaption,
	FocuseInfo,
	FocusesContanier,
	ImageContanier,
} from "@/Library/_Pages/HomePage/FocusesOn/FocuseOn.styles";
import styles from "@/Spaces";
import { Highlighter } from "@/Typography";
import { StickyScroll } from "@/UI/StickyScroll/StickyScroll";

const translations = {
	en: {
		title: "Ditch the Stress",
		subtitle: "ELPMP.com focuses on",
		subdescription: "deep understanding. practical application.",
		description:
			"Unlike other simulators that prioritize rote memorization and unrealistic pressure We get you exam-ready with:",
		featuresTitle: "Features:",
		features: [
			{
				title: "Learning Mode",
				description:
					"Dive into a vast array of questions with no time pressure. Perfect your knowledge and strategy at a pace that suits you.",
			},
			{
				title: "Practice Mode",
				description:
					"Sharpen your time management with a realistic exam rhythm, boosting your confidence and readiness for the actual PMP exam.",
			},
			{
				title: "Real Exam Mode",
				description:
					"Experience a full-throttle simulation that mirrors the PMP exam environment, honing your skills for the day that counts.",
			},
			{
				title: "Focus on Learning, Not Just Answers",
				description:
					"We don't just tell you the right answer; we explain the why behind it, helping you truly grasp the concepts and avoid similar mistakes.",
			},
		],
		ctaDescription: "Call to Action:",
		cta: "Test Your Knowledge NOW for FREE!",
	},
	ar: {
		title: "تخلص من التوتر",
		subtitle: "في ELPMP.com، نركز على:",
		subdescription: " الفهم العميق والتطبيق العملي.",
		description:
			" على عكس محاكيات الامتحانات الأخرى التي تعتمد على الحفظ والتكرار وخلق ضغوط غير واقعية، نحن نؤهلك للامتحان بفعالية من خلال:",
		featuresTitle: "الميزات:",
		features: [
			{
				title: "وضع التعلم",
				description:
					"استفد من مجموعة متنوعة من الأسئلة دون أي ضغط زمني. خصص وقتك لفهم المفاهيم وتحسين استراتيجياتك بالوتيرة التي تناسبك.",
			},
			{
				title: "وضع الممارسة",
				description:
					"تدرب على إدارة وقتك من خلال محاكاة واقعية لإيقاع الامتحان، مما يعزز ثقتك ويزيد استعدادك لاختبار PMP.",
			},
			{
				title: "وضع الامتحان الحقيقي",
				description:
					"خض تجربة شاملة تحاكي بيئة اختبار PMP الفعلية، لمساعدتك على تعزيز مهاراتك والاستعداد بشكل مثالي ليوم الامتحان.",
			},
			{
				title: "تعلم أكثر من مجرد الإجابات",
				description:
					"نحن نقدم لك أكثر من الإجابة الصحيحة؛ نشرح السبب وراءها، لتمكينك من فهم المفاهيم بشكل أعمق وتجنب الأخطاء المستقبلية.",
			},
		],
		ctaDescription: "دعوة إلى الإجراء:",
		cta: "اختبر معرفتك الآن مجانًا!",
	},
};

const FocusesOn = ({ locale }: Locale) => {
	const t = translations[locale];
	const content = [
		{
			title: (
				<FocuseInfo>
					<OpenBookLarge />
					<Heading2 weight={"SemiBold"}>{t.features[0].title}</Heading2>

					<Title1>{t.features[0].description}</Title1>
				</FocuseInfo>
			),
			content: (
				<ImageContanier>
					<Image fill objectFit="cover" src={"/images/1-Learning-Mode.webp"} alt={""} />
				</ImageContanier>
			),
		},
		{
			title: (
				<FocuseInfo>
					<OpenBookLarge />
					<Heading2 weight={"SemiBold"}>{t.features[1].title}</Heading2>

					<Title1>{t.features[1].description}</Title1>
				</FocuseInfo>
			),
			content: (
				<ImageContanier>
					<Image fill objectFit="cover" src={"/images/2-Advanced-Mode.webp"} alt={""} />
				</ImageContanier>
			),
		},
		{
			title: (
				<FocuseInfo>
					<OpenBookLarge />
					<Heading2 weight={"SemiBold"}>{t.features[2].title}</Heading2>

					<Title1>{t.features[2].description}</Title1>
				</FocuseInfo>
			),
			content: (
				<ImageContanier>
					<Image fill objectFit="cover" src={"/images/3-Real-Exam-Mode.webp"} alt={""} />
				</ImageContanier>
			),
		},
	];

	return (
		<>
			<section className={`${styles.paddingBottom80}  focus-on-section`}>
				<Section>
					<Row justify={"center"}>
						<Col md={10}>
							<FocusesContanier>
								<Title2 weight={"semibold"}>{t.title}</Title2>
								<Highlighter big align={"center"}>
									{t.subtitle}
								</Highlighter>
								<FocuseCaption rtl={locale === "ar"} size="4rem">
									{t.subdescription}
								</FocuseCaption>

								<FocuseBody weight={"SemiBold"}>{t.description}</FocuseBody>
							</FocusesContanier>
							<Row justify={"space-between"} className={`${styles.paddingBottom120}`}>
								<StickyScroll content={content} />
							</Row>
						</Col>
					</Row>
				</Section>
			</section>
		</>
	);
};

export default FocusesOn;
