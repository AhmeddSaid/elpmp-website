"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import ButtonGroup from "@/Components/CarouselSuccessStory/ButtonGroup";
import Dot from "@/Components/CustomDots/CustomDots";
import StoriesCard from "@/Library/_Pages/Enterprise/Stories/StoriesCard";
import "react-multi-carousel/lib/styles.css";
import styles from "@/Spaces";

const CarouselSuccessStory = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1230 },
			items: 3,
			partialVisibilityGutter: 30,
		},
		tablet: {
			breakpoint: { max: 1230, min: 680 },
			partialVisibilityGutter: 30,
			items: 2,
		},
		mobile: {
			breakpoint: { max: 680, min: 0 },
			partialVisibilityGutter: 40,
			items: 1,
		},
	};

	return (
		<>
			<Carousel
				responsive={responsive}
				additionalTransfrom={0}
				arrows={false}
				customButtonGroup={<ButtonGroup />}
				autoPlaySpeed={3000}
				className={`${styles.paddingBottom64}`}
				customDot={<Dot />}
				containerClass="container"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				partialVisible
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				centerMode={false}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots
				sliderClass=""
				slidesToSlide={1}
				swipeable
			>
				<StoriesCard
					name={"ahmed"}
					body={
						"pengemasan dan pengiriman cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti\n"
					}
					position={"Project manager"}
					title={"Space X"}
					rate={4}
				/>
				<StoriesCard
					name={"aly"}
					body={"pengemasan dan pengiriman cepet banget cuma sehari, rasanya gi"}
					position={"Project manager"}
					title={"Space X"}
					rate={4}
				/>
				<StoriesCard
					name={"ahmed farouk"}
					body={"pengemasan dan  cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti"}
					position={"Project manager"}
					title={"Space X"}
					rate={4}
				/>
				<StoriesCard
					body={
						"pengemasan dan pengiriman cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti"
					}
					position={"Project manager"}
					title={"Space X"}
					rate={2}
					name={"ahmed"}
				/>
				<StoriesCard
					name={"ahmed"}
					body={"pengemasan dan  rasanya gaperlu ditanya udah pasti..."}
					position={"Project manager"}
					title={" X"}
					rate={4}
				/>
			</Carousel>
		</>
	);
};

export default CarouselSuccessStory;
