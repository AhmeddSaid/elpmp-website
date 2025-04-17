import Image from "next/image";
import React from "react";
import { Body, Label, Title3 } from "@/Library/Typography/TypographyNew";
import {
	WhatNewCardInner,
	WhatNewCardInnerBody,
	WhatNewCardInnerCaption,
	WhatNewCardInnerHeader,
} from "@/Library/_Pages/HomePage/WhatNew/WhatNewCard.styles";

const WhatNewCard = ({
	side,
	category = "category",
	title = "On The Role Of Fear In High-Performing Teams",
	date = "12-11-2024",
	bodyCaption = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia...",
	img = "/Frame 581.png",
	width = 273,
	height = 193,
}: {
	side?: boolean;
	category?: string;
	title?: string;
	date?: string;
	bodyCaption?: string;
	img?: string;
	width?: number;
	height?: number;
}) => {
	return (
		<WhatNewCardInner side={side}>
			<Image src={img} width={width} height={height} alt={""} />

			<WhatNewCardInnerCaption>
				<WhatNewCardInnerHeader side={side}>
					<button>{category}</button>
					<Title3 weight={"semibold"}>{title}</Title3>
					<p>{date}</p>
				</WhatNewCardInnerHeader>

				<WhatNewCardInnerBody side={side}>
					<Body size={"MD"} weight={"regular"}>
						{bodyCaption}
					</Body>
					<Label weight={"MD"} size={"MD"} variant={"primary"}>
						Continue reading
					</Label>
				</WhatNewCardInnerBody>
			</WhatNewCardInnerCaption>
		</WhatNewCardInner>
	);
};

export default WhatNewCard;
