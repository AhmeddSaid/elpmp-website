"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { Section } from "@/Grids";
import {
	HomeHeroTranslationAR,
	HomeHeroTranslationEN,
} from "../../../../../messages/home/herosection/HomeHeroSection";
// import microsoft from "../../../../../public/images/microsoft-logo.png";
import aramco from "../../../../../public/images/aramco-logo.png";
import dell from "../../../../../public/images/dell-logo.png";
import emirates from "../../../../../public/images/emirates-logo.png";
import vodafone from "../../../../../public/images/vodafone-logo.png";
import { Locale } from "@/Library/Globals";
// import Airbnb from "@/Library/Icongraphy/SocialMedia/40/Airbnb";
// import Google from "@/Library/Icongraphy/SocialMedia/40/Google";
// import Evernote from "@/Library/Icongraphy/SocialMedia/40/Evernote";
// import Fivetran from "@/Library/Icongraphy/SocialMedia/40/Fivetran";
// import Github from "@/Library/Icongraphy/SocialMedia/40/Github";
import { Title2 } from "@/Library/Typography/TypographyNew";
import {
	BrandContainer,
	BrandContainerPragraph,
	BrandIconContainer,
	CaptionBody,
	CaptionHeader,
	HeroHomeCard,
	HeroHomeCardImage,
	HeroHomeCardTitle,
	HeroHomeMainContainer,
	HeroHomeSection,
	HeroHomeSectionCaption,
	HeroHomeSectionHeader,
	HeroHomeSectionInner,
	HeroSVG,
	HomeHeroSectionButton,
	ImageHolder,
} from "@/Library/_Pages/HomePage/HomeHeroSection/HomeHeroSection.styles";
import "react-multi-carousel/lib/styles.css";
import uuid from "@/Utils/uuid";

// import HeroImg from "/images/home-hero.webp";

