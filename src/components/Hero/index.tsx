import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Hero = () => {
	return (
		<div
			className="container flex flex-col md:flex-row justify-between items-center gap-16 py-12 md:py-24"
			id="hero"
		>
			<div className="flex flex-col gap-6">
				<h1 data-aos="fade-right">
					Ciepło, które{" "}
					<span className="text-primary">inspiruje.</span> Kominki dla
					Twojego domu.
				</h1>
				<p data-aos="fade-right" className="max-w-[400px]">
					Stwórz niepowtarzalną atmosferę dzięki naszym nowoczesnym i
					klasycznym kominkom, idealnie dopasowanym do Twojego
					wnętrza.
				</p>
				<Link data-aos="fade-right" href="/#realisations">
					<Button>Odkryj nasze kominki</Button>
				</Link>
			</div>
			<video
				width="667"
				height="756"
				autoPlay={true}
				muted
				loop
				data-aos="fade-left"
			>
				<source src="/video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Hero;
