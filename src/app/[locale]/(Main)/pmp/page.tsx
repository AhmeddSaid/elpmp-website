"use client";
import React, { ReactNode, useEffect, useState } from "react";
// import topics from "../../../../../DumyData/Topics";
import Faq from "@/Components/FAQ/FAQ";
import Guarantee from "@/Components/Guarantee/Guarantee"; // import { Timeline } from "@/Components/testAnimation/testAnimation";
import { Col, Row, Section } from "@/Grids"; // import LeadIcon from "@/Library/Icongraphy/LeadIcon/LeadIcon";
// import PracticeIcon from "@/Library/Icongraphy/PracticeIcon/PracticeIcon";
import { Locale } from "@/Library/Globals";
import Curriculum from "@/Library/_Pages/Courses/CourseDetails/Caurriculum/Curriculum";
import CourseCertificate from "@/Library/_Pages/Courses/CourseDetails/CourseCertificate";
import CourseHelpCenter from "@/Library/_Pages/Courses/CourseDetails/CourseHelpCenter/CourseHelpCenter";
import CourseHighlights from "@/Library/_Pages/Courses/CourseDetails/CourseHighLights/CourseHighlights";
import CourseInstructor from "@/Library/_Pages/Courses/CourseDetails/CourseInstructor/CourseInstructor";
import CourseHeader from "@/Library/_Pages/Courses/CourseDetails/CoursesHeader/CourseHeader";
import CoursesCard from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesCard";
import {
	CardContainer,
	PriceContainer,
} from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesCard.styles";
import CoursesHero from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesHero";
import { HeroSection } from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesHero.styles";
import LearningObjectives from "@/Library/_Pages/Courses/CourseDetails/LearningObjectives/LearningObjectives";
import PrerequisitesAndEligibility from "@/Library/_Pages/Courses/CourseDetails/PrerequisitesAndEligibility";
import StickyPrice from "@/Library/_Pages/Courses/CourseDetails/StickyPrice/StickyPrice";
import StudentWork from "@/Library/_Pages/Courses/CourseDetails/StudentWork/StudentWork";
import WhatTheyAreSaying from "@/Library/_Pages/Courses/CourseDetails/WhatTheyAreSaying/WhatTheyAreSaying";
import WhatsInside from "@/Library/_Pages/Courses/CourseDetails/WhatsInside/WhatsInside";
import WhoShouldAttend from "@/Library/_Pages/Courses/CourseDetails/WhoShouldAttend";
import WhyElpmp from "@/Library/_Pages/Courses/CourseDetails/WhyElpmp/WhyElpmp";
import {
	EnterpriseFAQSection,
	FaqHeading,
	TitleHolder,
} from "@/Library/_Pages/contact/Contact.styles";
import { Highlighter } from "@/Typography";
import Divider from "@/UI/Divider/Divider";

const Page = ({ params }: { params: Locale }): ReactNode => {
	const locale = params.locale;
	// const data = [
	// 	{
	// 		title: "Learn",
	// 		content: (
	// 			<div>
	// 				<OpenLamp />
	// 			</div>
	// 		),

	// 		isRight: false,
	// 	},
	// 	{
	// 		title: "Practise",
	// 		content: (
	// 			<div>
	// 				<PracticeIcon />
	// 			</div>
	// 		),
	// 		isRight: true,
	// 	},
	// 	{
	// 		title: "Lead",
	// 		content: (
	// 			<div>
	// 				<LeadIcon />
	// 			</div>
	// 		),
	// 		isRight: false,
	// 	},
	// ];

	const [isHeaderSticky, setIsHeaderSticky] = useState(false);
	const [isPriceSticky, setIsPriceSticky] = useState(false);
	// const [hideCardSticky, setHideCardSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 1200) {
				setIsHeaderSticky(true);
			} else {
				setIsHeaderSticky(false);
			}
		};

		const handleScrollStickPrice = () => {
			const scrollTop2 = window.scrollY;
			if (scrollTop2 > 500) {
				setIsPriceSticky(true);
			} else {
				setIsPriceSticky(false);
			}
		};

		window.addEventListener("scroll", () => {
			handleScroll();
			handleScrollStickPrice();
		});

		return () => {
			window.removeEventListener("scroll", () => {
				handleScroll();
				handleScrollStickPrice();
				// handleCardSticky();
			});
			// window.removeEventListener("scroll", handleScroll);
			// window.removeEventListener("scroll", handleScrollStickPrice);
			// window.removeEventListener("scroll", handleCardSticky);
		};
	}, []);

	return (
		<>
			<CourseHeader hidden={!isHeaderSticky} locale={locale} />
			{/*<StickyPrice hidden={!isPriceSticky} />*/}
			{/*<MobileCourseCard hidden={hideCardSticky}>*/}
			{/*	<Col xl={4}></Col>*/}
			{/*</MobileCourseCard>*/}
			{/*<div id={"aaaa"}>*/}
			{/*	<CoursesHero locale={locale} />*/}
			{/*</div>*/}
			<section className={"positionRelative"} style={{ position: "relative" }}>
				<PriceContainer>
					<StickyPrice hidden={!isPriceSticky} />
				</PriceContainer>

				<HeroSection as={"div"} style={{ position: "relative" }}>
					{/* <Row justify={"center"}>
						<Col md={10}>
							<Timeline data={data} />
						</Col>
					</Row> */}
					<Row justify={"space-between"}>
						<Col>
							<CoursesHero locale={locale} />
						</Col>
						<Col>
							{/* TODO: uncomment */}
							<CardContainer>
								<CoursesCard locale={locale} />
							</CardContainer>
						</Col>
						<Col xl={7}>
							<CourseHighlights locale={locale} />
							<WhyElpmp locale={locale} />
							<WhatsInside locale={locale} />
							<CourseInstructor locale={locale} />
							<WhatTheyAreSaying locale={locale} />
							<Divider />
							<StudentWork locale={locale} />
							<Divider />
							<Curriculum />
							<LearningObjectives locale={locale} />
							<PrerequisitesAndEligibility locale={locale} />
							<WhoShouldAttend locale={locale} />
							<CourseCertificate locale={locale} />
							<Guarantee locale={locale} />
							<EnterpriseFAQSection>
								<TitleHolder>
									<Highlighter>PMP Certification FAQs</Highlighter>
									<FaqHeading width="fit-content" align={"center"}>
										Frequently Asked Questions
									</FaqHeading>
								</TitleHolder>
								<Section>
									<Faq locale={params.locale} />
								</Section>
							</EnterpriseFAQSection>
						</Col>
						{/*<DesktopCourseCard md={3}>*/}
						{/*	<CoursesCard />*/}
						{/*</DesktopCourseCard>*/}
					</Row>
				</HeroSection>
			</section>
			<CourseHelpCenter locale={locale} />
		</>
	);
};

export default Page;
