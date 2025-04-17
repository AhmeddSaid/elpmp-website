import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoSrc from "../../../../public/ELPMP.com_Logo_2.png";
import Divider from "@/Components/UI/Divider/Divider";
import { Col, Row, Section } from "@/Grids";
// import Logo from "@/Library/Logo/Main/48/Logo";
import { FooterStyles } from "@/Library/Shell/Footer/Footer.styles";
import FooterDisclaimer from "@/Library/Shell/Footer/_Components/FooterDisclaimer";
import FooterLinks from "@/Library/Shell/Footer/_Components/FooterLinks";
import styles from "@/Spaces";
import { SmallParagraph } from "@/Typography";

const Footer = () => {
	return (
		<>
			<FooterStyles>
				<Section as={"div"}>
					<Divider className={styles.marginBottom24} color={"grey"} />
					<Row>
						<Col as="ul" md={6}>
							<li>
								{/* <Logo /> */}
								<Image src={logoSrc} alt="ELPMP.com Logo" width={150} />
							</li>
							<li>
								<SmallParagraph
									className={`${styles.marginTop24} ${styles.marginBottom32}`}
									weight={"bold"}
									color={"white"}
								>
									Learn. Practice. Lead.
								</SmallParagraph>
							</li>
							{/*<li>*/}
							{/*	<LanguageSwitcher locale={locale} />*/}
							{/*</li>*/}
							<li>
								<SmallParagraph className={styles.marginBottom20} color={"grey5"}>
									1151 Walker Rd Ste 100 #474
								</SmallParagraph>
							</li>
							<li>
								<SmallParagraph className={styles.marginBottom20} color={"grey5"}>
									Dover, DE 19904
								</SmallParagraph>
							</li>
							<li>
								<SmallParagraph className={styles.marginBottom20} color={"grey5"}>
									<Link href={"mailto:support@elpmp.com"}>support@elpmp.com</Link>
								</SmallParagraph>
							</li>
						</Col>

						<Col md={6}>
							<FooterLinks />
						</Col>
					</Row>

					<FooterDisclaimer />
				</Section>
			</FooterStyles>
		</>
	);
};

export default Footer;
