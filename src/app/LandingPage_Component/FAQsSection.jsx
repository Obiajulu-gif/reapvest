"use client";
import React, { useState } from "react";

const FAQsSection = () => {
	const [openIndex, setOpenIndex] = useState(0);

	// FAQ Data
	const faqs = [
		{
			question: "What is Reapvest?",
			answer:
				"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities.",
		},
		{
			question: "What is Reapvest?",
			answer:
				"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities.",
		},
		{
			question: "What is Reapvest?",
			answer:
				"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities.",
		},
		{
			question: "What is Reapvest?",
			answer:
				"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities.",
		},
		{
			question: "What is Reapvest?",
			answer:
				"Reapvest is a wealth building platform that allows individuals invest agro and non-agro opportunities.",
		},
	];

	// Toggle FAQ index
	const toggleFAQ = (index) => {
		setOpenIndex(index === openIndex ? null : index);
	};

	return (
		<section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
			{/* Section Title */}
			<div className="text-center mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
					<span className="text-green-700">FAQs</span> for you
				</h2>
			</div>

			{/* FAQs Accordion */}
			<div className="space-y-4">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border-b border-gray-200 cursor-pointer"
						onClick={() => toggleFAQ(index)}
					>
						{/* FAQ Question */}
						<div className="flex justify-between items-center py-4">
							<h3 className="text-lg font-semibold text-gray-900">
								{faq.question}
							</h3>
							{/* Toggle Icon */}
							<span
								className={`text-2xl transform transition-transform ${
									openIndex === index ? "rotate-180" : ""
								}`}
							>
								&#x25B2;
							</span>
						</div>
						{/* FAQ Answer */}
						{openIndex === index && (
							<div className="pb-4 text-gray-600 text-sm leading-relaxed">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQsSection;
