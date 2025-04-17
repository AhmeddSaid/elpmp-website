import React, { ReactNode } from "react";
import { Locale } from "@/Library/Globals";
import Footer from "@/Library/Shell/Footer/Footer";
import TopNav from "@/Library/Shell/TopNav/TopNav";

export default function MainWebsiteLayout({
	children,
	params: { locale },
}: Readonly<{
	children: ReactNode;
	params: Locale;
}>) {
	return (
		<>
			<TopNav locale={locale} />
			<main>{children}</main>
			<Footer />
		</>
	);
}
