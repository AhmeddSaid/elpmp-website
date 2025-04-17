"use client";
import React, { useState } from "react";
import { Plans } from "../../../../../messages/home/Plans/Plans";
import styles from "./../../../Grids/Spaces.module.css";
import {
	Cell,
	CellCheck,
	CellName,
	ElpmpLogo,
	ExpandAllContainer,
	ExpandAllInner,
	HeaderParagraph,
	MobileTable,
	SubTitleHolder,
	Tab,
	TableContainer,
	TableContainerInner,
	TableFirstCol,
	TableFirstInner,
	TableLastCol,
	TableLastInner,
	TableSecondCol,
	TableSecondInner,
	TableThirdCol,
	TableThirdInner,
	TableTitle,
	TabsContainer,
	WhyElpmpHeader,
	WhyElpmpSection,
} from "./WhyElpmpStands.styles";
import { Row } from "@/Grids";
import PlusIcon from "@/Library/Icongraphy/PlusIcon/PlusIcon";
import TabelCheck from "@/Library/Icongraphy/TabelCheck/TabelCheck";
import Vector from "@/Library/Icongraphy/Vector/Vector";
import { Body, Heading2, Title1, Title2, Title3 } from "@/Library/Typography/TypographyNew";
import { Highlighter } from "@/Typography";
// import uuid from "@/Utils/uuid";

