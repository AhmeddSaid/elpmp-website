import Link from "next/link";
import React from "react";
import styles from "./../../../Grids/Spaces.module.css";
import Divider from "@/Library/Components/UI/Divider/Divider";
import { Flexbox } from "@/Library/Grids/Grids";
import { FooterDisclaimerShell, LiStyles } from "@/Library/Shell/Footer/Footer.styles";
import FooterSocialMedia from "@/Library/Shell/Footer/_Components/FooterSocialMedia";
import { SmallParagraph } from "@/Library/Typography/Typography";
import { Body } from "@/Library/Typography/TypographyNew";

const FooterDisclaimer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<Divider className={styles.marginBottom16} color={"grey"} />
			<Flexbox
				className={`${styles.paddingLeft8} ${styles.paddingRight8}  flexDirectionColInResponsive `}
				aligncenter={"center"}
				justify={"space-between"}
				gap={1}
			>
				<Flexbox gap={1} className={"flexDirectionColInResponsive"}>
					<SmallParagraph color={"grey5"}>
						{year} ELPMP.com. &copy; All rights reserved
					</SmallParagraph>
					<Flexbox>
						<SmallParagraph
							color={"grey5"}
							className={`${styles.marginLeft8} ${styles.marginRight8}`}
						>
							•
						</SmallParagraph>
						<SmallParagraph underline color={"grey5"}>
							<Link href={"/terms"}>Terms and Conditions</Link>
						</SmallParagraph>
					</Flexbox>

					<Flexbox>
						<SmallParagraph
							color={"grey5"}
							className={`${styles.marginLeft8} ${styles.marginRight8}`}
						>
							•
						</SmallParagraph>
						<SmallParagraph underline color={"grey5"}>
							<Link href={"/privacy-policy"}>Privacy Policy and Disclaimer</Link>
						</SmallParagraph>
					</Flexbox>
				</Flexbox>
				<FooterSocialMedia />
			</Flexbox>
			<Divider className={styles.marginTop16} color={"grey"} />
			<FooterDisclaimerShell>
				<div>
					<Body lineHeight={"150%"} color={"white"} size={"S"}>
						PMP Certification: A Mark of Excellence in Project Management
					</Body>
					<Body lineHeight={"150%"} className={styles.paddingTop4} color={"gray"} size={"S"}>
						The Project Management Professional (PMP) certification is a globally recognized
						credential offered by the Project Management Institute (PMI) that validates an
						individual s skill and experience in managing projects across various industries. It
						demonstrates the competence to lead and direct projects effectively, using standardized
						and evolving approaches to ensure successful outcomes.{" "}
					</Body>
				</div>
				<div>
					<Body lineHeight={"150%"} color={"white"} size={"S"}>
						Who benefits from the PMP certification?{" "}
					</Body>
					<ul className={styles.paddingTop4}>
						<li>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Project managers seeking professional recognition and career advancement{" "}
							</Body>
						</li>{" "}
						<li>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Individuals transitioning into project management roles
							</Body>
						</li>
						<li>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Professionals within organizations looking to enhance their project management
								skills and knowledge
							</Body>
						</li>
					</ul>
				</div>

				<div>
					<Body lineHeight={"150%"} size={"S"} color={"white"}>
						What are the key benefits of obtaining the PMP certification?
					</Body>

					<ul className={styles.paddingTop4}>
						<LiStyles>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Increased Earning Potential: Studies suggest that PMP-certified individuals tend to
								earn higher salaries compared to their non-certified counterparts.
							</Body>
						</LiStyles>
						<LiStyles>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Enhanced Credibility and Recognition: The PMP certification is widely respected
								within the project management field, demonstrating expertise and commitment to the
								profession.
							</Body>
						</LiStyles>
						<LiStyles>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Improved Job Prospects: Many employers actively seek PMP-certified candidates for
								their project management roles.
							</Body>
						</LiStyles>
						<LiStyles>
							<Body lineHeight={"150%"} size={"S"} color={"gray"}>
								Stronger Networking Opportunities: The PMP community offers valuable networking
								opportunities, connecting individuals with industry professionals.
							</Body>
						</LiStyles>
						<LiStyles>
							<Body lineHeight={"150%"} className={"dots"} size={"S"} color={"gray"}>
								Demonstrated Knowledge and Skills: The certification validates an individual s
								understanding of core project management principles, tools, and techniques.
							</Body>
						</LiStyles>
					</ul>
				</div>
			</FooterDisclaimerShell>
		</>
	);
};

export default FooterDisclaimer;
