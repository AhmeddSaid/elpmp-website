import React from "react";
import CarouselSuccessStory from "@/Components/CarouselSuccessStory/CarouselSuccessStory";
import { Col, Row, Section } from "@/Grids";
import {
	StoriesContanier,
	StoriesShell,
	Title,
} from "@/Library/_Pages/Enterprise/Stories/Stories.styles";
import styles from "@/Spaces";
import { Heading2 } from "@/Typography";

const Stories = () => {
	return (
		<StoriesShell>
			<Section>
				<div className={`${styles.marginBottom112} ${styles.marginTop72} `}>
					<Row justify={"center"}>
						<Col md={10}>
							<StoriesContanier>
								<div>
									<Title big align={"center"}>
										Success Stories
									</Title>
									<Heading2>Enterprises Transformed by ELPMP.com</Heading2>
								</div>
							</StoriesContanier>

							<div className={`${styles.paddingTop72} `}>
								<CarouselSuccessStory />
							</div>
						</Col>
					</Row>
				</div>
			</Section>

			{/*<CarouselSuccessStory />*/}
		</StoriesShell>
	);
};

export default Stories;
