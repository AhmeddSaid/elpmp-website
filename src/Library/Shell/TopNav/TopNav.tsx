"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./../../Grids/Spaces.module.css";
import LanguageSwitcher from "@/Components/LanguageSwitcher/LanguageSwitcher";
import { Flexbox } from "@/Grids";
import { Locale } from "@/Library/Globals";
import MenuOutLine from "@/Library/Icongraphy/MenuOutLine/MenuOutLine";
import XOutLine from "@/Library/Icongraphy/XOutLine/XOutLine";
import Logo from "@/Library/Logo/Main/48/Logo";
import {
	Nav,
	NavigationBar,
	NavItem,
	NavItemContainer,
	SmallNavigationBar,
	SmallNavigationBarButton,
	SmallNavigationBarMenu,
	SmallNavigationBarMenuLinks,
	SmallNavigationBarShell,
} from "@/Library/Shell/TopNav/TopNav.styles";
import { Title1 } from "@/Library/Typography/TypographyNew";
import Button from "@/UI/Button/Button";
import uuid from "@/Utils/uuid";

const linksEn = [
	{ name: "Home", URL: "/" },
	{ name: "PMP Course", URL: "/pmp" },
	{ name: "Test Your Knowledge", URL: "/test-your-knowledge" },
	{
		name: "Enterprise",
		URL: "/enterprise",
	},
	{
		name: "Contact",
		URL: "/contact",
	},
];

const linksAr = [
	{ name: "دورة PMP", URL: "/pmp" },
	{ name: "اختبر معرفتك", URL: "/test-your-knowledge" },
	{
		name: "المؤسسات",
		URL: "/enterprise",
	},
	{
		name: "تواصل معنا",
		URL: "/contact",
	},
];

const TopNav = ({ locale }: Locale) => {
	const [NavBarMenu, setNavBarMenu] = useState(false);
	const links = locale === "ar" ? linksAr : linksEn;
	const router = useRouter();

	const changePage = (url: string) => {
		router.push(url);
		setNavBarMenu(false);
	};
	return (
		<>
			<header>
				<NavigationBar>
					<Nav>
						<Link href={"/"}>
							<Logo />
						</Link>
						<NavItemContainer>
							{links.map(link => (
								<NavItem key={uuid()}>
									<Link href={link.URL}>{link.name}</Link>
								</NavItem>
							))}
						</NavItemContainer>
						<Flexbox gap={0.5} as={"ul"} aligncenter={"center"}>
							<li className={styles.paddingInlineEnd56}>
								<LanguageSwitcher locale={locale} />
							</li>
							<li>
								<Link href={"https://dashboard.elpmp.com/auth/register"} target={"_blank"}>
									<Button variant={"secondary"} body={locale === "en" ? "Sign up" : "إنشاء حساب"} />
								</Link>
							</li>
							<li>
								<Link href={"https://dashboard.elpmp.com/auth/login"} target={"_blank"}>
									<Button body={locale === "en" ? "Sign in" : "تسجيل الدخول"} />
								</Link>
							</li>
						</Flexbox>
					</Nav>
				</NavigationBar>

				<SmallNavigationBarShell open={NavBarMenu}>
					<SmallNavigationBar justify={"space-between"} aligncenter={"center"}>
						<Link href={"/"}>
							<Logo />
						</Link>

						<div onClick={() => setNavBarMenu(prev => !prev)}>
							{NavBarMenu ? <XOutLine /> : <MenuOutLine />}
						</div>
					</SmallNavigationBar>
					<SmallNavigationBarMenu open={NavBarMenu}>
						<SmallNavigationBarMenuLinks>
							{links.map(link => (
								<Title1 key={uuid()} onClick={() => changePage(link.URL)} weight={"md"}>
									{link.name}
								</Title1>
							))}
							{/*<Link href={"/courses/1"}>*/}
							{/*	<Title1 weight={"md"}> Courses</Title1>*/}
							{/*</Link>*/}
							{/*<Link href={"/test-your-knowledge"}>*/}
							{/*	<Title1 weight={"md"}> Test Your Knowledge</Title1>*/}
							{/*</Link>{" "}*/}
							{/*<Link href={"/enterprise"}>*/}
							{/*	<Title1 weight={"md"}> Enterprise</Title1>*/}
							{/*</Link>{" "}*/}
							{/*<Link href={"/contact"}>*/}
							{/*	<Title1 weight={"md"}> Contact US</Title1>*/}
							{/*</Link>*/}
							{/*<Title1 weight={"md"}> Resources</Title1>*/}
						</SmallNavigationBarMenuLinks>
						<SmallNavigationBarButton>
							{/*<Button fullwidth size={"lg"} body={"Explore Courses"} />*/}
							<Link href={"https://dashboard.elpmp.com/auth/register"} target={"_blank"}>
								<Button
									fullwidth
									size={"lg"}
									variant={"secondary"}
									body={locale === "en" ? "Sign up" : "إنشاء حساب"}
								/>
							</Link>
							<Link href={"https://dashboard.elpmp.com/auth/login"} target={"_blank"}>
								<Button fullwidth size={"lg"} body={locale === "en" ? "Sign in" : "تسجيل الدخول"} />
							</Link>
						</SmallNavigationBarButton>
					</SmallNavigationBarMenu>
				</SmallNavigationBarShell>
			</header>
		</>
	);
};

export default TopNav;
