"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Simulated login function
	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault(); // Prevent form submission
		setError(""); // Reset error state

		// Simulate API call or login logic
		if (email === "test@example.com" && password === "password123") {
			// Redirect user to a specific page on successful login
			router.push("/dashboard"); // Replace `/dashboard` with the actual route
		} else {
			// Set an error message if login fails
			setError("Invalid email or password. Please try again.");
		}
	};

	return (
		<div className="md:min-h-screen mt-8 flex items-center justify-center  text-white sm:py-8 md:px-6">
			<div className="w-full max-w-sm  rounded-lg ">
				{/* Title Section */}
				<h2 className="text-2xl text-secondary font-bold text-center mb-1">
					Sign in to Continue
				</h2>
				<p className="text-gray-400 text-center mb-6">
					Securely login to your account
				</p>

				{/* Error Message */}
				{error && (
					<p className="text-red-500 text-sm mb-4 text-center">{error}</p>
				)}

				{/* Form Section */}
				<form onSubmit={handleLogin}>
					{/* Email or Phone Input */}
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-400 text-sm mb-2">
							Email or phone number
						</label>
						<input
							type="email"
							id="email"
							placeholder="Type your e-mail or phone number"
							className="w-full p-3 border text-secondary border-gray-600 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					{/* Password Input */}
					<div className="mb-4 relative">
						<label
							htmlFor="password"
							className="block text-gray-400 text-sm mb-2"
						>
							Password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							placeholder="Type your password"
							className="w-full p-3 border text-secondary border-gray-600 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-6 top-6 flex items-center text-gray-400 hover:text-gray-200"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>

					{/* Forgot Password Link */}
					<div className="text-right mb-6">
						<a href="#" className="text-green-500 hover:underline text-sm">
							Forgot Password?
						</a>
					</div>

					{/* Login Button */}
					<button
						type="submit"
						className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
					>
						LOGIN
					</button>
				</form>

				{/* Sign Up Link */}
				<p className="mt-6 text-center text-sm text-secondary">
					New to ReapVest?{" "}
					<a href="/signup" className="text-green-500 hover:underline">
						Sign up
					</a>
				</p>
			</div>

			{/* Chat Icon */}
			<div className="fixed bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer">
				<Image
					src="/onboarding_image/chat-icon.svg" // Replace with your chat icon image path
					alt="Chat Icon"
					width={24}
					height={24}
				/>
			</div>
		</div>
	);
};

export default Login;
