import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                ocean: {
                    "50": "#f5f7fa",
                    "100": "#e9edf5",
                    "200": "#cfdae8",
                    "300": "#a4b9d5",
                    "400": "#7394bd",
                    "500": "#5177a6",
                    "600": "#3e5e8b",
                    "700": "#334c71",
                    "800": "#2e415e",
                    "900": "#2a3950",
                    "950": "#1f293b",
                },
            },
        },
    },
    plugins: [],
};
export default config;
