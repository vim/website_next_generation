import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"secondary-text": "var(--c-secondary-text)",
				"gray-1": "var(--c-gray-1)",
				"gray-2": "var(--c-gray-2)",
				"gray-3": "var(--c-gray-3)",
				"gray-4": "var(--c-gray-4)",
			},
		},
	},
	plugins: [],
};
export default config;
