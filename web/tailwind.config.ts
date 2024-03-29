import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["var(--font-fira)"],
			},
			colors: {
				primary: "var(--c-primary)",
				"primary-opacity": "var(--c-primary-opacity)",
				"gray-1": "var(--c-gray-1)",
				"gray-2": "var(--c-gray-2)",
				"gray-3": "var(--c-gray-3)",
				"gray-4": "var(--c-gray-4)",
				"gray-5": "var(--c-gray-5)",
			},
		},
		fontSize: {
			xs: "12px",
			sm: "clamp(0.5rem, 0.75vw, 16px)",
			base: "clamp(1rem, 1vw, 18px)",
			md: "clamp(1.25rem, 2vw, 24px)",
			lg: "clamp(1.75rem, 3vw, 32px)",
			xl: "clamp(2rem, 4vw, 42px)",
		},
		borderRadius: {
			none: "0px",
			xs: "15px",
			sm: "25px",
			DEFAULT: "35px",
			md: "45px",
			lg: "55px",
		},
		dropShadow: {
			xs: "4px 4px 5px var(--c-gray-3-opacity)",
			sm: "6px 6px 5px var(--c-gray-3-opacity)",
			DEFAULT: "8px 8px 5px var(--c-gray-3-opacity)",
			md: "10px 10px 5px var(--c-gray-3-opacity)",
			lg: "10px 10px 5px var(--c-gray-3-opacity)",
		},
	},
	plugins: [],
};
export default config;
