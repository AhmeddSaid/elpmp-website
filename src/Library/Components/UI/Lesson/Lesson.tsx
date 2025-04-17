import React from "react";
import { Flexbox } from "@/Grids";
import PlayBlueIcon from "@/Library/Icongraphy/PalyBlueIcon/PlayBlueIcon";
import PlayGrayIcon from "@/Library/Icongraphy/PlayGrayIcon/PlayGrayIcon";
import { Body } from "@/Library/Typography/TypographyNew";
import { LessonsBody, PreviewStyles } from "@/UI/Lesson/Lesson.styles";

const Lesson = ({
	isPreview = false,
	name,
	time,
}: {
	isPreview?: boolean;
	name: string;
	time: number;
}) => {
	return (
		<>
			<LessonsBody>
				<Flexbox gap={0.5} aligncenter={"center"}>
					{isPreview ? <PlayBlueIcon /> : <PlayGrayIcon />}
					<Body size={"MD"} weight={"regular"}>
						{name}
					</Body>
				</Flexbox>

				<Flexbox gap={1.5} aligncenter={"center"}>
					{isPreview && (
						<PreviewStyles size={"MD"} weight={"regular"}>
							Preview
						</PreviewStyles>
					)}
					<Body size={"MD"} weight={"MD"}>
						{time}
					</Body>
				</Flexbox>
			</LessonsBody>
		</>
	);
};

export default Lesson;
