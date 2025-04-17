import React from "react";
import { Flexbox } from "@/Grids";
import { Heading1, Title2 } from "@/Library/Typography/TypographyNew";
import { StickyPriceShell } from "@/Library/_Pages/Courses/CourseDetails/StickyPrice/StickyPrice.styles";
import Button from "@/UI/Button/Button";

const StickyPrice = ({ hidden }: { hidden: boolean }) => {
	return (
		<>
			<StickyPriceShell hidden={hidden}>
				<Flexbox aligncenter={"center"} gap={0.5}>
					<Heading1> $200</Heading1>

					<Title2 lineThrough={true} color={"gray"} weight={"Regular"}>
						{" "}
						$200
					</Title2>
				</Flexbox>

				<Button body={"Enroll Now"} size={"lg"} />
			</StickyPriceShell>
		</>
	);
};

export default StickyPrice;
