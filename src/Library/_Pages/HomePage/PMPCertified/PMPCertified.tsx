// import Image from "next/image";
import React from "react";
import { PMPCertifiedTranslation } from "../../../../../messages/home/PMPCertified/PMPCertified.translation";
import {
	PMPCertifiedCol,
	PMPCertifiedContainer,
	PMPCertifiedHeader,
	PMPCertifiedHeaderFooter,
	PMPCertifiedSection,
	PMPCertifiedSectionContainer,
	PMPCertifiedSectionHeader,
	PMPCertifiedTitle,
} from "./PMPCertified.styles";
import PMPCertifiedCardInner from "./PMPCertifiedCardInner";
import { Col, Row, Section } from "@/Grids";
import { Locale } from "@/Library/Globals";

const PMPCertified = ({ locale }: Locale) => {
	const t = locale === "en" ? PMPCertifiedTranslation.en : PMPCertifiedTranslation.ar;
	return (
		<>
			<PMPCertifiedSection>
				<PMPCertifiedSectionContainer locale={locale}>
					{/* <Image
						className="lightening-svg"
						src={"/Frame 533 (1).svg"}
						alt={""}
						height={496}
						width={496}
					/> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="496"
						height="496"
						viewBox="0 0 496 496"
						fill="none"
						className="lightening-svg"
					>
						<path
							d="M67.1668 51.6667V15.5L20.6667 72.3333H56.8334V108.5L103.333 51.6667L67.1668 51.6667Z"
							fill="#473b77"
						/>

						<path
							d="M191.167 51.6667V15.5L144.667 72.3333H180.833V108.5L227.333 51.6667L191.167 51.6667Z"
							fill="#473b77"
						/>

						<path
							d="M315.167 51.6667V15.5L268.667 72.3333H304.833V108.5L351.333 51.6667L315.167 51.6667Z"
							fill="#473b77"
						/>

						<path
							d="M439.167 51.6667V15.5L392.667 72.3333H428.833V108.5L475.333 51.6667L439.167 51.6667Z"
							fill="#473b77"
						/>

						<path
							d="M67.1668 175.667V139.5L20.6667 196.333H56.8334V232.5L103.333 175.667L67.1668 175.667Z"
							fill="#473b77"
						/>

						<path
							d="M191.167 175.667V139.5L144.667 196.333H180.833V232.5L227.333 175.667L191.167 175.667Z"
							fill="#473b77"
						/>

						<path
							d="M315.167 175.667V139.5L268.667 196.333H304.833V232.5L351.333 175.667L315.167 175.667Z"
							fill="#473b77"
						/>

						<path
							d="M439.167 175.667V139.5L392.667 196.333H428.833V232.5L475.333 175.667L439.167 175.667Z"
							fill="#473b77"
						/>

						<path
							d="M67.1668 299.667V263.5L20.6667 320.333H56.8334V356.5L103.333 299.667L67.1668 299.667Z"
							fill="#473b77"
						/>

						<path
							d="M191.167 299.667V263.5L144.667 320.333H180.833V356.5L227.333 299.667L191.167 299.667Z"
							fill="#473b77"
						/>

						<path
							d="M315.167 299.667V263.5L268.667 320.333H304.833V356.5L351.333 299.667L315.167 299.667Z"
							fill="#473b77"
						/>

						<path
							d="M439.167 299.667V263.5L392.667 320.333H428.833V356.5L475.333 299.667L439.167 299.667Z"
							fill="#473b77"
						/>

						<path
							d="M67.1668 423.667V387.5L20.6667 444.333H56.8334V480.5L103.333 423.667L67.1668 423.667Z"
							fill="#473b77"
						/>

						<path
							d="M191.167 423.667V387.5L144.667 444.333H180.833V480.5L227.333 423.667L191.167 423.667Z"
							fill="#473b77"
						/>

						<path
							d="M315.167 423.667V387.5L268.667 444.333H304.833V480.5L351.333 423.667L315.167 423.667Z"
							fill="#473b77"
						/>

						<path
							d="M439.167 423.667V387.5L392.667 444.333H428.833V480.5L475.333 423.667L439.167 423.667Z"
							fill="#473b77"
						/>
					</svg>
					<Row>
						<Col md={12} xl={10}>
							<PMPCertifiedSectionHeader md={12}>
								<PMPCertifiedHeader weight={"SemiBold"}>{t.subtitle}</PMPCertifiedHeader>
								<PMPCertifiedTitle>
									<span>{t.title1}</span>
									<br />
									<span>{t.title2}</span>
								</PMPCertifiedTitle>
								<PMPCertifiedHeaderFooter>{t.description}</PMPCertifiedHeaderFooter>
							</PMPCertifiedSectionHeader>
						</Col>
					</Row>
				</PMPCertifiedSectionContainer>
				<Section as={"div"}>
					<PMPCertifiedContainer>
						<PMPCertifiedCol md={7}>
							<PMPCertifiedCardInner
								imgPath="/Frame 555.svg"
								imgHeight={442}
								imgWidth={687}
								ColorHeading={t.box1.first}
								HeadingColor="var(--Main-Yellow, var(--Main-Yellow, #FFD555))"
								WhiteHeading={t.box1.second}
								HeadingWidth={18.625}
								marginBottom={5.69}
								marginTop={16.69}
							/>
						</PMPCertifiedCol>
						<PMPCertifiedCol md={5}>
							<PMPCertifiedCardInner
								imgPath="/Frame 556 (1).svg"
								imgHeight={442}
								imgWidth={450}
								ColorHeading={t.box2.first}
								HeadingColor=" var(--Main-Black, #1d1c1c)"
								WhiteHeading={t.box2.second}
								HeadingWidth={23.8125}
								marginBottom={5.69}
								marginTop={16.69}
								overlay
							/>
						</PMPCertifiedCol>
						<PMPCertifiedCol md={5}>
							<PMPCertifiedCardInner
								imgPath="/Frame 558.svg"
								imgHeight={655}
								imgWidth={449}
								ColorHeading={t.box3.first}
								HeadingColor="var(--Main-Indigo, #4F29F3)"
								WhiteHeading={t.box3.second}
								HeadingWidth={18.625}
								marginBottom={4.94}
								marginTop={25.5}
							/>
						</PMPCertifiedCol>
						<PMPCertifiedCol md={7}>
							<PMPCertifiedCardInner
								imgPath="/Frame 557.svg"
								imgHeight={655}
								imgWidth={686}
								HeadingWidth={18.625}
								marginBottom={4.94}
								marginTop={25.5}
							/>
						</PMPCertifiedCol>
					</PMPCertifiedContainer>
				</Section>
			</PMPCertifiedSection>
		</>
	);
};

export default PMPCertified;
