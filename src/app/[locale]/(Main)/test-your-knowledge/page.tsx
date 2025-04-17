import React from "react";
// import topics from "../../../../../DumyData/Topics";
import styles from "./../../../../Library/Grids/Spaces.module.css";
import Faq from "@/Components/FAQ/FAQ";
import { Section } from "@/Grids";
import { Locale } from "@/Library/Globals";
import EnterpriseHeroSection from "@/Library/_Pages/Enterprise/EnterpriseHero/EnterpriseHero";
import MoreQuestion from "@/Library/_Pages/Enterprise/HaveMoreQuestion/MoreQuestion";
import ReadySection from "@/Library/_Pages/Enterprise/ReadySection/ReadySection";
import Stories from "@/Library/_Pages/Enterprise/Stories/Stories";
import ConfidenceSection from "@/Library/_Pages/HomePage/ConfidenceSection/ConfidenceSection";
import WhyElpmpStands from "@/Library/_Pages/HomePage/WhyElpmpStands/WhyElpmpStands";
import ExamModes from "@/Library/_Pages/TestYourKnowledge/ExamModes/ExamModes";
import SelectYourExam from "@/Library/_Pages/TestYourKnowledge/SelectYourExam/SelectYourExam";
import UniqueFeatures from "@/Library/_Pages/TestYourKnowledge/UniqueFeatures/UniqueFeatures";
import { EnterpriseFAQSection, FaqHeading } from "@/Library/_Pages/contact/Contact.styles";

const translations = {
	en: {
		title: "Conquer Your Certification Exam",
		subtitle: "Train With the Best Simulator",
		description:
			"Prepare for real-world project management success with our expertly crafted, constantly updated PMBOK®-aligned exam simulator.",
	},
	ar: {
		title: "استعد لاختبارك بثقة",
		subtitle: "تدرب باستخدام المحاكي الأفضل.",
		description:
			"تدرب على النجاح في إدارة المشاريع الواقعية مع محاكي الاختبارات المحدث باستمرار والمتوافق مع دليل PMBOK®.",
	},
};

const Page = ({ params }: { params: Locale }) => {
	const locale = params.locale;
	const t = translations[locale];
	return (
		<>
			<EnterpriseHeroSection
				locale={locale}
				Highlight={t.title}
				title={t.subtitle}
				subTitle={t.description}
				button={"Start Your Free Simulator Trial Now"}
				lines={true}
				image={"/images/Test-you-Knowledge.webp"}
			/>
			<ExamModes locale={locale} />
			<ConfidenceSection locale={locale} />
			<UniqueFeatures locale={locale} />
			<SelectYourExam locale={locale} />
			<WhyElpmpStands grayHighLight locale={locale} />
			<Section className={styles.marginBottom80}>
				<ReadySection title={t.title} body={t.description} cta={t.subtitle} />
			</Section>
			<Stories />
			<EnterpriseFAQSection>
				<FaqHeading align={"center"}>Frequently Asked Questions</FaqHeading>
				<Section as={"div"}>
					<Faq locale={params.locale} />
				</Section>
			</EnterpriseFAQSection>

			<MoreQuestion />
		</>
	);
};

export default Page;
