"use client";
import React from "react";
import ArrowLeft from "@/Library/Icongraphy/ArrowLeft/ArrowLeft";
import ArrowRight from "@/Library/Icongraphy/ArrowRight/ArrowRight";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
} from "@/Library/_Pages/Courses/CourseDetails/WhatTheyAreSaying/WhatTheyAreSaying.styles";

// eslint-disable-next-line
// @ts-ignore
const ButtonRatingGroup = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className="carousel-button-group">
			<ArrowRightIcon className={currentSlide === 0 ? "disable" : ""} onClick={() => next()}>
				<ArrowRight />
			</ArrowRightIcon>
			<ArrowLeftIcon onClick={() => previous()}>
				<ArrowLeft />
			</ArrowLeftIcon>
		</div>
	);
};

export default ButtonRatingGroup;
