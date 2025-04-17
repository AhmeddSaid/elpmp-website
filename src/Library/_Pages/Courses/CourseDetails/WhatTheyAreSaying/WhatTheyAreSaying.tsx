import React from "react";
import Carousel from "react-multi-carousel";
import { Col, Flexbox, Row } from "@/Grids";
import { Locale } from "@/Library/Globals";
import { Heading1, Title3 } from "@/Library/Typography/TypographyNew";
import ButtonStudentWork from "@/Library/_Pages/Courses/CourseDetails/WhatTheyAreSaying/ButtonRatingGroup/ButtonStudentWork";
import {
	WhatTheyAreSayingCaption,
	WhatTheyAreSayingHeader,
	WhatTheyAreSayingShell,
} from "@/Library/_Pages/Courses/CourseDetails/WhatTheyAreSaying/WhatTheyAreSaying.styles";
import StoriesCard from "@/Library/_Pages/Enterprise/Stories/StoriesCard";
import styles from "@/Spaces";
import Rating from "@/UI/Rating/Rating";

import "react-multi-carousel/lib/styles.css";

const WhatTheyAreSaying = ({ locale }: Locale) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			items: 1,
		},
	};

	return (
		<>
			<WhatTheyAreSayingShell
				id={"WhatTheyAreSaying"}
				className={`${styles.marginBottom48} ${styles.marginTop80} ${styles.paddingBottom48} positionRelative `}
			>
				<Flexbox justify={"space-between"}>
					<WhatTheyAreSayingHeader>
						<Heading1>{locale === "en" ? "What they’re saying?" : "ماذا يقولون عنا؟"}</Heading1>

						<Flexbox className={styles.paddingTop8} gap={1}>
							<Flexbox gap={0.35} aligncenter={"center"}>
								<Rating rating={4.7} />

								<Title3 weight={"semibold"}>4.7</Title3>
							</Flexbox>

							<WhatTheyAreSayingCaption weight={"MD"} size={"MD"}>
								(28 ratings)
							</WhatTheyAreSayingCaption>
						</Flexbox>
					</WhatTheyAreSayingHeader>
					{/*<Flexbox aligncenter={"center"} gap={0.5}>*/}
					{/*	<Body size={"MD"} weight={"MD"}>*/}
					{/*		1/7*/}
					{/*	</Body>*/}

					{/*	<Flexbox>*/}
					{/*		<ArroIcon>*/}
					{/*			<ArrowLeft />*/}
					{/*		</ArroIcon>*/}
					{/*		<ArroIcon>*/}
					{/*			<ArrowRight />*/}
					{/*		</ArroIcon>*/}
					{/*	</Flexbox>*/}
					{/*</Flexbox>*/}
				</Flexbox>
				<div className={"CarouselRating"}>
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						customButtonGroup={<ButtonStudentWork locale={locale} />}
						autoPlaySpeed={3000}
						centerMode={false}
						className=""
						containerClass="container"
						dotListClass="CarouselRating"
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
						rtl={locale === "ar"}
						shouldResetAutoplay
						showDots={false}
						sliderClass=""
						slidesToSlide={1}
						swipeable
						responsive={responsive}
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
										body={
											"pengemasan dan pengiriman cepet banget asanya gaperlu ditanya udah pasti\n"
										}
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
										body={
											"pengemasan dan pengiriman cepet banget asanya gaperlu ditanya udah pasti\n"
										}
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
										body={
											"pengemasan dan pengiriman cepet banget asanya gaperlu ditanya udah pasti\n"
										}
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
					</Carousel>
				</div>
			</WhatTheyAreSayingShell>
			{/*<CarouselRatingCards />*/}
		</>
	);
};

export default WhatTheyAreSaying;
