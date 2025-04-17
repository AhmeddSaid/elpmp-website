import React, { ReactNode } from "react";
import {
	YourExperienceCardCaption,
	YourExperienceCardInner,
	YourExperienceCardTitle,
} from "@/Library/_Pages/HomePage/YourExperienceSection/YourExperienceCard.styles";

const YourExperienceCard = ({
	Icon,
	Title,
	Caption,
}: {
	Icon: ReactNode;
	Title: string;
	Caption: string;
}) => {
	return (
		<>
			<YourExperienceCardInner>
				{Icon}
				<YourExperienceCardTitle weight={"semibold"}>{Title}</YourExperienceCardTitle>
				<YourExperienceCardCaption size={"MD"} weight={"regular"}>
					{Caption}
				</YourExperienceCardCaption>
			</YourExperienceCardInner>
		</>
	);
};

export default YourExperienceCard;
