/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to match your src folder
	],
	theme: {
		extend: {
			colors: {
				primary: "#80D855", // Primary color for branding
				secondary: "#2F4822", // Secondary color for text
			},
			screens: {
				// Tailored breakpoints for responsive design
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(50px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
				slideUp: "slideUp 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
