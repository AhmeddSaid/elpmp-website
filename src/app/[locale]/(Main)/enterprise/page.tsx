import React from "react";
// import topics from "../../../../../DumyData/Topics";
import Faq from "@/Components/FAQ/FAQ";
import { Section } from "@/Grids";
import Benefits from "@/Library/_Pages/Enterprise/ Benefits/ Benefits";
import Challenge from "@/Library/_Pages/Enterprise/Challanges/Challenge";
import EffectiveProject from "@/Library/_Pages/Enterprise/EffectiveProject/EffectiveProject";
import EnterpriseHeroSection from "@/Library/_Pages/Enterprise/EnterpriseHero/EnterpriseHero";
import MoreQuestion from "@/Library/_Pages/Enterprise/HaveMoreQuestion/MoreQuestion";
import Partner from "@/Library/_Pages/Enterprise/Partner/Partner";
import Stories from "@/Library/_Pages/Enterprise/Stories/Stories";
import { EnterpriseFAQSection, FaqHeading } from "@/Library/_Pages/contact/Contact.styles";

const Page = ({ params }: { params: { locale: "en" | "ar" } }) => {
	return (
		<>
			<EnterpriseHeroSection
				locale={params.locale}
				Highlight={"Elevate Your Project Management"}
				title={"Invest in Enterprise-Wide PMP Excellence"}
				subTitle={
					"Transform your organization's project outcomes with comprehensive PMP training solutions tailored to your needs."
				}
				button={"Let's talk"}
				lines
				image={"/images/Enterprise-page.webp"}
			/>
			<Challenge />
			<EffectiveProject />
			<Benefits />
			<Stories />
			<Partner />
			<EnterpriseFAQSection as={"section"}>
				<FaqHeading align={"center"}>Frequently Asked Questions</FaqHeading>
				<Section>
					<Faq locale={params.locale} />
				</Section>
			</EnterpriseFAQSection>

			<MoreQuestion />
		</>
	);
};

export default Page;
