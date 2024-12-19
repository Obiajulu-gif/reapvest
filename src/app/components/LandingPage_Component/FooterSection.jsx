import React from "react";
import Image from "next/image";

const FooterSection = () => {
	return (
		<footer className="bg-gray-50 py-10">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">
				{/* About Section */}
				<div>
					<div className="flex items-center mb-4">
						<Image
							src="/LandingPageImages/reapvestlogo.png" // Replace with actual logo path
							alt="Reapvest Logo"
							width={120}
							height={24}
							priority
						/>
					</div>
					<ul className="space-y-2">
						<li>About Us</li>
						<li>FAQs</li>
						<li>Testimonials</li>
						<li>Contact Info</li>
					</ul>
				</div>

				{/* Products Section */}
				<div>
					<h3 className="text-lg font-bold text-gray-900 mb-4">Products</h3>
					<ul className="space-y-2">
						<li>Invest</li>
						<li>Periodic Savings</li>
						<li>Target Savings</li>
						<li>Vault</li>
						<li>Savings Buddies</li>
						<li>Reap Wallet</li>
					</ul>
				</div>

				{/* Legal Section */}
				<div>
					<h3 className="text-lg font-bold text-gray-900 mb-4">Legal</h3>
					<ul className="space-y-2">
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
						<li>Security</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
					<ul className="space-y-2">
						<li>Info@Reapvest.com</li>
						<li>Help Center</li>
						<li>+234 556 567 4466</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
