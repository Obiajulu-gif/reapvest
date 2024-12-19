"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const onboardingData = [
	{
		title: "Savings Buddies",
		description:
			"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities",
		image: "/onboarding_image/saving.png",
		showGetStarted: true,
	},
	{
		title: "Investments",
		description:
			"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities",
		image: "/onboarding_image/investment.svg",
		buttonText: "Next",
		showSkip: true,
		showNext: true,
	},
	{
		title: "Reap Coin",
		description:
			"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities",
		image: "/onboarding_image/reapcoin.png",
		buttonText: "Next",
		showSkip: true,
		showNext: true,
	},
	{
		title: "Financial Literacy",
		description:
			"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities",
		image: "/onboarding_image/financialliteracy.png",
		showSignUp: true,
		showLogin: true,
	},
];

const OnboardingScreen = () => {
	const [currentScreen, setCurrentScreen] = useState(0);

	const handleNext = () => {
		if (currentScreen < onboardingData.length - 1) {
			setCurrentScreen(currentScreen + 1);
		}
	};

	const handleSkip = () => {
		setCurrentScreen(onboardingData.length - 1);
	};

	return (
		<>
			{/* Right Panel */}
			<div className="flex-1 flex flex-col justify-center items-center bg-white p-8 md:mt-20">
				<div className="flex flex-col items-center justify-center text-center">
					<Image
						src={onboardingData[currentScreen].image}
						alt={onboardingData[currentScreen].title}
						width={
							typeof window !== "undefined" && window.innerWidth < 768
								? "150"
								: "300"
						}
						height={300}
					/>
					<h2 className="text-2xl font-bold text-gray-900 mt-6">
						{onboardingData[currentScreen].title}
					</h2>
					<p className="text-gray-600 mt-2">
						{onboardingData[currentScreen].description}
					</p>
				</div>

				{/* Dots */}
				<div className="flex justify-center mt-6">
					{onboardingData.map((_, index) => (
						<div
							key={index}
							className={`w-3 h-3 rounded-full mx-2 ${
								index === currentScreen ? "bg-green-600" : "bg-gray-300"
							}`}
						/>
					))}
				</div>

				{/* Buttons */}
				<div className="flex justify-between w-full max-w-md mt-6 m">
					{onboardingData[currentScreen].showGetStarted && (
						<button
							className="w-full px-6 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition"
							onClick={handleNext}
						>
							Get Started →
						</button>
					)}
					{onboardingData[currentScreen].showSkip && (
						<div className="flex justify-between w-full">
							<button
								className="px-12 py-3 bg-transparent text-green-600 border border-green-600 rounded-md text-lg hover:bg-green-100 transition"
								onClick={handleSkip}
							>
								Skip
							</button>
							<button
								className="px-12 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition"
								onClick={handleNext}
							>
								Next →
							</button>
						</div>
					)}
					{onboardingData[currentScreen].showLogin && (
						<div className="flex gap-4 justify-center w-full">
							<Link href="/login" className="flex-1 px-6 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition flex items-center justify-center">
								<button >
									Login
								</button>
							</Link>

							<Link href="/signup	" className="flex-1 px-6 py-3 bg-transparent text-green-600 border border-green-600 rounded-md text-lg hover:bg-green-100 transition flex items-center justify-center">
								<button >
									Sign Up
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default OnboardingScreen;
