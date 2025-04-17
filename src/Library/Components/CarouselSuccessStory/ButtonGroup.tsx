"use client";
import React from "react";
import { ButtonOne, ButtonTwo } from "@/Components/CarouselSuccessStory/ButtonCarouse.styles";
import LeftArrow from "@/Library/Icongraphy/LeftArrow/LeftArrow";
import RightArrow from "@/Library/Icongraphy/RightArrow/RightArrow";

// eslint-disable-next-line
// @ts-ignore
const ButtonGroup = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;

	return (
		<div className="carousel-button-group">
			<ButtonOne className={currentSlide === 0 ? "disable" : ""} onClick={() => next()}>
				<RightArrow active={currentSlide === 9} />
			</ButtonOne>
			<ButtonTwo onClick={() => previous()}>
				<LeftArrow active={currentSlide === 5} />
			</ButtonTwo>
		</div>
	);
};

export default ButtonGroup;
