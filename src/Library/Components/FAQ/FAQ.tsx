"use client";
import React, { useState } from "react";
import FAQData from "../../../../DumyData/Topics";
import QuestionTray from "@/Components/FAQ/QuestionTray";
import styles from "@/Spaces";
import { Heading3 } from "@/Typography";
import Tab from "@/UI/Tab/Tab";
import uuid from "@/Utils/uuid";

// Defining types for FAQData
interface FAQItem {
	question: string;
	answer: string;
}

interface FAQTopic {
	title: string;
	items: FAQItem[];
}

interface FAQData {
	[key: string]: FAQTopic;
}

interface FAQProps {
	startTab?: number;
	locale?: string;
}

const Faq = ({ startTab = 0, locale }: FAQProps) => {
	const topics: FAQData = locale === "ar" ? FAQData.ar : FAQData.en;
	const [activeTab, setActiveTab] = useState(startTab);
	const topicKeys = Object.keys(topics);

	return (
		<>
			{topicKeys.map((topicKey, index) => {
				const topic = topics[topicKey as keyof FAQData];
				return (
					<Tab
						onClick={() => setActiveTab(index)}
						active={activeTab === index}
						name={topic.title}
						key={uuid()}
					/>
				);
			})}

			<Heading3 className={`${styles.marginTop40} ${styles.marginBottom16}`} capitalize>
				{topics[topicKeys[activeTab]].title}
			</Heading3>

			<ul>
				{topics[topicKeys[activeTab]].items.map((item, i) => (
					<QuestionTray key={i} question={item.question} answer={item.answer} />
				))}
			</ul>
		</>
	);
};

export default Faq;
