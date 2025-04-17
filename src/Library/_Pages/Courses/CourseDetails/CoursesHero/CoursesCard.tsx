import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PMPCourseDetails } from "../../../../../../messages/Courses/CourseCardTranslation";
import { Flexbox } from "@/Grids";
import { Locale } from "@/Library/Globals";
import BlackStar from "@/Library/Icongraphy/BlackStar/BlackStar";
import SafeSheiled2 from "@/Library/Icongraphy/SafeSheiled2/SafeSheiled2";
import XsmallAcademicCap from "@/Library/Icongraphy/XsmallAcademicCap/XsmallAcademicCap";
import XsmallClipboared from "@/Library/Icongraphy/XsmallClipboared/XsmallClipboared";
import XsmallLockOpen from "@/Library/Icongraphy/XsmallLockOPen/XsmallLockOpen";
import XsmallOpenBook from "@/Library/Icongraphy/XsmallOpenBook/XsmallOpenBook";
import XsmallPlay from "@/Library/Icongraphy/XsmallPlay/XsmallPlay";
import XsmallRefresh from "@/Library/Icongraphy/XsmallRefresh/XsmallRefresh";
import {
	Body,
	Display2,
	Heading1,
	Heading2,
	Label,
	Title1,
	Title4,
} from "@/Library/Typography/TypographyNew";
import {
	BeforDiscount,
	CardCoursesBody,
	CarfFotter,
	CourseCardContainer,
	CourseCardShell,
	DiscountContanier,
	EnrollBtn,
	FotterCaption,
	RefundPoliceSpan,
	SmallScreenHeaderInfo,
	SmallScreenInfo,
} from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesCard.styles";
import {
	HeroInstructorName,
	OpacityTitle,
	TotalRating,
} from "@/Library/_Pages/Courses/CourseDetails/CoursesHero/CoursesHero.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";
import Rating from "@/UI/Rating/Rating";

const CoursesCard = ({ locale }: Locale) => {
	const t = locale === "en" ? PMPCourseDetails.en : PMPCourseDetails.ar;
	return (
		<>
			<CourseCardShell locale={locale}>
				<div className={"CourseCardImageContainer"}>
					<div className="overlay">
						<Link href={""}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="88"
								height="88"
								viewBox="0 0 88 88"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M43.9998 79.1998C63.4402 79.1998 79.1998 63.4402 79.1998 43.9998C79.1998 24.5594 63.4402 8.7998 43.9998 8.7998C24.5594 8.7998 8.7998 24.5594 8.7998 43.9998C8.7998 63.4402 24.5594 79.1998 43.9998 79.1998ZM42.0405 31.5388C40.6903 30.6387 38.9543 30.5548 37.5236 31.3204C36.0929 32.0861 35.1998 33.5771 35.1998 35.1998V52.7998C35.1998 54.4225 36.0929 55.9135 37.5236 56.6792C38.9543 57.4449 40.6903 57.3609 42.0405 56.4608L55.2405 47.6608C56.4646 46.8448 57.1998 45.471 57.1998 43.9998C57.1998 42.5287 56.4646 41.1548 55.2405 40.3388L42.0405 31.5388Z"
									fill="white"
								/>
							</svg>
						</Link>
					</div>
					<Image width={368} height={220} src={"/image 2.png"} alt={""} />
				</div>

				<CourseCardContainer>
					<SmallScreenHeaderInfo>
						<Heading2 className={`${styles.paddingTop16}`}>{t.title}</Heading2>

						<Display2 className={`${styles.paddingTop8} ${styles.paddingBottom24}`}>
							{t.subtitle}
						</Display2>

						<Button fullwidth body={"Enroll now "} />
					</SmallScreenHeaderInfo>
					<Flexbox
						className={`${styles.paddingTop8} ${styles.paddingBottom8} `}
						justify={"space-between"}
					>
						<Flexbox gap={0.5} aligncenter={"center"}>
							<Flexbox>
								<Heading1>$</Heading1>
								<Heading1>{t.price.current}</Heading1>
							</Flexbox>
							<DiscountContanier>
								<Title1 weight={"Regular"}> $</Title1>
								<BeforDiscount>{t.price.beforeDiscount}</BeforDiscount>
							</DiscountContanier>
						</Flexbox>
						<Flexbox aligncenter={"center"} gap={0.5}>
							<Flexbox aligncenter={"center"}>
								<BlackStar />
								<Label weight={"MD"} size={"L"}>
									{t.rating.value}
								</Label>
							</Flexbox>

							<Body color="light" size={"MD"} underLine>
								({t.rating.count})
							</Body>
						</Flexbox>
					</Flexbox>

					<SmallScreenInfo>
						<Flexbox gap={0.5}>
							<Rating rating={4.7} />

							<TotalRating className={"totalRating"}>4.7</TotalRating>
							<TotalRating size={"MD"} underLine>
								{t.rating.count}
							</TotalRating>
						</Flexbox>
						<Flexbox aligncenter={"center"} gap={0.38}>
							<OpacityTitle weight={"Regular"}> Instructor:</OpacityTitle>
							<HeroInstructorName>Mustafa Maher</HeroInstructorName>
						</Flexbox>
						<Flexbox aligncenter={"center"} gap={0.25}>
							<Title4 weight={"SemiBold"}>308</Title4>
							<OpacityTitle>Students enrolled</OpacityTitle>
						</Flexbox>
					</SmallScreenInfo>

					<CardCoursesBody>
						<Flexbox gap={1.25}>
							<XsmallOpenBook />
							<Body size={"MD"} weight={"regular"}>
								{t.features[0]}
							</Body>
						</Flexbox>
						<Flexbox gap={1.25}>
							<XsmallPlay />
							<Body size={"MD"} weight={"regular"}>
								{t.features[1]}
							</Body>
						</Flexbox>
						<Flexbox gap={1.25}>
							<XsmallClipboared />
							<Body size={"MD"} weight={"regular"}>
								{t.features[2]}
							</Body>
						</Flexbox>
						<Flexbox gap={1.25}>
							<XsmallAcademicCap />
							<Body size={"MD"} weight={"regular"}>
								{t.features[3]}
							</Body>
						</Flexbox>
						<Flexbox gap={1.25}>
							<XsmallLockOpen />
							<Body size={"MD"} weight={"regular"}>
								{t.features[4]}
							</Body>
						</Flexbox>{" "}
						<Flexbox gap={1.25}>
							<XsmallRefresh />
							<Body size={"MD"} weight={"regular"}>
								{t.features[5]}
							</Body>
						</Flexbox>
					</CardCoursesBody>

					<div className={`${styles.paddingTop16} ${styles.paddingBottom16}`}>
						<EnrollBtn fullwidth={true} body={t.buttons.enrollNow} />
					</div>
				</CourseCardContainer>
				<CarfFotter aligncenter={"center"}>
					<SafeSheiled2 />
					<FotterCaption size={"S"}>
						{/*You can always ask for a <RefundSpan>refund</RefundSpan> if you’re not happy, as long as*/}
						{/*you meet our*/}

						{t.footer.text}
						<RefundPoliceSpan href={"#"}>{t.footer.refundPolicy}</RefundPoliceSpan>
					</FotterCaption>
				</CarfFotter>
			</CourseCardShell>
		</>
	);
};

export default CoursesCard;
