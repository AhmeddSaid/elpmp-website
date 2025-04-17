import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./../../Library/Grids/Spaces.module.css";
import { Col, Flexbox, Row, Section } from "@/Grids";
import { Heading1 } from "@/Library/Typography/TypographyNew";
import { BigParagraph } from "@/Typography";
import Button from "@/UI/Button/Button";

export default function NotFound() {
	return (
		<Section className={styles.marginTop48}>
			<Row justify={"center"}>
				<Col md={10}>
					<Flexbox gap={1} aligncenter={"center"} style={{ flexDirection: "column" }}>
						<Image src={"/404.png"} alt={"Not found"} width={272} height={282} />
						<Heading1>404</Heading1>
						<BigParagraph>Opps! Page Not Found</BigParagraph>
						<Link href="/">
							<Button body={"Return Home"} />
						</Link>
					</Flexbox>
				</Col>
			</Row>
		</Section>
	);
}
