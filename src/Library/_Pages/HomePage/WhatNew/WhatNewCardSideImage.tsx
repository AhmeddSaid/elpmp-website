import React from "react";
import { Body, Heading2, Label } from "@/Library/Typography/TypographyNew";
import {
	WhatNewCardInnerBody,
	WhatNewCardInnerCaption,
	WhatNewCardInnerHeader,
	WhatNewCardSideContainer,
	WhatNewCardSideImg,
} from "@/Library/_Pages/HomePage/WhatNew/WhatNewCard.styles";

const WhatNewCardSideImage = () => {
	return (
		<>
			<WhatNewCardSideContainer aligncenter={"start"}>
				<WhatNewCardSideImg
					src={"/206f7241631167e3f7b19b537be69461.png"}
					height={487}
					width={437}
					alt={""}
				/>
				<WhatNewCardInnerCaption>
					<WhatNewCardInnerHeader side>
						<button>Category</button>
						<Heading2 weight={"SemiBold"}>On The Role Of Fear In High-Performing Teams</Heading2>
						<p>12-11-2024</p>
					</WhatNewCardInnerHeader>

					<WhatNewCardInnerBody side>
						<Body size={"MD"} weight={"regular"}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet. Velit officia consequat duis enim velit est sit aliqua dolor do amet sint
						</Body>
						<Label weight={"MD"} size={"MD"} variant={"primary"}>
							Continue reading
						</Label>
					</WhatNewCardInnerBody>
				</WhatNewCardInnerCaption>
			</WhatNewCardSideContainer>
		</>
	);
};

export default WhatNewCardSideImage;
