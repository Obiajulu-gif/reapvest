import React from "react";
import Image from "next/image";

const HowItWorks = () => {
	return (
		<section className="relative  py-12 md:py-16 text-secondary overflow-hidden">
			{/* Section Heading */}
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold">
					How it <span className="text-green-500">Works</span>
				</h2>
				<p className="mt-2">
					Reapvest is a wealth-building platform that allows individuals to
					invest agro and non-agro opportunities.
				</p>
			</div>

			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
				{/* Left Side: Phone Mockup with Glow */}
				<div className="relative w-full md:w-1/2 flex justify-center">
					<div className="relative w-[300px] md:w-[350px] h-[600px]">
						{/* Phone Glow */}
						<div className="absolute -inset-8 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 blur-3xl opacity-40"></div>
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
						<div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
							<div className="w-4 h-4 bg-black rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold ">
								Step 1 - Create an account
							</h3>
							<p>
								Sign up to create an account with your name, email and phone
								number.
							</p>
						</div>
						{/* Vertical Connector */}
						<div className="absolute left-4 top-8 h-full w-[2px] bg-gray-600"></div>
					</div>

					{/* Step 2 */}
					<div className="flex items-start gap-4 relative">
						<div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
							<div className="w-4 h-4 bg-black rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold ">
								Step 2 - Fund your wallet
							</h3>
							<p>
								Fund your reap wallet and set up your savings or investment
								plan.
							</p>
						</div>
						{/* Vertical Connector */}
						<div className="absolute left-4 top-8 h-full w-[2px] bg-gray-600"></div>
					</div>

					{/* Step 3 */}
					<div className="flex items-start gap-4">
						<div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
							<div className="w-4 h-4 bg-black rounded-full"></div>
						</div>
						<div>
							<h3 className="text-lg font-semibold ">
								Step 3 - Watch your money grow
							</h3>
							<p className="">
								Sit back, relax and watch your money grow, all day, everyday.
							</p>
						</div>
					</div>

					{/* CTA Button */}
					<div>
						<button className="px-6 py-3 bg-green-500 text-secondary font-semibold rounded-md hover:bg-green-600 transition">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
