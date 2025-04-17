"use client";
import React from "react";
import ArrowLeft from "@/Library/Icongraphy/ArrowLeft/ArrowLeft";
import ArrowRight from "@/Library/Icongraphy/ArrowRight/ArrowRight";
import {
	ArrowLeftStudentWorkIcon,
	ArrowRightStudentWorkIcon,
} from "@/Library/_Pages/Courses/CourseDetails/StudentWork/StudentWork.styles";

// eslint-disable-next-line
// @ts-ignore
const ButtonStudentWork = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, locale, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className="carousel-button-group">
			<ArrowRightStudentWorkIcon
				locale={locale}
				className={currentSlide === 0 ? "disable" : ""}
				onClick={() => next()}
			>
				<ArrowRight />
			</ArrowRightStudentWorkIcon>
			<ArrowLeftStudentWorkIcon locale={locale} onClick={() => previous()}>
				<ArrowLeft />
			</ArrowLeftStudentWorkIcon>
		</div>
	);
};

export default ButtonStudentWork;
