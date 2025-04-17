import React, { ReactNode } from "react";
import {
	ExamModesCardContainer,
	ExamModesCardHeading,
	ExamModesCardTitle1,
	ExamModesCardTitle3,
} from "@/Library/_Pages/TestYourKnowledge/ExamModes/ExamModesCard.styles";

const ExamModesCard = ({
	icon,
	heading,
	title1,
	title2,
}: {
	icon: ReactNode;
	heading: string;
	title1: string;
	title2: string;
}) => {
	return (
		<ExamModesCardContainer>
			{icon}
			<ExamModesCardHeading weight={"SemiBold"}>{heading}</ExamModesCardHeading>
			<ExamModesCardTitle1 weight={"Regular"}> {title1}</ExamModesCardTitle1>
			<ExamModesCardTitle3 weight={"med"}>{title2}</ExamModesCardTitle3>
		</ExamModesCardContainer>
	);
};

export default ExamModesCard;
