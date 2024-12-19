import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col md:flex-row">
			{/* Left Panel */}
			<div className="w-full md:w-1/2 p-16  flex items-center justify-center relative">
				<div className="absolute inset-0">
					<Image
						src="/onboarding_image/onboarding_left.svg"
						alt="Background Pattern"
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>
				<div className="relative z-10">
					<Image
						src="/onboarding_image/reapvestlogo.svg"
						alt="Reapvest Logo"
						width={300}
						height={150}
					/>
				</div>
			</div>
			{/* Right Panel */}
			<div className="flex-1 bg-white">{children}</div>
		</div>
	);
}
