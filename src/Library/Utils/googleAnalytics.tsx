"use client";
import Script from "next/script";
import React from "react";

const GoogleAnalytics = ({ nonce, id }: { nonce?: string | null; id: string }) => (
	<>
		{nonce && (
			<>
				<Script
					id="google-analytics"
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
					strategy="afterInteractive"
					nonce={nonce}
				/>
				<Script nonce={nonce} id="google-script" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', ${id});
					`}
				</Script>
			</>
		)}
	</>
);
export default GoogleAnalytics;
