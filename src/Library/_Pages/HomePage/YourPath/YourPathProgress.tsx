import React, { ReactNode } from "react";
import { Heading2 } from "@/Library/Typography/TypographyNew";
import {
	ProgressBody,
	ProgressBodyContainer,
	ProgressContainer,
	ProgressIconContainer,
	ProgressNumber,
	ProgressNumberInner,
} from "@/Library/_Pages/HomePage/YourPath/YourPathProgress.styles";

const YourPathProgress = ({
	isReversed,
	numberProgress,
	isActive,
	icon,
	Body,
}: {
	isReversed: boolean;
	numberProgress: number;
	isActive?: boolean;
	icon: ReactNode;
	Body: string;
}) => {
	return (
		<ProgressContainer justify={"center"} aligncenter={"center"}>
			<ProgressBodyContainer isActive={isActive} md={4} order={isReversed ? 1 : 3}>
				<ProgressBody isActive={isActive}>{Body}</ProgressBody>
			</ProgressBodyContainer>
			<ProgressNumber md={2}>
				<ProgressNumberInner isActive={isActive}>
					<Heading2 weight={"SemiBold"}>{numberProgress}</Heading2>
				</ProgressNumberInner>
			</ProgressNumber>
			<ProgressIconContainer isActive={isActive} md={4} order={isReversed ? 3 : 1}>
				{icon}
			</ProgressIconContainer>
		</ProgressContainer>
	);
};

export default YourPathProgress;
