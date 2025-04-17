import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
// eslint-disable-next-line camelcase
import { Noto_Sans_Arabic, Poppins } from "next/font/google";
import { getLocale } from "next-intl/server";
import React, { ReactNode } from "react";
import { getLangDir } from "rtl-detect";
import MainLayout from "@/Library/Layout/MainLayout";

const poppins: NextFontWithVariable = Poppins({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-family",
});

const notosans: NextFontWithVariable = Noto_Sans_Arabic({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	display: "swap",
	subsets: ["arabic"],
	variable: "--font-family",
});

export const metadata: Metadata = {
	title: "ELPMP Main Website",
	description: "lorem ipseam",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
	params: { locale: string };
}>) {
	// eslint-disable-next-line
	const locale: any = await getLocale();
	const direction: "ltr" | "rtl" = getLangDir(locale);

	return (
		<html
			className={locale === "en" ? poppins.variable : notosans.variable}
			lang={locale}
			dir={direction}
		>
			<MainLayout>{children}</MainLayout>
		</html>
	);
}
