"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-style: normal;
        vertical-align: middle;
        font-weight: 400;
        font-family: var(--font-family), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
        scroll-behavior: smooth;
    }


    main {
        min-height: 100vh;
    }

    main, article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    a {
        text-decoration: none;
        color: #4F29F3;
        font-size: 0.875rem;
        display: inline-block;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.07px;

        &:hover {
            cursor: pointer;
        }
    }


    body {
        height: 100%;
        min-width: 320px;
        overflow-x: hidden;
    }


    ol, ul, li {
        list-style: none;
    }


    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    [hidden] {
        display: none;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    ::-webkit-scrollbar {
        width: 8px;
    }


    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 4px grey;
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
        background: rgba(79, 41, 243, 0.20);
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb:hover {
        background: rgba(79, 41, 243, 0.75);
    }


    input[type=number] {
        -moz-appearance: textfield;
    }

    .rotate {
        transform: rotate(0deg);
        transition: 0.70s;


        &.active {
            transform: rotate(-180deg);
            transition: 0.70s;
        }
    }


    .displayNone {
        display: none !important;
    }

    .positionRelative {
        position: relative;
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

	
	:root{
		--main-black: "#1D1C1D"
	}


`;

export const lightTheme = {
	Black: {
		main: "#1D1C1D",
	},
	Ice: "#ECEFF4",
	Primary: "#4F29F3",
	Yellow: "#FFB600",
	mainPink: "#FDA9CE",

	Grey: {
		0: "#1D202B",
		2: "#37383F",
		3: "#42434A",
		4: "#60626C",
		5: "#8C8D91",
		6: "#B3B4B7",
		7: "#DADADD",
		8: "#EFEFF0",
		9: "#F4F5F5",
		10: "#FFF",
		divider: "#b3b4b7",
	},
};

export const darkTheme = {};
