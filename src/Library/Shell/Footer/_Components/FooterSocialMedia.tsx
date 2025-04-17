import Link from "next/link";
import React from "react";
import { Flexbox } from "@/Library/Grids/Grids";
import Facebook from "@/Library/Icongraphy/SocialMedia/40/Facebook";
import Instagram from "@/Library/Icongraphy/SocialMedia/40/Instagram";
import Linkedin from "@/Library/Icongraphy/SocialMedia/40/Linkedin";
import Telegram from "@/Library/Icongraphy/SocialMedia/40/Telegram";
import Twitter from "@/Library/Icongraphy/SocialMedia/40/Twitter";
import { SocialItem } from "@/Library/Shell/Footer/Footer.styles";

const FooterSocialMedia = () => {
	return (
		<>
			<Flexbox as={"ul"}>
				<SocialItem>
					<Link target={"_blank"} href={"/"}>
						<Facebook />
					</Link>
				</SocialItem>
				<SocialItem>
					<Link target={"_blank"} href={"/"}>
						<Twitter />
					</Link>
				</SocialItem>
				<SocialItem>
					<Link target={"_blank"} href={"/"}>
						<Linkedin />
					</Link>
				</SocialItem>
				<SocialItem>
					<Link target={"_blank"} href={"/"}>
						<Instagram />
					</Link>
				</SocialItem>
				<SocialItem>
					<Link target={"_blank"} href={"/"}>
						<Telegram />
					</Link>
				</SocialItem>
			</Flexbox>
		</>
	);
};

export default FooterSocialMedia;
