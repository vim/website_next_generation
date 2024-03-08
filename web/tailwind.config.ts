import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				"primary-text": "var(--color-primary-text)",
				"secondary-text": "var(--color-secondary-text)",
				"accent-text": "var(--color-primary)",
				"gray-1": "var(--c-gray-1)",
				"gray-2": "var(--c-gray-2)",
				"gray-3": "var(--c-gray-3)",
			},
		},
	},
	plugins: [],
};
export default config;
