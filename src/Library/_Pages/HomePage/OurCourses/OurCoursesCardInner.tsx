import React from "react";
import CheckmarkLightGrey from "@/Library/Icongraphy/Checkmark/CheckmarkLightGrey";
import {
	CardInner,
	OurCoursesCardCaption,
	OurCoursesCardCaptionList,
	OurCoursesCardCaptionTitle,
	OurCoursesCardImage,
} from "@/Library/_Pages/HomePage/OurCourses/OurCoursesCardInner.styles";

const OurCoursesCardInner = ({
	content,
}: {
	content: { button: string; title: string; SubTitles: string[]; image: string };
}) => {
	return (
		<>
			<CardInner>
				<OurCoursesCardImage src={content.image} alt={""} width={327} height={286} />
				<OurCoursesCardCaption>
					<OurCoursesCardCaptionTitle>{content.title}</OurCoursesCardCaptionTitle>
					<OurCoursesCardCaptionList>
						{content.SubTitles.map(item => (
							<>
								<li>
									<CheckmarkLightGrey />
									<p>{item}</p>
								</li>
							</>
						))}
					</OurCoursesCardCaptionList>
					{/*<Button body={content.button} fullwidth variant={"secondary"} />*/}
				</OurCoursesCardCaption>
			</CardInner>
		</>
	);
};

export default OurCoursesCardInner;
