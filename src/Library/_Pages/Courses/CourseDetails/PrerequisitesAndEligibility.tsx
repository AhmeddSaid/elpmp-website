import React from "react";
import {
	PMPPrerequisitesAR,
	PMPPrerequisitesEN,
} from "../../../../../messages/Courses/Prerequisites";
import { Col, Flexbox, Row } from "@/Grids";
import { Locale } from "@/Library/Globals";
import CheckmarkGrey24 from "@/Library/Icongraphy/Checkmark/CheckmarkGrey24";
import { PrerequisitesAndEligibilitySection } from "@/Library/_Pages/Courses/CourseDetails/CourseDetails.styles";
import styles from "@/Spaces";
import { Heading2, Highlighter, TinyParagraph } from "@/Typography";
import Divider from "@/UI/Divider/Divider";
import uuid from "@/Utils/uuid";

const PrerequisitesAndEligibility = ({ locale }: Locale) => {
	const t = locale === "en" ? PMPPrerequisitesEN : PMPPrerequisitesAR;
	return (
		<>
			<PrerequisitesAndEligibilitySection id={"Prerequisites"}>
				<Highlighter className={styles.marginTop8}>{t.title}</Highlighter>
				<Heading2 className={`${styles.paddingTop12} ${styles.paddingBottom48}`} small>
					{t.subtitle}
				</Heading2>

				<Row className={styles.marginBottom64}>
					<Col as={"ul"} md={10}>
						{t.points.map(item => {
							return (
								<Flexbox className={styles.marginBottom12} key={uuid()} as={"li"}>
									<CheckmarkGrey24 className={styles.marginEnd12} />
									<TinyParagraph>{item}</TinyParagraph>
								</Flexbox>
							);
						})}
						{/*<Flexbox*/}
						{/*	aligncenter={"center"}*/}
						{/*	className={styles.marginBottom12}*/}
						{/*	key={uuid()}*/}
						{/*	as={"li"}*/}
						{/*>*/}
						{/*	<CheckmarkGrey24 className={styles.marginEnd12} />*/}
						{/*	<TinyParagraph>*/}
						{/*		For further details, see <FaqLink href={"/contact"}>FAQs.</FaqLink>*/}
						{/*	</TinyParagraph>*/}
						{/*</Flexbox>*/}
					</Col>
				</Row>
				<Divider />
			</PrerequisitesAndEligibilitySection>
		</>
	);
};

export default PrerequisitesAndEligibility;
