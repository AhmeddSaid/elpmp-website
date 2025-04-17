import React from "react";
import { Col } from "@/Grids";
import {
	CaptionStyle,
	HeadingStyle,
	ReadySectionContainer,
	ReadySectionOverlay,
	ReadySectionShell,
} from "@/Library/_Pages/Enterprise/ReadySection/ReadySection.styles";
import styles from "@/Spaces";
import Button from "@/UI/Button/Button";

const ReadySection = ({ title, body, cta }: { title: string; body: string; cta: string }) => {
	return (
		<>
			<ReadySectionShell>
				<svg
					className={"layout"}
					width="1382"
					height="433"
					viewBox="0 0 1382 433"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.7" filter="url(#filter0_f_68_248)">
						<path
							d="M1326 216C1326 327.072 1176.37 340.881 965 386.5C881.038 404.621 790.702 497 691 497C570.141 497 481.168 401.436 385 375.5C202.113 326.176 56 317.71 56 216C56 117.95 212.984 83.774 385 33.5C485.247 4.20148 561.872 -65 691 -65C783.833 -65 885.514 17.6577 965 33.5C1185.79 77.506 1326 101.889 1326 216Z"
							fill="#2E0BC6"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_68_248"
							x="-52"
							y="-173"
							width="1486"
							height="778"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="54" result="effect1_foregroundBlur_68_248" />
						</filter>
					</defs>
				</svg>
				<svg
					className={"shape1"}
					xmlns="http://www.w3.org/2000/svg"
					width="141"
					height="141"
					viewBox="0 0 141 141"
					fill="none"
				>
					<path
						opacity="0.6"
						d="M-8 66.5C-8 107.65 25.3503 141 66.5 141C107.65 141 141 107.65 141 66.5C141 25.3503 107.638 -8 66.5 -8C25.3503 -8 -8 25.3503 -8 66.5ZM69.7939 91.1098C53.501 93.2155 39.7727 79.4872 41.8784 63.1944C43.3018 52.1364 52.2541 43.2312 63.312 41.8549C79.5225 39.855 93.1332 53.454 91.1216 69.6645C89.7688 80.7342 80.8518 89.6864 69.7939 91.1098Z"
						fill="url(#paint0_linear_4426_2469)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_4426_2469"
							x1="134.583"
							y1="-8"
							x2="20.0835"
							y2="152.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FCBD9A" />
							<stop offset="1" stopColor="#C64C06" />
						</linearGradient>
					</defs>
				</svg>

				<svg
					className={"shape2"}
					xmlns="http://www.w3.org/2000/svg"
					width="149"
					height="149"
					viewBox="0 0 149 149"
					fill="none"
				>
					<path
						opacity="0.6"
						d="M99.3333 149V49.6667H0V0H149V149H99.3333Z"
						fill="url(#paint0_linear_4426_2466)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_4426_2466"
							x1="1.9229e-06"
							y1="21"
							x2="121.5"
							y2="125.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#D17FFA" />
							<stop offset="1" stopColor="#9807DC" />
						</linearGradient>
					</defs>
				</svg>
				<svg
					className={"shape3"}
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="101"
					viewBox="0 0 128 101"
					fill="none"
				>
					<path
						opacity="0.6"
						d="M128 128V0H0V128L64 64L128 128Z"
						fill="url(#paint0_linear_4426_2468)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_4426_2468"
							x1="63.7924"
							y1="44.2416"
							x2="0.221895"
							y2="112.537"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFD555" />
							<stop offset="1" stopColor="#C79600" />
						</linearGradient>
					</defs>
				</svg>

				<svg
					className={"shape4"}
					xmlns="http://www.w3.org/2000/svg"
					width="145"
					height="140"
					viewBox="0 0 145 140"
					fill="none"
				>
					<path
						opacity="0.6"
						d="M0 99.3216V148.976H74.5V99.3216H111.744V49.6549H149V0H74.5V49.6549H37.2441V99.3216H0Z"
						fill="url(#paint0_linear_4426_2467)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_4426_2467"
							x1="123.5"
							y1="2.80285e-06"
							x2="19.6647"
							y2="133.489"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#886EF7" />
							<stop offset="1" stopColor="#603EF4" />
						</linearGradient>
					</defs>
				</svg>

				<ReadySectionOverlay justify={"center"}>
					<ReadySectionContainer justify={"center"}>
						<Col lg={6}>
							<HeadingStyle color={"white"}>{title}</HeadingStyle>
						</Col>
						<Col lg={6} className="ready-btn-holder">
							<CaptionStyle className={`${styles.paddingBottom56}`}>{body}</CaptionStyle>
							<Button variant={"mainPink"} body={cta} />
						</Col>
					</ReadySectionContainer>
				</ReadySectionOverlay>
			</ReadySectionShell>
		</>
	);
};

export default ReadySection;
