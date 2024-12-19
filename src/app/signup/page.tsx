"use client";
import React, { useState } from "react";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
	bvn: string;
	dob: string;
	gender: string;
	referralCode: string;
}

const SignupPage = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		bvn: "",
		dob: "",
		gender: "",
		referralCode: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;

		// Ensure the `name` exists on the formData
		if (Object.prototype.hasOwnProperty.call(formData, name)) {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));

			// Clear the error if it exists
			if (errors[name]) {
				setErrors((prev) => ({
					...prev,
					[name]: "",
				}));
			}
		} else {
			console.warn(`Unhandled form field name: ${name}`);
		}
	};

	const validateFields = (): boolean => {
		let valid = true;
		const newErrors: Record<string, string> = {};

		if (step === 1) {
			const requiredFields = [
				"firstName",
				"lastName",
				"email",
				"phone",
				"password",
				"confirmPassword",
			];
			requiredFields.forEach((field) => {
				if (!formData[field as keyof FormData]) {
					newErrors[field] = "This field is required.";
					valid = false;
				}
			});
			if (
				formData.password &&
				formData.confirmPassword &&
				formData.password !== formData.confirmPassword
			) {
				newErrors["confirmPassword"] = "Passwords do not match.";
				valid = false;
			}
		} else if (step === 2) {
			const requiredFields = ["bvn", "dob", "gender"];
			requiredFields.forEach((field) => {
				if (!formData[field as keyof FormData]) {
					newErrors[field] = "This field is required.";
					valid = false;
				}
			});
		}

		setErrors(newErrors);
		return valid;
	};

	const nextStep = () => {
		if (validateFields()) {
			setStep(step + 1);
		}
	};

	const handleSubmit = () => {
		console.log("Form submitted", formData);
		// Add submission logic here
	};

	const stepHeaders = [
		{
			title: "Sign up for an account below",
			subtitle: "Welcome to the beginning of financial freedom",
		},
		{
			title: "Sign up for an account below",
			subtitle: "Welcome to the beginning of financial freedom",
		},
		{
			title: "Verify your Email Address",
			subtitle:
				"To protect your Reapvest account, your email must be verified.",
		},
	];

	const InputField = ({
		type,
		name,
		placeholder,
	}: {
		type: string;
		name: keyof FormData;
		placeholder: string;
	}) => (
		<div className="relative">
			<input
				type={type}
				name={name}
				value={formData[name]}
				onChange={handleInputChange}
				placeholder={placeholder}
				className={`w-full p-3 border text-secondary border-gray-600 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 ${
					errors[name] ? "border-red-500" : ""
				}`}
			/>
			{errors[name] && (
				<p className="text-red-500 text-sm mt-1">{errors[name]}</p>
			)}
		</div>
	);

	return (
		<div className="md:min-h-screen mt-1 text-white flex justify-center items-center px-4">
			<div className="max-w-lg w-full text-secondary p-6 rounded-lg">
				<h2 className="text-2xl font-bold mb-2">
					{stepHeaders[step - 1].title}
				</h2>
				<p className="text-gray-400 mb-6">{stepHeaders[step - 1].subtitle}</p>

				<div className="flex items-center justify-between mb-8">
					{[1, 2].map((s) => (
						<div key={s} className="flex items-center gap-2">
							<div
								className={`w-8 h-8 flex items-center justify-center ${
									step >= s
										? "bg-green-500 text-black"
										: "bg-gray-700 text-gray-400"
								} rounded-full font-bold`}
							>
								{s}
							</div>
							{s === 1 && <span>Account Setup</span>}
							{s === 2 && <span>Personal Details</span>}
						</div>
					))}
				</div>

				{step === 1 && (
					<div className="space-y-4">
						<InputField
							type="text"
							name="firstName"
							placeholder="Enter your first name"
						/>
						<InputField
							type="text"
							name="lastName"
							placeholder="Enter your last name"
						/>
						<InputField
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
						<InputField
							type="tel"
							name="phone"
							placeholder="Enter your phone number"
						/>
						<InputField
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
						<InputField
							type="password"
							name="confirmPassword"
							placeholder="Confirm your password"
						/>
						<button
							onClick={nextStep}
							className="w-full mt-6 py-3 bg-green-500 text-black rounded-lg font-bold"
						>
							Continue
						</button>
						{/* Sign Up Link */}
						<p className="mt-6 text-center text-sm text-secondary">
							Already in ReapVest?{" "}
							<a href="/signin" className="ml-4 text-green-500 hover:underline">
								Sign in
							</a>
						</p>
					</div>
				)}

				{step === 2 && (
					<div className="space-y-4">
						<InputField type="text" name="bvn" placeholder="Enter your BVN" />
						<InputField type="date" name="dob" placeholder="Date of Birth" />
						<div className="relative">
							<select
								name="gender"
								value={formData.gender}
								onChange={handleInputChange}
								aria-label="Gender"
								className={`w-full p-3 border text-secondary border-gray-600 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 ${
									errors["gender"] ? "border-red-500" : ""
								}`}
							>
								<option value="">Select your gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							{errors["gender"] && (
								<p className="text-red-500 text-sm mt-1">{errors["gender"]}</p>
							)}
						</div>
						<InputField
							type="text"
							name="referralCode"
							placeholder="Enter referral code (optional)"
						/>
						<button
							onClick={nextStep}
							className="w-full mt-6 py-3 bg-green-500 text-black rounded-lg font-bold"
						>
							Continue
						</button>
					</div>
				)}

				{step === 3 && (
					<div>
						<div className="flex justify-center gap-4 mb-8">
							{[...Array(6)].map((_, index) => (
								<input
									key={index}
									type="text"
									maxLength={1}
									className="w-12 h-12 text-center text-white bg-secondary rounded-lg"
									placeholder="0"
								/>
							))}
						</div>
						<button
							onClick={handleSubmit}
							className="w-full mt-6 py-3 bg-green-500 text-black rounded-lg font-bold"
						>
							Verify
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SignupPage;
