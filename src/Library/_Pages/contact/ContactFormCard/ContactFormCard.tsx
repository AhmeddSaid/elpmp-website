import { useTranslations } from "next-intl";
import React from "react";
import { Body, Title2 } from "@/Library/Typography/TypographyNew";

import {
	FormCardShell,
	InputContainer,
	InputStyles,
	LabelStyles,
	NameContainer,
	TeaxAreaStyles,
} from "@/Library/_Pages/contact/ContactFormCard/ContactFormCard.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";

const ContactFormCard = () => {
	const t = useTranslations("ContactUs.Form");
	return (
		<>
			<FormCardShell>
				<Title2 className={`${styles.paddingTop48} ${styles.paddingBottom48}`} weight={"semibold"}>
					{t("Title")}
				</Title2>

				<InputContainer>
					<NameContainer>
						<div>
							<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
								{t("Labels.firstName")}
							</LabelStyles>

							<InputStyles type={"text"} />
						</div>
						<div>
							<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
								{t("Labels.lastName")}
							</LabelStyles>
							<InputStyles type={"text"} />
						</div>
					</NameContainer>
					<div>
						<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
							{t("Labels.Label2")}
						</LabelStyles>

						<InputStyles type={"text"} />
					</div>
					<div>
						<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
							{t("Labels.Label3")}
						</LabelStyles>

						<InputStyles type={"text"} />
					</div>
					{/* <div>
						<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
							{t("Labels.Label4")}
						</LabelStyles>

						<InputStyles type={"text"} />
					</div> */}
					<div>
						<LabelStyles className={` ${styles.paddingBottom8}`} size={"L"} weight={"MD"}>
							{t("Labels.Label5")}
						</LabelStyles>

						<TeaxAreaStyles />
					</div>

					<div className={styles.paddingTop16}>
						<Button body={t("Button")} />
					</div>
					<Body className={styles.paddingTop} size={"MD"} weight={"regular"}>
						{t("Hint")}
					</Body>
				</InputContainer>
			</FormCardShell>
		</>
	);
};

export default ContactFormCard;
