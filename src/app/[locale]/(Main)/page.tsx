import { Metadata } from "next";
import React from "react";
// import topics from "../../../../DumyData/Topics";
import Faq from "@/Components/FAQ/FAQ";
// import { Timeline } from "@/Components/testAnimation/testAnimation";
import { Section } from "@/Grids";
// import LeadIcon from "@/Library/Icongraphy/LeadIcon/LeadIcon";
// import OpenLamp from "@/Library/Icongraphy/OpenLamp/OpenLamp";
// import PracticeIcon from "@/Library/Icongraphy/PracticeIcon/PracticeIcon";
import { Locale } from "@/Library/Globals";
import ConfidenceSection from "@/Library/_Pages/HomePage/ConfidenceSection/ConfidenceSection";
import ElevateTeamsSection from "@/Library/_Pages/HomePage/ElevateTeamsSection/ElevateTeamsSection";
import FocusesOn from "@/Library/_Pages/HomePage/FocusesOn/FocusesOn";
import HomeHeroSection from "@/Library/_Pages/HomePage/HomeHeroSection/HomeHeroSection";
import ManagementSection from "@/Library/_Pages/HomePage/ManagementSection/ManagementSection";
import OurCourses from "@/Library/_Pages/HomePage/OurCourses/OurCourses";
import OurPriority from "@/Library/_Pages/HomePage/OurPriority/OurPriority";
import PMPCertified from "@/Library/_Pages/HomePage/PMPCertified/PMPCertified";
// import WhatNew from "@/Library/_Pages/HomePage/WhatNew/WhatNew";
import WhyElpmpStands from "@/Library/_Pages/HomePage/WhyElpmpStands/WhyElpmpStands";
import YourExperienceSection from "@/Library/_Pages/HomePage/YourExperienceSection/YourExperienceSection";
import { EnterpriseFAQSection, FaqHeading } from "@/Library/_Pages/contact/Contact.styles";

export async function generateMetadata({ params }: { params: Locale }): Promise<Metadata> {
	const metadata = {
		en: {
			title: "ELPMP.com | Learn. Practice. Lead. | Expert-Led Project Management Training",
			description:
				"Learn. Practice. Lead. Discover ELPMP.com for expert-led PMP, PMI-ACP, PMI-RMP, and more courses. Unlock your project management potential with flexible learning and proven success strategies.",
			keywords:
				"Learn Practice Lead, project management courses, PMP training, PMI-ACP,certification, PMI-RMP preparation, ELPMP.com",
		},
		ar: {
			title: "ELPMP.com | تعلم. مارس. قُد. | تدريب احترافي في إدارة المشاريع بقيادة خبراء",
			description:
				"تعلّم. مارس. قُد. اكتشف ELPMP.com للدورات التدريبية في PMP، PMI-ACP، PMI-RMP والمزيد بقيادة خبراء. استثمر إمكاناتك في إدارة المشاريع مع التعلم المرن واستراتيجيات النجاح المثبتة.",
			keywords:
				"تعلّم مارس قُد, دورات إدارة المشاريع, تدريب PMP, PMI-ACP, الشهادة, التحضير لـ PMI-RMP, ELPMP.com",
		},
	};
	const t = metadata[params.locale];

	return {
		title: t.title,
		description: t.description,
		keywords: t.keywords,
	};
}

export default function Home({ params }: { params: Locale }) {
	// const faq = params.locale === "en" ? topics.en : topics.ar;
	return (
		<>
			<HomeHeroSection locale={params.locale} />
			<YourExperienceSection locale={params.locale} />
			<OurCourses locale={params.locale} />
			<ManagementSection locale={params.locale} />
			<ConfidenceSection locale={params.locale} topSpace />
			<FocusesOn locale={params.locale} />

			{/* <Timeline data={data} /> */}

			<PMPCertified locale={params.locale} />
			<OurPriority locale={params.locale} />
			<WhyElpmpStands locale={params.locale} />
			<ElevateTeamsSection locale={params.locale} />
			<EnterpriseFAQSection>
				<FaqHeading align={"center"}>Frequently Asked Questions</FaqHeading>
				<Section>
					<Faq locale={params.locale} />
				</Section>
			</EnterpriseFAQSection>
			{/* <WhatNew /> */}
		</>
	);
}
