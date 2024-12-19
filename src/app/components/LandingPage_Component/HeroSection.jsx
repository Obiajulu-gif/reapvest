import React from "react";
import TypewriterEffect from "../TypewriterEffect"; // Import the client-side component
import Link from "next/link";
const HeroSection = () => {
	return (
		<section
			className="relative h-screen bg-cover bg-center flex items-center justify-center"
			style={{
				backgroundImage: "url('/LandingPageImages/heropicture.png')", // Replace with your hero image
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-40"></div>

			{/* Hero Content */}
			<div className="relative z-10 text-center px-4">
				{/* Animated Text - Typewriter Effect */}
				<h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
					<TypewriterEffect /> {/* Client-Side Hydrated Component */}
				</h1>

				{/* Subtitle */}
				<p className="text-white text-lg md:text-2xl max-w-2xl mx-auto mb-8">
					Reapvest is a wealth-building platform that allows individuals to
					invest in agro and non-agro opportunities.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<button className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-gray-800 transition">
						Read More
					</button>
					<Link href="/onboarding">
						<button className="px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition">
							Sign Up For Free &rarr;
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
