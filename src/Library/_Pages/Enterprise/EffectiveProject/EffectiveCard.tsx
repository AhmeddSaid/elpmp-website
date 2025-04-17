import React, { ReactNode } from "react";
import {
	BgImage,
	CardBody,
	CardContainer,
	CardSubHeading,
} from "@/Library/_Pages/Enterprise/EffectiveProject/EffectiveCard.styles";
import styles from "@/Spaces";

const EffectiveCard = ({
	Icon,
	Heading,
	Body,
}: {
	Icon?: ReactNode;
	Heading: string;
	Body: string;
}) => {
	return (
		<>
			<CardContainer className={`${styles.paddingTop72} ${styles.paddingBottom64} `}>
				<BgImage width={333} height={300} src={"/Ellipse 125.png"} alt={""} />

				<div id={"number"}>{Icon}</div>

				<CardSubHeading>{Heading}</CardSubHeading>
				<CardBody>{Body}</CardBody>
			</CardContainer>
		</>
	);
};

export default EffectiveCard;
