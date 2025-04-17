"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
	ManagementSectionTranslationAr,
	ManagementSectionTranslationEn,
} from "../../../../../messages/home/ManagementSection/ManagementSection";
import {
	Col,
	// Row, Section
} from "@/Grids";
import { Heading1, Title2 } from "@/Library/Typography/TypographyNew";
import {
	Item,
	ListHolder,
	Main,
	MainContent,
	MainContentHolder,
	ManagementSectionContainer,
	Title,
	TitleHolder,
	ManagementCaption,
	ManagementFooter,
	ManagementFooterBody,
	ManagementFooterTitle,
	ManagementSectionContainerInner,
	MobileScreen,
	SectionFooter,
	// LaptopScreen,
	// Management,
	// ManagementSectionHeader,
	// ManagementSectionHeaderContainer,
	// ManagementSectionInnerPersentage,
	// PersentageImage,
} from "@/Library/_Pages/HomePage/ManagementSection/ManagementSection.styles";
import { Highlighter } from "@/Typography";
// import { ManagementStickyScroll } from "@/UI/ManagementStickyScroll/ManagementStickyScroll";
import { SubTitleHolder } from "../WhyElpmpStands/WhyElpmpStands.styles";
import lineSvg from "/public/line-p.svg";

const ManagementSection = ({ locale }: { locale: string }) => {
	const t = locale === "en" ? ManagementSectionTranslationEn : ManagementSectionTranslationAr;
	const sectionRefs = useRef<HTMLDivElement[]>([]);
	const [activeId, setActiveId] = useState(1);

	// Handler to scroll to the corresponding section
	// const handleScrollToSection = (id: number) => {
	// 	sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
	// 	setActiveId(id);
	// };
	const listContent = [
		{
			id: 1,
			title: t.SubTitles.SubTitles1.header,
		},
		{
			id: 2,
			title: t.SubTitles.SubTitles2.header,
		},
		{
			id: 3,
			title: t.SubTitles.SubTitles3.header,
		},
		// {
		// 	id: 4,
		// 	title: t.SubTitles.SubTitles4.header,
		// },
		// {
		// 	id: 5,
		// 	title: t.SubTitles.SubTitles5.header,
		// },
	];

	const mainContent = [
		{
			id: 1,
			text: "PMP-certified professionals earn 16% more globally (32% in the USA) – command the compensation you deserve.",
			lIcon: (
				<svg
					width="64"
					height="65"
					viewBox="0 0 64 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M34.6667 19.167H56M56 19.167V40.5003M56 19.167L34.6667 40.5003L24 29.8337L8 45.8337"
						stroke="white"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			rIcon: (
				<svg
					width="39"
					height="42"
					viewBox="0 0 39 42"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.352 9.14C0.352 6.60133 1.11733 4.58533 2.648 3.092C4.17867 1.56133 6.13867 0.795997 8.528 0.795997C10.9173 0.795997 12.8773 1.56133 14.408 3.092C15.9387 4.58533 16.704 6.60133 16.704 9.14C16.704 11.716 15.9387 13.7693 14.408 15.3C12.8773 16.7933 10.9173 17.54 8.528 17.54C6.13867 17.54 4.17867 16.7933 2.648 15.3C1.11733 13.7693 0.352 11.716 0.352 9.14ZM33.056 1.412L10.376 40.5H5.336L28.016 1.412H33.056ZM8.528 3.932C7.25867 3.932 6.25067 4.38 5.504 5.276C4.79467 6.13467 4.44 7.42267 4.44 9.14C4.44 10.8573 4.79467 12.164 5.504 13.06C6.25067 13.956 7.25867 14.404 8.528 14.404C9.79733 14.404 10.8053 13.956 11.552 13.06C12.2987 12.1267 12.672 10.82 12.672 9.14C12.672 7.42267 12.2987 6.13467 11.552 5.276C10.8053 4.38 9.79733 3.932 8.528 3.932ZM21.8 32.772C21.8 30.196 22.5653 28.1613 24.096 26.668C25.6267 25.1373 27.5867 24.372 29.976 24.372C32.3653 24.372 34.3067 25.1373 35.8 26.668C37.3307 28.1613 38.096 30.196 38.096 32.772C38.096 35.3107 37.3307 37.3453 35.8 38.876C34.3067 40.4067 32.3653 41.172 29.976 41.172C27.5867 41.172 25.6267 40.4253 24.096 38.932C22.5653 37.4013 21.8 35.348 21.8 32.772ZM29.92 27.564C28.6507 27.564 27.6427 28.012 26.896 28.908C26.1493 29.7667 25.776 31.0547 25.776 32.772C25.776 34.452 26.1493 35.74 26.896 36.636C27.6427 37.4947 28.6507 37.924 29.92 37.924C31.1893 37.924 32.1973 37.4947 32.944 36.636C33.6907 35.74 34.064 34.452 34.064 32.772C34.064 31.0547 33.6907 29.7667 32.944 28.908C32.1973 28.012 31.1893 27.564 29.92 27.564Z"
						fill="white"
					/>
				</svg>
			),
			main: 16,
			label: "Globally",
		},
		{
			id: 2,
			text: "1.4+ million certified professionals worldwide prove this credential opens doors and expands your network.",
			lIcon: null,
			rIcon: (
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.432 17.188H17.504V29.284H12.744V17.188H0.872V12.876H12.744V0.723997H17.504V12.876H29.432V17.188Z"
						fill="white"
					/>
				</svg>
			),
			main: 1.4,
			label: "Million Certified",
		},
		{
			id: 3,
			text: "25M+ project management openings by 2030 mean your PMP sets you apart putting you in the driver's seat.",
			lIcon: null,
			rIcon: (
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.432 17.188H17.504V29.284H12.744V17.188H0.872V12.876H12.744V0.723997H17.504V12.876H29.432V17.188Z"
						fill="white"
					/>
				</svg>
			),
			main: 25,
			label: "Million Openings",
		},
		// {
		// 	id: 4,
		// 	text: "Deliver results that impress – on time, on budget, and exceeding expectations.",
		// 	lIcon: null,
		// 	rIcon: null,
		// 	main: (
		// 		<svg
		// 			width="192"
		// 			height="192"
		// 			viewBox="0 0 192 192"
		// 			fill="none"
		// 			xmlns="http://www.w3.org/2000/svg"
		// 		>
		// 			<path
		// 				d="M122.286 78.8571L104 24L85.7143 78.8571L40 96L85.7143 113.143L104 168L122.286 113.143L168 96L122.286 78.8571Z"
		// 				fill="#292C32"
		// 			/>
		// 			<path
		// 				d="M40 24V56M24 40H56M48 136V168M32 152H64M104 24L122.286 78.8571L168 96L122.286 113.143L104 168L85.7143 113.143L40 96L85.7143 78.8571L104 24Z"
		// 				stroke="#4F29F3"
		// 				strokeWidth="6"
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 			/>
		// 		</svg>
		// 	),
		// 	label: null,
		// },
		// {
		// 	id: 5,
		// 	text: "Master agile, traditional, and hybrid PM methods to future-proof your skillset in an ever-evolving field.",
		// 	lIcon: null,
		// 	rIcon: null,
		// 	main: (
		// 		<svg
		// 			width="192"
		// 			height="192"
		// 			viewBox="0 0 192 192"
		// 			fill="none"
		// 			xmlns="http://www.w3.org/2000/svg"
		// 		>
		// 			<path
		// 				d="M40 24V56M24 40H56M48 136V168M32 152H64M104 24L122.286 78.8571L168 96L122.286 113.143L104 168L85.7143 113.143L40 96L85.7143 78.8571L104 24Z"
		// 				stroke="#4F29F3"
		// 				strokeWidth="10"
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 			/>
		// 		</svg>
		// 	),
		// 	label: null,
		// },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const id = Number(entry.target.getAttribute("data-id"));
						setActiveId(id);
					}
				});
			},
			{ threshold: 0.5 },
		);

		sectionRefs.current.forEach(section => {
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			sectionRefs.current.forEach(section => {
				if (section) {
					observer.unobserve(section);
				}
			});
		};
	}, []);

	const [activeTab, setActiveTab] = useState<number>(0);

	const specialRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			const div = specialRef.current;
			if (!div) return;
			const rect = div.getBoundingClientRect();
			const inView = rect.top < window.innerHeight && rect.bottom > 0;
			if (inView) {
				const scrollTop = div.scrollTop;
				const scrollHeight = div.scrollHeight;
				const clientHeight = div.clientHeight;
				const isScrollable = scrollHeight > clientHeight;
				const atTop = scrollTop === 0;
				const atBottom = scrollTop + clientHeight >= scrollHeight;
				if (isScrollable) {
					e.preventDefault();
					e.stopPropagation();
					let delta = e.deltaY;
					if ((atTop && delta < 0) || (atBottom && delta > 0)) {
						delta = 0;
					}
					const smoothScroll = (scrollDelta: number) => {
						div.scrollTop += scrollDelta;
					};
					smoothScroll(delta);
				}
			}
		};
		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<>
			<ManagementSectionContainer>
				<TitleHolder>
					<SubTitleHolder>
						<Highlighter big className="subtitle">
							{t.title}
						</Highlighter>
					</SubTitleHolder>
					<Title>{t.Heading}</Title>
					<Image src={lineSvg} alt="" />
				</TitleHolder>
				<Main>
					<ListHolder>
						{listContent.map(item => (
							<Item key={item.id} active={activeId === item.id}>
								{item.title}
							</Item>
						))}
					</ListHolder>
					<MainContentHolder ref={specialRef}>
						{mainContent.map(item => (
							<MainContent
								key={item.id}
								ref={el => {
									if (el) {
										sectionRefs.current[item.id] = el;
									}
								}}
								data-id={item.id}
								className="mainContent"
							>
								<div className="container">
									{item.lIcon}
									<div>{item.main}</div>
									{item.rIcon}
								</div>
								<div>
									<span>{item.label}</span>
								</div>
								<p>{item.text}</p>
							</MainContent>
						))}
					</MainContentHolder>
				</Main>

				<MobileScreen>
					<Col as={"li"}>
						<ManagementSectionContainerInner>
							<div>
								<Title2
									as={"li"}
									weight={"Regular"}
									className={activeTab === 0 ? "active" : ""}
									onClick={() => setActiveTab(0)}
								>
									{t.SubTitles.SubTitles1.header}
								</Title2>
								<ManagementCaption className={activeTab === 0 ? "" : "displayNone"}>
									<Heading1>{t.SubTitles.SubTitles1.SubHeader}</Heading1>
									<Image
										style={{ margin: "auto" }}
										src={"/numbers/Slice-1.png"}
										alt={""}
										width={244}
										height={328}
									/>
								</ManagementCaption>
							</div>
							<div>
								<Title2
									as={"li"}
									weight={"Regular"}
									className={activeTab === 1 ? "active" : ""}
									onClick={() => setActiveTab(1)}
								>
									{t.SubTitles.SubTitles2.header}{" "}
								</Title2>
								<ManagementCaption className={activeTab === 1 ? "" : "displayNone"}>
									<Heading1>{t.SubTitles.SubTitles2.SubHeader}</Heading1>
									<Image
										style={{ margin: "auto" }}
										src={"/numbers/Slice-2.png"}
										alt={""}
										width={244}
										height={328}
									/>
								</ManagementCaption>
							</div>
							<div>
								<Title2
									as={"li"}
									weight={"Regular"}
									className={activeTab === 2 ? "active" : ""}
									onClick={() => setActiveTab(2)}
								>
									{t.SubTitles.SubTitles3.header}{" "}
								</Title2>
								<ManagementCaption className={activeTab === 2 ? "" : "displayNone"}>
									<Heading1>{t.SubTitles.SubTitles3.SubHeader}</Heading1>
									<Image
										style={{ margin: "auto" }}
										src={"/numbers/Slice-3.png"}
										alt={""}
										width={244}
										height={328}
									/>
								</ManagementCaption>
							</div>
							{/* <div>
								<Title2
									as={"li"}
									weight={"Regular"}
									className={activeTab === 3 ? "active" : ""}
									onClick={() => setActiveTab(3)}
								>
									{t.SubTitles.SubTitles4.header}{" "}
								</Title2>
								<ManagementCaption className={activeTab === 3 ? "" : "displayNone"}>
									<Heading1>{t.SubTitles.SubTitles4.SubHeader}</Heading1>
									<Image
										style={{ margin: "auto" }}
										src={"/numbers/Slice-4.png"}
										alt={""}
										width={244}
										height={328}
									/>
								</ManagementCaption>
							</div>
							<div>
								<Title2
									as={"li"}
									weight={"Regular"}
									className={activeTab === 4 ? "active" : ""}
									onClick={() => setActiveTab(4)}
								>
									{t.SubTitles.SubTitles5.header}{" "}
								</Title2>
								<ManagementCaption className={activeTab === 4 ? "" : "displayNone"}>
									<Heading1>{t.SubTitles.SubTitles5.SubHeader}</Heading1>
									<Image
										style={{ margin: "auto" }}
										src={"/numbers/Slice-4.png"}
										alt={""}
										width={244}
										height={328}
									/>
								</ManagementCaption>
							</div> */}
						</ManagementSectionContainerInner>
					</Col>
				</MobileScreen>
			</ManagementSectionContainer>
			<SectionFooter>
				<ManagementFooter justify={"space-between"} aligncenter={"center"} className="ready">
					<div>
						<ManagementFooterTitle>{t.ReadyTitle}</ManagementFooterTitle>
						<ManagementFooterBody weight={"Regular"}>{t.ReadySubTitle}</ManagementFooterBody>
					</div>

					<Link href={"/courses/1"}>
						<button>{t.Button}</button>
					</Link>
				</ManagementFooter>
			</SectionFooter>
		</>
	);
};

