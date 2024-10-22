import React from "react";
import Image from "next/image";

const Realisations = () => {
	return (
		<div className="container py-12 md:py-24" id="realisations">
			<p
				className="font-medium text-primary uppercase mb-2 text-center"
				data-aos="fade-down"
			>
				Zajmujemy się tym od ponad 10 lat!
			</p>
			<h2 className="mb-24 text-center" data-aos="fade-down">
				Realizacje
			</h2>
			<div className="grid md:grid-cols-2 items-center justify-stretch gap-8 auto-rows-[95vw] md:auto-rows-[500px]">
				<div className="relative w-full h-full" data-aos="fade-right">
					<Image
						alt="Kominek"
						src="/kominek-2.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-left">
					<Image
						alt="Kominek"
						src="/kominek-3.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-right">
					<Image
						alt="Kominek"
						src="/kominek-4.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-left">
					<Image
						alt="Kominek"
						src="/kominek-5.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-right">
					<Image
						alt="Kominek"
						src="/kominek-6.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-left">
					<Image
						alt="Kominek"
						src="/kominek-7.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-right">
					<Image
						alt="Kominek"
						src="/kominek-2.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="relative w-full h-full" data-aos="fade-left">
					<Image
						alt="Kominek"
						src="/kominek-3.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Realisations;
