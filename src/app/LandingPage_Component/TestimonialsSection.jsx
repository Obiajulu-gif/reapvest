"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
	];

	// State to manage the active testimonial index
	const [activeIndex, setActiveIndex] = useState(0);

	// Handle automatic carousel movement
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000); // Change every 3 seconds
		return () => clearInterval(interval);
	}, [activeIndex]);

	// Handle manual navigation
	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	return (
		<section className="relative  bg-[#F9FAFB] py-12 md:py-28 overflow-hidden">
			{/* Slanted Top Background */}
			<div className="absolute top-0 left-0 w-full h-40 bg-white transform -skew-y-6 origin-top-left z-0"></div>

			<div className="relative max-w-7xl mx-auto px-6">
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

				{/* Carousel Wrapper */}
				<div className="relative overflow-hidden">
					{/* Testimonial Cards */}
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							transform: `translateX(-${activeIndex * 100}%)`,
						}}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="min-w-full flex justify-center items-center"
							>
								<div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 w-[300px] md:w-[400px]">
									{/* Avatar */}
									<div>
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											width={50}
											height={50}
											className="rounded-full border border-gray-200"
										/>
									</div>

									{/* Testimonial Content */}
									<div className="text-center">
										<div className="flex justify-center items-center gap-1 mb-1">
											<span className="text-yellow-500">★ ★ ★ ★ ★</span>
										</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-1">
											{testimonial.name}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{testimonial.comment}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Buttons */}
					<div className="absolute top-1/2 left-4 transform -translate-y-1/2">
						<button
							onClick={handlePrev}
							className="p-3 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"
						>
							<FaArrowLeft />
						</button>
					</div>
					<div className="absolute top-1/2 right-4 transform -translate-y-1/2">
						<button
							onClick={handleNext}
							className="p-3 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"
						>
							<FaArrowRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
