"use client";
import React, { useState } from "react";

const Navbar = () => {
	// State to manage mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white border-b border-gray-200 shadow-sm">
			{/* Container for the navbar */}
			<div className="container mx-auto px-4 py-2 flex justify-between items-center">
				{/* Left Section - Logo */}
				<div className="flex items-center">
					<img
						src="/LandingPageImages/reapvestlogo.png" // Replace with your logo path
						alt="Reapvest Logo"
						className="h-8 w-auto"
					/>
				</div>

				{/***********************************  Desktop Menu *******************************/}
				<div className="hidden md:flex space-x-8 items-center justify-start">
					<a href="#about" className="text-gray-600 hover:text-gray-800">
						About
					</a>
					<a href="#how-it-works" className="text-gray-600 hover:text-gray-800">
						How it works
					</a>
					<a href="#invest" className="text-gray-600 hover:text-gray-800">
						Invest
					</a>
					<a href="#save" className="text-gray-600 hover:text-gray-800">
						Save
					</a>
					<a href="#faqs" className="text-gray-600 hover:text-gray-800">
						FAQs
					</a>
					{/* Sign In */}
					<a href="#signin" className="text-primary hover:text-gray-800">
						Sign In
					</a>
					{/* Sign Up Button */}
					<a
						href="#signup"
						className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90"
					>
						Sign Up For Free
					</a>
				</div>

				{/* Mobile Menu Toggle Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-gray-800 focus:outline-none"
					>
						{/* Hamburger Icon */}
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</div>

			{/***********************************  Mobile Menu *******************************/}
			{isOpen && (
				<div className="md:hidden bg-white border-t border-gray-200">
					<a
						href="#about"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						About
					</a>
					<a
						href="#how-it-works"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						How it works
					</a>
					<a
						href="#invest"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						Invest
					</a>
					<a
						href="#save"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						Save
					</a>
					<a
						href="#faqs"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						FAQs
					</a>
					<a
						href="#signin"
						className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
					>
						Sign In
					</a>
					<a
						href="#signup"
						className="block text-center bg-primary text-white mx-4 py-2 rounded-md"
					>
						Sign Up For Free
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
