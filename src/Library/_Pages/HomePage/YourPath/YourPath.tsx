import { randomUUID } from "node:crypto";
import React from "react";
import { Col, Row, Section } from "@/Grids";
import LightBulb from "@/Library/Icongraphy/lightBulb/lightBulb";
import {
	YouPathBody,
	YouPathHeader,
	YouPathTitle,
	YourPathShell,
} from "@/Library/_Pages/HomePage/YourPath/YourPath.styles";
import YourPathProgress from "@/Library/_Pages/HomePage/YourPath/YourPathProgress";
import styles from "@/Spaces";

const YourPath = () => {
	return (
		<>
			<Section className={`${styles.paddingTop110} ${styles.paddingBottom416} `}>
				<Row justify={"center"}>
					<Col md={10}>
						<YourPathShell>
							<YouPathTitle>Your Path</YouPathTitle>
							<YouPathHeader>To PMP Certification</YouPathHeader>
							<YouPathBody weight={"Regular"}>
								We demystify the process, offering guided support from first lesson to conquering
								your exam.
							</YouPathBody>

							{[...Array(5)].map((_, index) => {
								return (
									<YourPathProgress
										Body={"Learn & Earn PDUs"}
										icon={<LightBulb />}
										isActive
										numberProgress={index + 1}
										isReversed={index % 2 === 0}
										key={randomUUID()}
									/>
								);
							})}
						</YourPathShell>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default YourPath;
