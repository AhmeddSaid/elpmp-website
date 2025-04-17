import Image from "next/image";
import React, { ReactNode } from "react";
import {
	CardBenefitsBody,
	CardBenefitsContainer,
	CardBenefitsHeading,
} from "@/Library/_Pages/Enterprise/ Benefits/BenefitsCard.styles";

import styles from "@/Spaces";

const BenefitsCard = ({
	title,
	caption,
	icon,
	index,
	headingColor,
	bodyColor,
	cardImage,
}: {
	title: string;
	caption: string;
	icon: ReactNode;
	index: number;
	headingColor?: "main" | "white" | "black";
	bodyColor?: "black" | "white" | "gray";
	cardImage: string;
}) => {
	return (
		<>
			<CardBenefitsContainer index={index}>
				<Image src={cardImage} alt={""} width={450} height={365} />
				{icon}
				<CardBenefitsHeading
					className={`${styles.paddingTop40} ${styles.paddingBottom24} `}
					weight={"SemiBold"}
					headingColor={headingColor}
				>
					{title}
				</CardBenefitsHeading>
				<CardBenefitsBody bodyColor={bodyColor} size={"L"}>
					{caption}
				</CardBenefitsBody>
			</CardBenefitsContainer>
		</>
	);
};

export default BenefitsCard;
