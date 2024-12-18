import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
	const testimonials = [
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png", // Replace with actual path
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png",
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png",
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png",
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png",
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
		{
			name: "Ayomide Ayoola",
			avatar: "/LandingPageImages/testimonialImage.png",
			comment:
				"Lorem ipsum dolor sit amet consectetur. Quis quisque ante porta vitae adipiscing platea urna.",
		},
	];

	return (
		<section className="relative bg-gray-50 py-12 md:py-28 overflow-hidden">
			{/* Slanted Top Background */}
			<div className="absolute top-0 left-0 w-full h-40 bg-white transform -skew-y-6 origin-top-left z-0"></div>

			<div className="relative max-w-7xl mx-auto px-6 sm:mt-24">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						<span className="text-green-700">Testimonies</span> from Clients
					</h2>
					<p className="text-gray-600 mt-2 max-w-lg mx-auto">
						Reapvest is a wealth building platform that allows individuals to
						invest agro and non-agro opportunities.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-4"
						>
							{/* Avatar */}
							<div className="flex-shrink-0">
								<Image
									src={testimonial.avatar}
									alt={testimonial.name}
									width={40}
									height={40}
									className="rounded-full"
								/>
							</div>

							{/* Testimonial Content */}
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									{testimonial.name}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{testimonial.comment}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
