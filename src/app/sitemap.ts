import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://elpmp.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					ar: "https://elpmp.com/ar",
					en: "https://elpmp.com/en",
				},
			},
		},
		{
			url: "https://elpmp.com/contact",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					ar: "https://elpmp.com/ar/contact",
					en: "https://elpmp.com/en/contact",
				},
			},
		},
		{
			url: "https://elpmp.com/test-your-knowledge",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					ar: "https://elpmp.com/ar/test-your-knowledge",
					en: "https://elpmp.com/en/test-your-knowledge",
				},
			},
		},
		{
			url: "https://elpmp.com/pmp",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					ar: "https://elpmp.com/ar/pmp",
					en: "https://elpmp.com/en/pmp",
				},
			},
		},
		{
			url: "https://elpmp.com/enterprise",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			alternates: {
				languages: {
					ar: "https://elpmp.com/ar/enterprise",
					en: "https://elpmp.com/en/enterprise",
				},
			},
		},
	];
}
