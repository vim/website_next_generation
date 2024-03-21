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
				"primary-opacity": "rgba(69, 255, 2, 0.15)",
				"gray-1": "var(--c-gray-1)",
				"gray-2": "var(--c-gray-2)",
				"gray-3": "var(--c-gray-3)",
				"gray-4": "var(--c-gray-4)",
				"gray-5": "var(--c-gray-5)",
			},
		},
		fontSize: {
			xs: "12px",
			sm: "clamp(0.5rem, 0.75vw, 20px)",
			base: "clamp(1rem, 1vw, 24px)",
			md: "clamp(1.25rem, 2vw, 32px)",
			lg: "clamp(1.75rem, 3vw, 42px)",
			xl: "clamp(2rem, 4vw, 48px)",
		},
	},
	plugins: [],
};
export default config;