const WhyElpmpStands = ({
	grayHighLight = false,
	locale,
}: {
	grayHighLight?: boolean;
	locale?: string;
}) => {
	const [isExpand, setIsExpand] = useState<boolean>(true);
	const [activeTab, setActiveTab] = useState("main");
	const t = locale === "en" ? Plans.en : Plans.ar;

	// Features data structure with checked states from PDF
	const features = [
		{
			category: "Course",
			items: [
				{
					title: t.pmi.title,
					elpmp: true,
					others: false,
					note: t.pmi.body,
				},
				{
					title: t.quality.title,
					elpmp: true,
					others: false,
					note: t.quality.body,
				},
				{
					title: t.environment.title,
					elpmp: true,
					others: false,
					note: t.environment.body,
				},
				{
					title: t.tap.title,
					elpmp: true,
					others: false,
					note: t.tap.body,
				},
				{
					title: t.material.title,
					elpmp: true,
					others: true,
					note: t.material.body,
				},
			],
		},
		{
			category: "Simulator",
			items: [
				{
					title: t.questions.title,
					elpmp: true,
					others: false,
					note: t.questions.body,
				},
				{
					title: t.simulation.title,
					elpmp: true,
					others: false,
					note: t.simulation.body,
				},
				{
					title: t.learningMode.title,
					elpmp: true,
					others: false,
					note: t.learningMode.body,
				},
				{
					title: t.realExamMode.title,
					elpmp: true,
					others: false,
					note: t.realExamMode.body,
				},
				{
					title: t.gapFocus.title,
					elpmp: true,
					others: false,
					note: t.gapFocus.body,
				},
				{
					title: t.customExam.title,
					elpmp: true,
					others: false,
					note: t.customExam.body,
				},
				{
					title: t.confidence.title,
					elpmp: true,
					others: false,
					note: t.confidence.body,
				},
				{
					title: t.performance.title,
					elpmp: true,
					others: true,
					note: t.performance.body,
				},
				{
					title: t.unlimited.title,
					elpmp: true,
					others: true,
					note: t.unlimited.body,
				},
			],
		},
		{
			category: "More",
			items: [
				{
					title: t.platform.title,
					elpmp: true,
					others: false,
					note: t.platform.body,
				},
				{
					title: t.price.title,
					elpmp: true,
					others: false,
					note: t.price.body,
				},
				{
					title: t.guarantee.title,
					elpmp: true,
					others: false,
					note: t.guarantee.body,
				},
				{
					title: t.instructor.title,
					elpmp: true,
					others: false,
					note: t.instructor.body,
				},
				{
					title: t.community.title,
					elpmp: true,
					others: false,
					note: t.community.body,
				},
			],
		},
	];

	// Flatten all features for mobile view
	const allFeatures = features.flatMap(section => section.items);
	const displayedFeatures = isExpand ? allFeatures.slice(0, 6) : allFeatures;

	return (
		<WhyElpmpSection className={`${styles.marginTop80}`}>
			<SubTitleHolder>
				<Highlighter big>Why ELPMP.com stands out?</Highlighter>
			</SubTitleHolder>
			<WhyElpmpHeader>{t.title}</WhyElpmpHeader>
			<HeaderParagraph>{t.body}</HeaderParagraph>

			<Row justify={"center"}>
				<TableContainer md={10} sm={12}>
					<TableContainerInner Expand={isExpand}>
						<TableFirstCol md={3}>
							<TableFirstInner>
								{features.map((section, index) => (
									<ul key={`section-${index}`}>
										<li>
											<Title2 weight={"semibold"}>
												{section.category === "More"
													? locale === "en"
														? "More from ELPMP.com"
														: "خصائص"
													: section.category}
											</Title2>
										</li>
										{section.items.map((item, itemIndex) => (
											<li key={`item-${index}-${itemIndex}`}>
												<Title3 weight={"Regular"}>{item.title}</Title3>
											</li>
										))}
									</ul>
								))}
							</TableFirstInner>
						</TableFirstCol>
						<TableSecondCol grayHighLight={grayHighLight} md={2}>
							<TableSecondInner>
								<ElpmpLogo>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="73"
										height="72"
										viewBox="0 0 73 72"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M26.9141 7.5H58.9766V39.5625H46.0625V52.0313H33.1484V64.5H14V19.9688H26.9141V7.5ZM33.1484 19.9688H46.0625V33.3281H52.7422V13.7344H33.1484V19.9688ZM26.9141 52.0313V40.8984V39.5625L26.9141 32.4375H33.1484V39.5625V45.7969H39.8281V33.3281V26.2031H20.2344V58.2656H26.9141L26.9141 52.0313Z"
											fill="#4F29F3"
										/>
									</svg>
									<Title1
										style={{
											textAlign: "center",
											padding: ".5rem",
										}}
										weight={"semibold"}
									>
										ELPMP.com
									</Title1>
								</ElpmpLogo>
								{features.map((section, index) => (
									<ul key={`elpmp-checks-${index}`}>
										{section.items.map((item, itemIndex) => (
											<li key={`elpmp-check-${index}-${itemIndex}`}>
												{item.elpmp ? <TabelCheck /> : <Vector />}
											</li>
										))}
									</ul>
								))}
							</TableSecondInner>
						</TableSecondCol>
						<TableThirdCol md={2}>
							<TableThirdInner>
								<Title1
									weight={"semibold"}
									style={{
										textAlign: "center",
										padding: ".5rem",
									}}
								>
									{locale === "en" ? "Others" : "الآخرون"}
								</Title1>
								{features.map((section, index) => (
									<ul key={`others-checks-${index}`}>
										{section.items.map((item, itemIndex) => (
											<li key={`other-check-${index}-${itemIndex}`}>
												{item.others ? <TabelCheck /> : <Vector />}
											</li>
										))}
									</ul>
								))}
							</TableThirdInner>
						</TableThirdCol>
						<TableLastCol md={5}>
							<TableLastInner>
								{features.map((section, index) => (
									<ul key={`notes-${index}`}>
										{section.items.map((item, itemIndex) => (
											<li key={`note-${index}-${itemIndex}`}>
												<Body size={"MD"} weight={"regular"}>
													{item.note}
												</Body>
											</li>
										))}
									</ul>
								))}
							</TableLastInner>
						</TableLastCol>
					</TableContainerInner>
					<MobileTable>
						<TabsContainer>
							<Tab onClick={() => setActiveTab("main")} isActive={activeTab === "main"} first>
								<ElpmpLogo>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="73"
										height="72"
										viewBox="0 0 73 72"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M26.9141 7.5H58.9766V39.5625H46.0625V52.0313H33.1484V64.5H14V19.9688H26.9141V7.5ZM33.1484 19.9688H46.0625V33.3281H52.7422V13.7344H33.1484V19.9688ZM26.9141 52.0313V40.8984V39.5625L26.9141 32.4375H33.1484V39.5625V45.7969H39.8281V33.3281V26.2031H20.2344V58.2656H26.9141L26.9141 52.0313Z"
											fill="#4F29F3"
										/>
									</svg>
									<Title1
										style={{
											textAlign: "center",
											padding: ".5rem",
										}}
										weight={"semibold"}
									>
										ELPMP
									</Title1>
								</ElpmpLogo>
							</Tab>
							<Tab onClick={() => setActiveTab("others")} isActive={activeTab === "others"}>
								{locale === "en" ? "Others" : "الآخرون"}
							</Tab>
						</TabsContainer>
						<TableTitle>{locale === "en" ? "Feature" : "الميزة"}</TableTitle>
						{displayedFeatures.map((item, index) => (
							<Cell key={`mobile-feature-${index}`}>
								<CellName>{item.title}</CellName>
								<CellCheck>
									{activeTab === "main" ? (
										item.elpmp ? (
											<TabelCheck />
										) : (
											<Vector />
										)
									) : item.others ? (
										<TabelCheck />
									) : (
										<Vector />
									)}
								</CellCheck>
							</Cell>
						))}
					</MobileTable>
					{isExpand && (
						<ExpandAllContainer justify={"center"} aligncenter={"end"} Expand={isExpand}>
							<ExpandAllInner
								onClick={() => setIsExpand(prev => !prev)}
								justify={"center"}
								aligncenter={"center"}
								gap={0.81}
							>
								<PlusIcon />
								<Heading2 weight={"SemiBold"}>
									{locale === "en" ? "Expand All" : "عرض الكل"}
								</Heading2>
							</ExpandAllInner>
						</ExpandAllContainer>
					)}
				</TableContainer>
			</Row>
		</WhyElpmpSection>
	);
};
export default WhyElpmpStands;
