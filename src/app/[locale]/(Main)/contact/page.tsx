import React from "react";
// import ContactFaq from "@/Library/_Pages/contact/ContactFaq";
import ContactHero from "@/Library/_Pages/contact/ContactHero";

const Page = ({ params }: { params: { locale: "en" | "ar" } }) => {
	return (
		<>
			<ContactHero locale={params.locale} />
			{/* <ContactFaq /> */}
		</>
	);
};

export default Page;