export default ManagementSection;

// const [activeTab, setActiveTab] = useState<number>(0);
// const content = [
// 	{
// 		title: t.SubTitles.SubTitles1.header,
// 		content: (
// 			<>
// 				<ManagementSectionInnerPersentage>
// 					{t.SubTitles.SubTitles1.SubHeader}
// 				</ManagementSectionInnerPersentage>
// 				<PersentageImage>
// 					<Image src={"/numbers/Slice-1.png"} alt={""} width={1000} height={1000} />
// 				</PersentageImage>
// 			</>
// 		),
// 	},
// 	{
// 		title: t.SubTitles.SubTitles2.header,
// 		content: (
// 			<>
// 				<ManagementSectionInnerPersentage>
// 					{t.SubTitles.SubTitles2.SubHeader}
// 				</ManagementSectionInnerPersentage>
// 				<PersentageImage>
// 					<Image src={"/numbers/Slice-2.png"} alt={""} width={1000} height={1000} />
// 				</PersentageImage>
// 			</>
// 		),
// 	},
// 	{
// 		title: t.SubTitles.SubTitles3.header,
// 		content: (
// 			<>
// 				<ManagementSectionInnerPersentage>
// 					{t.SubTitles.SubTitles3.SubHeader}
// 				</ManagementSectionInnerPersentage>
// 				<PersentageImage>
// 					<Image src={"/numbers/Slice-3.png"} alt={""} width={1000} height={1000} />
// 				</PersentageImage>
// 			</>
// 		),
// 	},
// 	{
// 		title: t.SubTitles.SubTitles4.header,
// 		content: (
// 			<>
// 				<ManagementSectionInnerPersentage>
// 					{t.SubTitles.SubTitles4.SubHeader}
// 				</ManagementSectionInnerPersentage>
// 				<PersentageImage>
// 					<Image src={"/numbers/Slice-4.png"} alt={""} width={1000} height={1000} />
// 				</PersentageImage>
// 			</>
// 		),
// 	},
// 	{
// 		title: t.SubTitles.SubTitles5.header,
// 		content: (
// 			<>
// 				<ManagementSectionInnerPersentage>
// 					{t.SubTitles.SubTitles5.SubHeader}
// 				</ManagementSectionInnerPersentage>
// 				<PersentageImage>
// 					<Image src={"/numbers/Slice-4.png"} alt={""} width={1000} height={1000} />
// 				</PersentageImage>
// 			</>
// 		),
// 	},
// ];

