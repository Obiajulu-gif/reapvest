"use client"; // Enable client-side rendering

import React, { useEffect, useState } from "react";

const TypewriterEffect = () => {
	const [text, setText] = useState(""); // State to hold typewriter text
	const words = [
		"Exploring the possibilities",
		"Investing in Agriculture",
		"Empowering Wealth Creation",
	];
	const [wordIndex, setWordIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[wordIndex];
		const typeSpeed = isDeleting ? 50 : 100;

		const timer = setTimeout(() => {
			setText((prev) =>
				isDeleting
					? prev.slice(0, prev.length - 1)
					: currentWord.slice(0, prev.length + 1)
			);

			if (!isDeleting && text === currentWord) {
				setTimeout(() => setIsDeleting(true), 1000);
			} else if (isDeleting && text === "") {
				setIsDeleting(false);
				setWordIndex((prev) => (prev + 1) % words.length);
			}
		}, typeSpeed);

		return () => clearTimeout(timer);
	}, [text, isDeleting, wordIndex]);

	return (
		<span className="text-white">
			{text}
			<span className="animate-pulse">|</span>
		</span>
	);
};

export default TypewriterEffect;
