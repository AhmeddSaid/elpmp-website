"use client";
import { notFound, redirect, usePathname } from "next/navigation";

const Page = ({ params }: { params: { locale: "en" | "ar" } }) => {
	const { locale } = params;
	const url = locale === "ar" ? "/404" : "/en/404";
	const pageFullUrl: string = usePathname();
	if (!pageFullUrl.includes("/404")) {
		redirect(url);
	}
	return notFound();
};

export default Page;
