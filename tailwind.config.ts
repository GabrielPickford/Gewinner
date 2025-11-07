import type {Config} from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#C81616",
                    DEFAULT: "#C81616",
                },
                secondary: "#E8530F",
                tertiary: "#045688",
                black: {
                    "100": "#696969",
                    "200": "#141413",
                    "300": "#7D8087",
                    "400": "#232527",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    "200": "#ADADAD",
                    "300": "#CCCCCC",
                    DEFAULT: "#FFFFFF",
                },
                green: {
                    DEFAULT: "#25d366",
                },
            
            },
            // fontFamily: {
            //     "work-sans": ["var(--font-work-sans)"],
            // },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [],
};

export default config;