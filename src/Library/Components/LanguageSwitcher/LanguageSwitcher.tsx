"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import {
	LanguageDropdown,
	LanguageDropdownList,
	LanguageSwitchBtn,
} from "@/Components/LanguageSwitcher/LanguageSwitcher.styles";
import { Locale } from "@/Library/Globals";

const LanguageSwitcher = ({ locale }: Locale) => {
	const [openDropdown, setOpenDropdown] = React.useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpenDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const pathname = usePathname();
	const originalPathname = pathname.replace(/^\/(en|ar)\//, "/");
	const router = useRouter();

	const changeLang = (lang: "en" | "ar") => {
		if (lang === locale) return;
		const destination = originalPathname === "/en" ? "/" : originalPathname;
		if (lang === "en") {
			router.push(`/en${destination}`);
		} else {
			router.push(`/ar${destination}`);
		}
		router.refresh();
	};

	return (
		<div ref={dropdownRef}>
			<LanguageDropdown
				onClick={() => {
					setOpenDropdown(!openDropdown);
				}}
			>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M28 16C28 22.6274 22.6274 28 16 28M28 16C28 9.37258 22.6274 4 16 4M28 16H4M16 28C9.37258 28 4 22.6274 4 16M16 28C18.2091 28 20 22.6274 20 16C20 9.37258 18.2091 4 16 4M16 28C13.7909 28 12 22.6274 12 16C12 9.37258 13.7909 4 16 4M4 16C4 9.37258 9.37258 4 16 4"
						stroke="#42434A"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span>{locale === "en" ? "EN" : "عربي"}</span>

				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.6673 7.5L8.00065 10.6667L4.33398 7.5"
						stroke="#42434A"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</LanguageDropdown>
			<LanguageDropdownList openDropdown={openDropdown}>
				<LanguageSwitchBtn
					onClick={() => changeLang("ar")}
					isDisabled={locale === "ar"}
					type={"button"}
				>
					عربي
				</LanguageSwitchBtn>
				<LanguageSwitchBtn
					onClick={() => changeLang("en")}
					isDisabled={locale === "en"}
					type={"button"}
				>
					English
				</LanguageSwitchBtn>
			</LanguageDropdownList>
		</div>
	);
};

export default LanguageSwitcher;
