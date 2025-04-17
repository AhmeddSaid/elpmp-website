import React from "react";
// import topics from "../../../../../DumyData/Topics";
import Faq from "@/Components/FAQ/FAQ";
import styles from "@/Spaces";
import { Heading2, Highlighter } from "@/Typography";

const CourseFaq = ({ params }: { params: { locale: string } }) => {
	return (
		<>
			<section id={"faq"} className={`${styles.paddingTop32} ${styles.paddingBottom48}`}>
				<Highlighter className={styles.marginTop8}> PMP Certification FAQs</Highlighter>
				<Heading2 className={`${styles.marginTop20} ${styles.marginBottom48}`} small>
					Earn the Coveted PMP Certification
				</Heading2>
				<Faq locale={params.locale} />
			</section>
		</>
	);
};

export default CourseFaq;
