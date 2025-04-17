import Link from "next/link";
import React from "react";
import { Col, Row } from "@/Grids";
import styles from "@/Spaces";
import { SmallParagraph } from "@/Typography";

const FooterLinks = () => {
	return (
		<>
			<Row as={"ul"}>
				<Col md={4} as={"li"}>
					<ul>
						<li className={styles.marginBottom40}>
							<SmallParagraph weight={"semi-bold"} color={"grey7"}>
								Pages
							</SmallParagraph>
						</li>
						<li className={styles.marginBottom20}>
							<SmallParagraph color={"grey6"}>
								<Link href={"/"}>Home</Link>
							</SmallParagraph>
						</li>{" "}
						<li className={styles.marginBottom20}>
							<SmallParagraph color={"grey6"}>
								<Link href={"/courses/1"}>Courses</Link>
							</SmallParagraph>
						</li>
						<li className={styles.marginBottom20}>
							<SmallParagraph color={"grey6"}>
								<Link href={"/test-your-knowledge"}>Test Your Knowledge</Link>
							</SmallParagraph>
						</li>
						<li className={styles.marginBottom20}>
							<SmallParagraph color={"grey6"}>
								<Link href={"/enterprise"}>Enterprise</Link>
							</SmallParagraph>
						</li>
						<li className={styles.marginBottom20}>
							<SmallParagraph color={"grey6"}>
								<Link href={"/contact"}> Contact US</Link>
							</SmallParagraph>
						</li>
					</ul>
				</Col>
			</Row>
		</>
	);
};

export default FooterLinks;
