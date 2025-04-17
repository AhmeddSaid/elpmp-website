import React, { ReactNode } from "react";
import {
	UniqueFeaturesCardContainer,
	UniqueFeaturesCardHeading,
	UniqueFeaturesCardTitle,
} from "@/Library/_Pages/TestYourKnowledge/UniqueFeatures/UniqueFeaturesCard.styles";

const UniqueFeaturesCard = ({
	icon,
	heading,
	title,
}: {
	icon: ReactNode;
	heading: string;
	title: string;
}) => {
	return (
		<UniqueFeaturesCardContainer>
			{icon}
			<UniqueFeaturesCardHeading weight={"SemiBold"}>{heading}</UniqueFeaturesCardHeading>
			<UniqueFeaturesCardTitle size={"MD"} weight={"regular"}>
				{title}
			</UniqueFeaturesCardTitle>
		</UniqueFeaturesCardContainer>
	);
};

export default UniqueFeaturesCard;
