"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "@/Grids";
import StoriesCard from "@/Library/_Pages/Enterprise/Stories/StoriesCard";
import styles from "@/Spaces";

const CarouselRatingCards = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			partialVisibilityGutter: 100,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			partialVisibilityGutter: 100,
			items: 2,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			partialVisibilityGutter: 100,
			items: 1,
		},
	};
	return (
		<>
			<Carousel
				additionalTransfrom={0}
				arrows
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
				renderButtonGroupOutside={false}
				renderDotsOutside
				responsive={responsive}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots
				sliderClass=""
				slidesToSlide={1}
				swipeable
			>
				<div>
					<Row columnGap={1.25} className={`${styles.marginTop48}`}>
						<Col md={6}>
							<StoriesCard
								name={"ahmed"}
								body={
									"pengemasan dan pengiriman cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti\n"
								}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>

							<StoriesCard
								name={"ahmed"}
								body={
									"pengemasan dan pengiriman cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti\n"
								}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>

							<StoriesCard
								name={"ahmed"}
								body={"pengemasan  gaperlu ditanya udah pasti\n"}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>
						</Col>
						<Col md={6}>
							<StoriesCard
								name={"ahmed"}
								body={
									"pengemasan dan  cepet banget cuma sehari, rasanya gaperlu ditanya udah pasti\n"
								}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>

							<StoriesCard
								name={"ahmed"}
								body={"pengemasan dan pengiriman cepet banget asanya gaperlu ditanya udah pasti\n"}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>

							<StoriesCard
								name={"ahmed"}
								body={"pengemasan dan aperlu ditanya udah pasti\n"}
								position={"Project manager"}
								title={"Space X"}
								rate={4}
								bgcolor={"white"}
							/>
						</Col>
					</Row>
				</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
			</Carousel>
		</>
	);
};

export default CarouselRatingCards;
