"use client";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "@/Library/Globals/Globals";
import StyledComponentsRegistry from "@/Library/Globals/Registery";

const MainLayout = ({ children }: { children: ReactNode }): ReactNode => {
	return (
		<>
			<StyledComponentsRegistry>
				<GlobalStyle />
				<ThemeProvider theme={lightTheme}>
					<body>
						{children}
						<NextTopLoader
							color="#4F29F3"
							initialPosition={0.08}
							crawlSpeed={200}
							height={4}
							crawl={true}
							showSpinner={false}
							easing="ease-in-out"
							speed={200}
							shadow="0 0 10px #4F29F3,0 0 5px #4F29F3"
							zIndex={1600}
							showAtBottom={false}
						/>
					</body>
				</ThemeProvider>
			</StyledComponentsRegistry>
		</>
	);
};

export default MainLayout;
