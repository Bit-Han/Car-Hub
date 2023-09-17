"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
	const handleScroll = () => {};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">ACCOMPANY YOUR JOURNEY WITH COMFORT</h1>
				<p className="hero__subtitle">
					Car rent service for variuos terrain with guarateed quality
				</p>
				<CustomButton
					title="Learn More"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image src="/hero.png" alt="hero" fill className="object-contain" />

					<div className="hero__image-overlay" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
