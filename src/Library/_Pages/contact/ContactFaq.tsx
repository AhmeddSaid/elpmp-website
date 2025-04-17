import React from "react";
// import topics from "../../../../DumyData/Topics";
import Faq from "@/Components/FAQ/FAQ";
import { Section } from "@/Grids";
import { FaqHeading, FAQSection } from "@/Library/_Pages/contact/Contact.styles";

const ContactFaq = ({ params }: { params: { locale: "en" | "ar" } }) => {
	return (
		<>
			<FAQSection>
				<FaqHeading align={"center"}>Frequently Asked Questions</FaqHeading>
				<Section>
					<Faq locale={params.locale} />
				</Section>
			</FAQSection>
		</>
	);
};

export default ContactFaq;
