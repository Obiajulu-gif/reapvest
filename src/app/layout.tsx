import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Add weights as needed
});

export const metadata: Metadata = {
	title: "Reapvest",
	description:
		"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} antialiased`}>{children}</body>
		</html>
	);
}
