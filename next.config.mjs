import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	trailingSlash: false,
	compiler: {
		styledComponents: true,
	},
	output: "standalone",
};

export default withNextIntl(nextConfig);
