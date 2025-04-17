import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Grids";
// import CoinBase from "@/Library/Icongraphy/CoinBase/CoinBase";
// import Stripe from "@/Library/Icongraphy/Stripe/Stripe";
import UserGroup from "@/Library/Icongraphy/UserGroup/UserGroup";

import {
	LogosContainer,
	PartnerCaption,
	PartnerContainer,
	PartnerLogo,
	PartnerShell,
	PartnerTittle,
} from "@/Library/_Pages/Enterprise/Partner/Partner.styles";
import styles from "@/Spaces";
import { Heading3 } from "@/Typography";

const Partner = () => {
	const t = useTranslations("Enterprise.Partner");
	return (
		<>
			<Section>
				<Row justify={"center"} className={`${styles.paddingTop48} ${styles.paddingBottom96}`}>
					<Col md={10}>
						<PartnerShell>
							<Row justify="center">
								<Col lg={6}>
									<PartnerContainer>
										<UserGroup />

										<div className={styles.marginBottom48}>
											<PartnerTittle>{t("Title")}</PartnerTittle>
											<Heading3 className={`${styles.paddingTop16} ${styles.paddingBottom40}`}>
												{t("Heading")}
											</Heading3>
											<PartnerCaption>{t("Body")}</PartnerCaption>
										</div>
									</PartnerContainer>
								</Col>

								<Col lg={6}>
									<div>
										<LogosContainer justify={"center"}>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/dell-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <Stripe /> */}
													<Image src="/images/emirates-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/aramco-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/enppi-logo.svg" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/adnoc-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/microsoft-logo.svg" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>{" "}
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/vodafone-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>{" "}
											<Col xs={12} sm={6} className={`${styles.paddingBottom16} `}>
												<PartnerLogo>
													{/* <CoinBase /> */}
													<Image src="/images/fawry-logo.png" alt="" width={400} height={400} />
												</PartnerLogo>
											</Col>
										</LogosContainer>
									</div>
								</Col>
							</Row>
						</PartnerShell>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default Partner;
