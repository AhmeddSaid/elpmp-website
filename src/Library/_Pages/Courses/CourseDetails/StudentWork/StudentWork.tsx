import React from "react";
import Carousel from "react-multi-carousel";
import { Locale } from "@/Library/Globals";
import CompanyIcon from "@/Library/Icongraphy/Companyicon/CompanyIcon";
import Evernote from "@/Library/Icongraphy/Evernote/Evernote";
import Fivetran from "@/Library/Icongraphy/Fivetran/Fivetran";
import Github from "@/Library/Icongraphy/Github/Github";
import Google from "@/Library/Icongraphy/Google/Google";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import {
	StudentCaption,
	StudentWorkContainer,
} from "@/Library/_Pages/Courses/CourseDetails/StudentWork/StudentWork.styles";
import "react-multi-carousel/lib/styles.css";
import ButtonStudentWork from "@/Library/_Pages/Courses/CourseDetails/WhatTheyAreSaying/ButtonRatingGroup/ButtonStudentWork";

const StudentsWorkEN = {
	title: "Student’s Work",
	subtitle: "Our students work at the top leading global organizations",
};

const StudentsWorkAR = {
	title: "إنجازات طلابنا",
	subtitle: "أين يعمل طلابنا؟",
	description: "طلابنا يعملون في كبرى الشركات العالمية الرائدة.",
};

const StudentWork = ({ locale }: Locale) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 5,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			items: 2,
		},
	};
	const Icon = [
		{ icon: <CompanyIcon /> },
		{ icon: <Google /> },
		{ icon: <Evernote /> },
		{ icon: <Fivetran /> },
		{ icon: <Github /> },
	];

	const t = locale === "en" ? StudentsWorkEN : StudentsWorkAR;

	return (
		<>
			<StudentWorkContainer className={"positionRelative"}>
				<Heading1 className="student-work-heading">{t.title}</Heading1>

				<StudentCaption weight={"Medium"}>{t.subtitle}</StudentCaption>

				<Carousel
					additionalTransfrom={0}
					arrows={false}
					customButtonGroup={<ButtonStudentWork locale={locale} />}
					autoPlaySpeed={3000}
					centerMode={false}
					className=""
					containerClass="container"
					dotListClass=""
					draggable
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					pauseOnHover
					renderArrowsWhenDisabled={false}
					renderButtonGroupOutside={true}
					renderDotsOutside={false}
					rewind={false}
					rewindWithAnimation={false}
					rtl={locale === "en"}
					shouldResetAutoplay
					showDots={false}
					sliderClass=""
					slidesToSlide={1}
					swipeable
					responsive={responsive}
				>
					{Icon.map(item => item.icon)}
				</Carousel>
			</StudentWorkContainer>
		</>
	);
};

export default StudentWork;
