import React from "react";
import Image from "next/image";

const InvestmentSection = () => {
	const investments = [
		{
			title: "Invest in Agro Farms",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest in agro and non-agro opportunities.",
			image: "/LandingPageImages/agrofarm.png",
			cta: "Start Investing Now",
		},
		{
			title: "Invest in Real Estate",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest in agro and non-agro opportunities.",
			image: "/LandingPageImages/realestate.png",
			cta: "Start Investing Now",
		},
		{
			title: "Invest in Manufacturing Companies",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest in agro and non-agro opportunities.",
			image: "/LandingPageImages/manufacturing.png",
			cta: "Start Investing Now",
		},
	];

	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
			{/* Section 1: Header */}
			<div className="flex flex-col md:flex-row items-center justify-between mb-16">
				{/* Left Side Text */}
				<div className="text-center md:text-left md:w-1/2">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
						<span className="text-primary">Investment</span> That{" "}
						<span className="text-primary">Matters</span>
						<br />
						to <span className="text-gray-800">You</span>
					</h2>
					<p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
						Reapvest is a wealth-building platform that allows individuals to
						invest in agro and non-agro opportunities.
					</p>
					<button className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition">
						Explore Investment Plans
					</button>
				</div>

				{/* Right Side Image */}
				<div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
					{/* Glowing Effect */}
					<div className="absolute -inset-8 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 blur-3xl opacity-40"></div>
					<Image
						src="/LandingPageImages/phoneview.png"
						alt="Mobile Investment Preview"
						width={320}
						height={500}
						className="relative w-60 md:w-80 rounded-lg"
					/>
				</div>
			</div>

			{/* Section 2: Investments */}
			<div>
				<div className="text-center mb-12">
					<h3 className="text-2xl md:text-4xl font-bold text-gray-800">
						Amazing <span className="text-primary">Investments</span> with Great{" "}
						<span className="text-primary">Returns</span>
					</h3>
				</div>

				{/* Investment Cards */}
				<div className="space-y-12 md:space-y-16">
					{investments.map((investment, index) => (
						<div
							key={index}
							className={`flex flex-col ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							} items-center text-center md:text-left gap-8 md:gap-12`}
						>
							{/* Image with Offset Background and Glow */}
							<div className="relative mb-4">
								<div className="absolute inset-0 border-2 border-gray-200 translate-x-4 translate-y-4 rounded-lg"></div>
								<Image
									src={investment.image}
									alt={investment.title}
									width={300}
									height={200}
									className="relative z-10 w-full h-48 md:w-60 object-cover rounded-lg shadow-md"
								/>
							</div>

							{/* Text Content */}
							<div className="w-full md:w-1/2 space-y-4">
								<h3 className="text-2xl font-bold text-secondary">
									{investment.title}
								</h3>
								<p className="text-gray-600">{investment.description}</p>
								<a
									href="#"
									className="text-green-600 font-bold flex items-center justify-center md:justify-start gap-2 hover:text-green-700 transition"
								>
									{investment.cta} &rarr;
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default InvestmentSection;
