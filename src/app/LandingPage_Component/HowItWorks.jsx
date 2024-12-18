import React from "react";
import Image from "next/image";

const HowItWorks = () => {
	return (
		<section className="relative bg-white py-12 md:py-16 overflow-hidden">
			{/* Section Heading */}
			<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
				How it <span className="text-secondary">Works</span>
			</h2>
			<p className="text-gray-600 text-center mb-16 md:w-1/3 sm:w-1/2 mx-auto">
				Reapvest is a wealth-building platform that allows individuals to invest
				agro and non-agro opportunities.
			</p>
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
				{/* Left Side: Phone Mockup with Glow */}
				<div className="relative w-full md:w-1/2 flex justify-center">
					<div className="relative w-[300px] md:w-[350px] h-[600px] rounded-full">
						{/* Phone Image */}
						<Image
							src="/LandingPageImages/phoneview.png" // Replace with your image
							alt="Phone Mockup"
							layout="responsive"
							width={300}
							height={600}
							className="relative z-10"
							priority
						/>
					</div>
				</div>

				{/* Right Side: Step-by-Step Instructions */}
				<div className="w-full md:w-1/2 space-y-8">
					{/* Step 1 */}
					<div className="flex items-start gap-4 relative">
						<div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-700 flex items-center justify-center">
							<div className="w-3 h-3 bg-green-700 rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-700">
								Step 1 - Create an account
							</h3>
							<p className="text-gray-600">
								Sign up to create an account with your name, email and phone
								number.
							</p>
						</div>
						{/* Vertical Connector */}
						<div className="absolute left-3 top-6 h-full w-[2px] bg-gray-300"></div>
					</div>

					{/* Step 2 */}
					<div className="flex items-start gap-4 relative">
						<div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-700 flex items-center justify-center">
							<div className="w-3 h-3 bg-green-700 rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-700">
								Step 2 - Fund your wallet
							</h3>
							<p className="text-gray-600">
								Fund your reap wallet and set up your savings or investment
								plan.
							</p>
						</div>
						{/* Vertical Connector */}
						<div className="absolute left-3 top-6 h-full w-[2px] bg-gray-300"></div>
					</div>

					{/* Step 3 */}
					<div className="flex items-start gap-4">
						<div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-green-700 flex items-center justify-center">
							<div className="w-3 h-3 bg-green-700 rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-700">
								Step 3 - Watch your money grow
							</h3>
							<p className="text-gray-600">
								Sit back, relax and watch your money grow, all day, everyday.
							</p>
						</div>
					</div>

					{/* CTA Button */}
					<div>
						<button className="mt-4 px-6 py-3 bg-green-700 text-white text-lg font-semibold rounded-md hover:bg-green-800 transition">
							Sign Up Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
