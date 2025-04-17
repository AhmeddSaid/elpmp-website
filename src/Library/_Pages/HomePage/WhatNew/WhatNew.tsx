import React from "react";
import { Col, Row, Section } from "@/Grids";
import { Body, Display2, Title1 } from "@/Library/Typography/TypographyNew";
import {
	CardHolder,
	WhatNewHeader,
	WhatNewSection,
} from "@/Library/_Pages/HomePage/WhatNew/WhatNew.styles";
import WhatNewCard from "@/Library/_Pages/HomePage/WhatNew/WhatNewCard";
import WhatNewCardSideImage from "@/Library/_Pages/HomePage/WhatNew/WhatNewCardSideImage";
import styles from "@/Spaces";

const WhatNew = () => {
	return (
		<>
			<WhatNewSection>
				<Section>
					<WhatNewHeader>
						<Title1 weight={"semibold"}>What’s New</Title1>
						<Display2>Expert Articles on PMP Certification</Display2>
						<Body size={"L"} weight={"regular"} as={"p"}>
							Our seasoned experts, with their hands-on project leadership experiences, have curated
							insightful articles for you. Grasp the pulse of the industry and chart your path to a
							promising Project Management career.
						</Body>
					</WhatNewHeader>
					<Row justify={"center"} className={`${styles.marginTop72}`}>
						<Col md={10}>
							<Row as={"ul"}>
								<Col as={"li"} md={12} lg={12} xl={8} className={`${styles.marginBottom21}`}>
									<WhatNewCardSideImage />
								</Col>
								{/*<Col*/}
								{/*	md={7}*/}
								{/*	style={{ backgroundColor: "teal" }}*/}
								{/*	as={"li"}*/}
								{/*	className={`${styles.marginBottom21}`}*/}
								{/*>*/}
								{/*	<WhatNewCard side img={"/Frame 579.png"} height={487} width={437} />*/}
								{/*</Col>*/}
								<CardHolder md={12} xl={4} className={`${styles.marginBottom21}`}>
									<WhatNewCard img={"/Frame 3434.png"} height={332} width={234} />
								</CardHolder>
								<CardHolder md={6} xl={3}>
									<WhatNewCard />
								</CardHolder>
								<CardHolder md={6} xl={3}>
									<WhatNewCard />
								</CardHolder>
								<CardHolder md={6} xl={3}>
									<WhatNewCard />
								</CardHolder>
								<CardHolder md={6} xl={3}>
									<WhatNewCard />
								</CardHolder>
							</Row>
						</Col>
					</Row>
				</Section>
			</WhatNewSection>
		</>
	);
};

export default WhatNew;
