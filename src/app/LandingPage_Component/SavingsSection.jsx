import React from "react";
import Image from "next/image";
const SavingsSection = () => {
	const savingsOptions = [
		{
			icon: "🎯",
			title: "Target Savings",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest agro and non-agro opportunities.",
			cta: "Start Target Savings Plan",
			image: "/LandingPageImages/targetsavingimage.png",
		},
		{
			icon: "📅",
			title: "Periodic Savings",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest agro and non-agro opportunities.",
			cta: "Start Periodic Savings Plan",
			image: "/LandingPageImages/periodicsavingimage.png",
		},
		{
			icon: "👥",
			title: "Savings Buddies",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest agro and non-agro opportunities.",
			cta: "Start Savings Buddies Plan",
			image: "/LandingPageImages/savingbuddiesimage.png",
		},
		{
			icon: "🔒",
			title: "Vault Plan",
			description:
				"Reapvest is a wealth-building platform that allows individuals to invest agro and non-agro opportunities.",
			cta: "Start Vault Plan",
			image: "/LandingPageImages/vaultimage.png",
		},
	];

	return (
		<div className="relative bg-green-950 text-white p-10 pb-40">
			<div className="relative top-0 left-4">
				<h1 className="text-3xl md:text-4xl font-extrabold">
					Savings that matters to you
				</h1>
				<p className="text-gray-300 md:w-1/2">
					Reapvest is a wealth-building platform that allows individuals to
					invest agro and non-agro opportunities.
				</p>
			</div>
			<div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Section Header */}

					{savingsOptions.map((option, index) => (
						<div key={index} className="flex flex-col gap-4">
							{/* Icon and Content */}
							<div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col gap-4">
								{/* Icon and Content */}
								<div className="flex items-start ">
									{/* Icon */}
									<span className="text-3xl text-green-700">{option.icon}</span>

									{/* Text Content */}
									<div>
										<h3 className="text-2xl font-semibold text-green-800 mb-2">
											{option.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed mb-4">
											{option.description}
										</p>
										<a
											href="#"
											className="text-green-600 font-medium hover:underline flex items-center gap-1"
										>
											{option.cta} <span>→</span>
										</a>
									</div>
								</div>

								{/* Centered Image Below Content */}
								<div className="relative w-48 h-56 mx-auto">
									<Image
										src={option.image}
										alt={option.title}
										layout="responsive"
										width={300} // Fixed aspect ratio
										height={250}
										objectFit="cover"
										className="rounded-xl"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Diagonal Bottom Section */}
			<div className="absolute -bottom-40 left-0 w-full h-40 bg-white transform -skew-y-6 origin-bottom-left"></div>
		</div>
	);
};

export default SavingsSection;