const HomeHeroSection = ({ locale }: Locale) => {
	const [wordIndex, setWordIndex] = useState(0);
	// const [imgIndex, setImgIndex] = useState(0);

	const t = locale === "en" ? HomeHeroTranslationEN : HomeHeroTranslationAR;

	useEffect(() => {
		const animation = setInterval(() => {
			setWordIndex(prev => (prev >= 2 ? 0 : prev + 1));
		}, 2000);

		// const imageAnimation = setInterval(() => {
		// 	setImgIndex(prev => (prev >= 3 ? 0 : prev + 1));
		// }, 3000);

		return () => {
			clearInterval(animation);
			// clearInterval(imageAnimation);
		};
	}, [wordIndex]);

	// useEffect(() => {
	// 	const imageAnimation = setInterval(() => {
	// 		setImgIndex(prev => (prev >= 3 ? 0 : prev + 1));
	// 	}, 3000);

	// 	return () => {
	// 		clearInterval(imageAnimation);
	// 	};
	// }, [imgIndex]);

	return (
		<>
			<HeroHomeSection>
				<HeroHomeMainContainer as={"div"}>
					<HeroHomeSectionInner as={"ul"}>
						<HeroHomeSectionHeader lg={6} as={"li"}>
							{t.homeHeroSection.Slogan.map((item, index) => (
								<p key={uuid()} className={wordIndex === index ? "" : "displayNone"}>
									{item}{" "}
								</p>
							))}

							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<circle cx="12" cy="12" r="12" fill="#C7BBFB" />
								</svg>
							</span>
						</HeroHomeSectionHeader>
						<HeroHomeSectionCaption lg={6} as={"li"}>
							<CaptionHeader>{t.homeHeroSection.HeadLine}</CaptionHeader>
							<CaptionBody weight={"Regular"}>{t.homeHeroSection.Subheading}</CaptionBody>
							<HomeHeroSectionButton href="/pmp" rtl={locale === "ar"}>
								<Title2 color={"white"} weight={"semibold"}>
									{t.homeHeroSection.CallToActionButton}
								</Title2>
							</HomeHeroSectionButton>
						</HeroHomeSectionCaption>
						<ImageHolder rtl={locale === "ar"}>
							<HeroSVG rtl={locale === "ar"}>
								<svg
									width="297"
									height="163"
									viewBox="0 0 297 163"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 0H149L296.5 163H147.5L0 0Z" fill="#F3F1FE" />
								</svg>
							</HeroSVG>
							<HeroHomeCard locale={locale}>
								<HeroHomeCardTitle weight={"extra-bold"}>PMP Certificate</HeroHomeCardTitle>
								<HeroHomeCardImage>
									<Image
										// className={imgIndex === 0 ? "" : "displayNone"}
										priority={true}
										src={"/images/home-hero.webp"}
										alt={""}
										width={352}
										height={421}
									/>
									{/* <Image
										className={imgIndex === 1 ? "" : "displayNone"}
										src={"/Ellipse 1.png"}
										alt={""}
										width={352}
										height={421}
									/>
									<Image
										className={imgIndex === 2 ? "" : "displayNone"}
										src={"/image 24.png"}
										alt={""}
										width={352}
										height={421}
									/>
									<Image
										className={imgIndex === 3 ? "" : "displayNone"}
										src={"/image 24.png"}
										alt={""}
										width={352}
										height={421}
									/> */}
								</HeroHomeCardImage>
							</HeroHomeCard>
						</ImageHolder>
						<BrandContainer justify={"center"} locale={locale}>
							<BrandContainerPragraph weight={"Medium"} as={"p"}>
								{t.homeHeroSection.Trust}
							</BrandContainerPragraph>
							<BrandIconContainer as={"ul"}>
								<li>
									{/* <Airbnb /> */}
									<Image src={dell} alt="" height={22} />
								</li>

								<li>
									{/* <Google /> */}
									<Image src={emirates} alt="" height={46} />
								</li>
								<li>
									{/* <Evernote /> */}
									<Image src={aramco} alt="" height={84} />
								</li>
								<li>
									{/* <Fivetran /> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="160"
										height="auto"
										viewBox="0 0 108 23"
									>
										<title>Microsoft logo</title>
										<path
											d="M44.836 4.6v13.8h-2.4V7.583H42.4L38.119 18.4h-1.588L32.142 7.583h-.028V18.4H29.9V4.6h3.436L37.3 14.83h.057L41.545 4.6zm2 1.049a1.268 1.268 0 01.419-.967 1.411 1.411 0 011-.39 1.392 1.392 0 011.02.4 1.3 1.3 0 01.405.957 1.249 1.249 0 01-.414.953 1.428 1.428 0 01-1.011.385A1.4 1.4 0 0147.25 6.6a1.263 1.263 0 01-.41-.949M49.41 18.4h-2.329V8.507h2.329zm7.064-1.694a3.225 3.225 0 001.145-.24 4.808 4.808 0 001.155-.636V18a4.659 4.659 0 01-1.266.481 6.9 6.9 0 01-1.554.163 4.707 4.707 0 01-4.918-4.907 5.644 5.644 0 011.4-3.932 5.054 5.054 0 013.955-1.545 5.42 5.42 0 011.324.169 4.4 4.4 0 011.063.39v2.232a4.73 4.73 0 00-1.1-.611 3.187 3.187 0 00-1.15-.217 2.918 2.918 0 00-2.223.9 3.366 3.366 0 00-.847 2.415 3.217 3.217 0 00.813 2.339 2.938 2.938 0 002.209.837m8.931-8.363a2.892 2.892 0 01.5.039 2.025 2.025 0 01.376.1v2.357a2.075 2.075 0 00-.535-.255 2.649 2.649 0 00-.851-.12 1.811 1.811 0 00-1.449.722 3.47 3.47 0 00-.592 2.223V18.4h-2.335V8.507h2.329v1.559h.039a2.731 2.731 0 01.962-1.266 2.615 2.615 0 011.55-.457m1 5.254a5.355 5.355 0 011.387-3.887 5.1 5.1 0 013.85-1.434 4.741 4.741 0 013.623 1.381 5.208 5.208 0 011.3 3.729 5.259 5.259 0 01-1.385 3.83 5.02 5.02 0 01-3.773 1.424 4.931 4.931 0 01-3.652-1.352 4.984 4.984 0 01-1.349-3.688m2.426-.076a3.53 3.53 0 00.7 2.367 2.5 2.5 0 002.011.818 2.344 2.344 0 001.934-.818 3.78 3.78 0 00.664-2.425 3.649 3.649 0 00-.688-2.411 2.39 2.39 0 00-1.929-.813 2.441 2.441 0 00-1.988.852 3.707 3.707 0 00-.707 2.43m11.2-2.416a1 1 0 00.317.785 5.431 5.431 0 001.405.716 4.768 4.768 0 011.959 1.256 2.608 2.608 0 01.563 1.689 2.718 2.718 0 01-1.073 2.243 4.565 4.565 0 01-2.9.846 6.962 6.962 0 01-1.362-.149 6.036 6.036 0 01-1.265-.38v-2.29a5.74 5.74 0 001.367.7 4.009 4.009 0 001.328.26 2.37 2.37 0 001.164-.221.792.792 0 00.375-.741 1.027 1.027 0 00-.389-.813 5.772 5.772 0 00-1.478-.766 4.56 4.56 0 01-1.828-1.212 2.657 2.657 0 01-.539-1.713 2.706 2.706 0 011.063-2.2 4.245 4.245 0 012.764-.862 6.669 6.669 0 011.164.116 5.131 5.131 0 011.078.3v2.214a4.943 4.943 0 00-1.078-.53 3.61 3.61 0 00-1.222-.221 1.776 1.776 0 00-1.035.26.822.822 0 00-.37.712m5.241 2.493a5.355 5.355 0 011.386-3.89 5.1 5.1 0 013.85-1.434 4.741 4.741 0 013.623 1.381 5.208 5.208 0 011.3 3.729 5.259 5.259 0 01-1.385 3.83 5.02 5.02 0 01-3.773 1.424 4.931 4.931 0 01-3.652-1.352 4.984 4.984 0 01-1.349-3.688m2.426-.076a3.535 3.535 0 00.7 2.367 2.506 2.506 0 002.012.818 2.344 2.344 0 001.934-.818 3.78 3.78 0 00.664-2.425 3.649 3.649 0 00-.688-2.411 2.391 2.391 0 00-1.93-.813 2.44 2.44 0 00-1.987.852 3.707 3.707 0 00-.707 2.43m15.464-3.109H99.7V18.4h-2.359v-7.988h-1.655V8.507h1.655V7.13a3.425 3.425 0 011.016-2.555 3.56 3.56 0 012.6-1 5.949 5.949 0 01.751.043 3.025 3.025 0 01.577.13v2.016a2.381 2.381 0 00-.4-.164 2.106 2.106 0 00-.664-.1 1.405 1.405 0 00-1.126.457 2.015 2.015 0 00-.395 1.356v1.194h3.469V6.283l2.338-.712v2.936h2.358v1.905h-2.358v4.629a1.954 1.954 0 00.332 1.29 1.329 1.329 0 001.045.375 1.569 1.569 0 00.486-.1 2.271 2.271 0 00.5-.231V18.3a2.765 2.765 0 01-.736.231 5.072 5.072 0 01-1.015.105 2.889 2.889 0 01-2.209-.784 3.341 3.341 0 01-.736-2.363z"
											fill="#737373"
										/>
										<path fill="#f25022" d="M0 0h10.931v10.931H0z" />
										<path fill="#7fba00" d="M12.069 0H23v10.931H12.069z" />
										<path fill="#00a4ef" d="M0 12.069h10.931V23H0z" />
										<path fill="#ffb900" d="M12.069 12.069H23V23H12.069z" />
									</svg>
								</li>
								<li>
									{/* <Github /> */}
									<Image src={vodafone} alt="" height={72} />
								</li>
							</BrandIconContainer>
						</BrandContainer>
					</HeroHomeSectionInner>
				</HeroHomeMainContainer>
			</HeroHomeSection>
		</>
	);
};

export default HomeHeroSection;
