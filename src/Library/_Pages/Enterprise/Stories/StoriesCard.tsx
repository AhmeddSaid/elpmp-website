import React from "react";
import { Flexbox } from "@/Grids";
import { Body, Title4 } from "@/Library/Typography/TypographyNew";
import {
	CardImage,
	CardShell,
	LabelStyles,
	ReadMoreCaption,
} from "@/Library/_Pages/Enterprise/Stories/StoriesCard.styles";
import styles from "@/Spaces";
import Rating from "@/UI/Rating/Rating";

const StoriesCard = ({
	bgcolor,
	rate = 5,
	body,
	position,
	title,
	name,
}: {
	bgcolor?: string;
	rate?: number;
	body?: string;
	position?: string;
	title?: string;
	name?: string;
}) => {
	return (
		<>
			<CardShell bgcolor={bgcolor}>
				<div>
					<Rating rating={rate} />
				</div>

				<Body
					weight={"regular"}
					size={"MD"}
					className={`${styles.paddingTop16} ${styles.paddingBottom8}`}
				>
					{body}
				</Body>

				<ReadMoreCaption>Read more</ReadMoreCaption>

				<Flexbox gap={0.5} aligncenter={"center"} className={`${styles.paddingTop32}`}>
					<div className={`${styles.paddingRight8}`}>
						<CardImage
							width={57}
							height={57}
							src={"/fb76a9e104887043296183a0554f752f.png"}
							alt={"img"}
						/>
					</div>
					<div>
						<Title4 weight={"Medium"}>{name}</Title4>
						<LabelStyles className={`${styles.paddingBlock4}`} weight={"Normal"} size={"MD"}>
							{position}
						</LabelStyles>
						<LabelStyles weight={"Normal"} size={"MD"}>
							{title}
						</LabelStyles>
					</div>
				</Flexbox>
			</CardShell>
		</>
	);
};

export default StoriesCard;
