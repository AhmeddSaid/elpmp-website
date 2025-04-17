import React from "react";
import { Body, Title2 } from "@/Library/Typography/TypographyNew";
import { WhyCard } from "@/Library/_Pages/Courses/CourseDetails/WhyElpmp/WhyElpmpCard.styles";
import styles from "@/Spaces";

const WhyElpmpCard = ({ title, body }: { title: string; body: string }) => {
	return (
		<>
			<WhyCard>
				<Title2 className={`${styles.marginBottom24}`} weight={"semibold"}>
					{title}
				</Title2>

				<Body weight={"regular"} size={"MD"}>
					{body}
				</Body>
			</WhyCard>
		</>
	);
};

export default WhyElpmpCard;
