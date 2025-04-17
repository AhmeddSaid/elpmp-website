"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoriesCard from "@/Library/_Pages/Enterprise/Stories/StoriesCard";

// const items = [
// 	{ id: 1, title: "Item 1" },
// 	{ id: 2, title: "Item 2" },
// 	// ... more items
// ];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
	},
};

const CarouselShell = () => {
	return (
		<Carousel
			arrows={true}
			swipeable={false}
			draggable={false}
			showDots={false}
			responsive={responsive}
			ssr={true}
			infinite={true}
			autoPlay={false}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={["tablet", "mobile"]}
		>
			{/*<StoriesCard />*/}
			{/*<StoriesCard />*/}
			{/*<StoriesCard />*/}
			{/*<StoriesCard />*/}
			{/*<StoriesCard />*/}
			<StoriesCard />
		</Carousel>
	);
};

export default CarouselShell;