// {
/* <Section>
<ManagementFooter justify={"space-between"} aligncenter={"center"}>
	<div>
		<ManagementFooterTitle>{t.ReadyTitle}</ManagementFooterTitle>
		<ManagementFooterBody weight={"Regular"}>{t.ReadySubTitle}</ManagementFooterBody>
	</div>

	<Link href={"/courses/1"}>
		<button>{t.Button}</button>
	</Link>
</ManagementFooter>
</Section> */
// }

// {
/* <Management>
			<Section as={"div"}>
				<Row justify={"center"}>
					<Col md={10}>
						<ManagementSectionHeaderContainer>
							<Highlighter big align={"center"}>
								{t.title}
							</Highlighter>
							<ManagementSectionHeader size="4rem">{t.Heading}</ManagementSectionHeader>
						</ManagementSectionHeaderContainer>
						<LaptopScreen as={"ul"} justify={"space-between"}>
							<ManagementStickyScroll content={content} />
						</LaptopScreen>
						<MobileScreen>
							<Col as={"li"}>
								<ManagementSectionContainerInner>
									<div>
										<Title2
											as={"li"}
											weight={"Regular"}
											className={activeTab === 0 ? "active" : ""}
											onClick={() => setActiveTab(0)}
										>
											{t.SubTitles.SubTitles1.header}
										</Title2>
										<ManagementCaption className={activeTab === 0 ? "" : "displayNone"}>
											<Heading1>{t.SubTitles.SubTitles1.SubHeader}</Heading1>
											<Image
												style={{ margin: "auto" }}
												src={"/numbers/Slice-1.png"}
												alt={""}
												width={244}
												height={328}
											/>
										</ManagementCaption>
									</div>
									<div>
										<Title2
											as={"li"}
											weight={"Regular"}
											className={activeTab === 1 ? "active" : ""}
											onClick={() => setActiveTab(1)}
										>
											{t.SubTitles.SubTitles2.header}{" "}
										</Title2>
										<ManagementCaption className={activeTab === 1 ? "" : "displayNone"}>
											<Heading1>{t.SubTitles.SubTitles2.SubHeader}</Heading1>
											<Image
												style={{ margin: "auto" }}
												src={"/numbers/Slice-2.png"}
												alt={""}
												width={244}
												height={328}
											/>
										</ManagementCaption>
									</div>
									<div>
										<Title2
											as={"li"}
											weight={"Regular"}
											className={activeTab === 2 ? "active" : ""}
											onClick={() => setActiveTab(2)}
										>
											{t.SubTitles.SubTitles3.header}{" "}
										</Title2>
										<ManagementCaption className={activeTab === 2 ? "" : "displayNone"}>
											<Heading1>{t.SubTitles.SubTitles3.SubHeader}</Heading1>
											<Image
												style={{ margin: "auto" }}
												src={"/numbers/Slice-3.png"}
												alt={""}
												width={244}
												height={328}
											/>
										</ManagementCaption>
									</div>
									<div>
										<Title2
											as={"li"}
											weight={"Regular"}
											className={activeTab === 3 ? "active" : ""}
											onClick={() => setActiveTab(3)}
										>
											{t.SubTitles.SubTitles4.header}{" "}
										</Title2>
										<ManagementCaption className={activeTab === 3 ? "" : "displayNone"}>
											<Heading1>{t.SubTitles.SubTitles4.SubHeader}</Heading1>
											<Image
												style={{ margin: "auto" }}
												src={"/numbers/Slice-4.png"}
												alt={""}
												width={244}
												height={328}
											/>
										</ManagementCaption>
									</div>
									<div>
										<Title2
											as={"li"}
											weight={"Regular"}
											className={activeTab === 4 ? "active" : ""}
											onClick={() => setActiveTab(4)}
										>
											{t.SubTitles.SubTitles5.header}{" "}
										</Title2>
										<ManagementCaption className={activeTab === 4 ? "" : "displayNone"}>
											<Heading1>{t.SubTitles.SubTitles5.SubHeader}</Heading1>
											<Image
												style={{ margin: "auto" }}
												src={"/numbers/Slice-4.png"}
												alt={""}
												width={244}
												height={328}
											/>
										</ManagementCaption>
									</div>
								</ManagementSectionContainerInner>
							</Col>
						</MobileScreen>
					</Col>
				</Row>
			</Section>
			<Section>
				<ManagementFooter justify={"space-between"} aligncenter={"center"}>
					<div>
						<ManagementFooterTitle>{t.ReadyTitle}</ManagementFooterTitle>
						<ManagementFooterBody weight={"Regular"}>{t.ReadySubTitle}</ManagementFooterBody>
					</div>

					<Link href={"/courses/1"}>
						<button>{t.Button}</button>
					</Link>
				</ManagementFooter>
			</Section>
		</Management> */
// }
