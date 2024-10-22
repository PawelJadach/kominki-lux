import Image from "next/image";
import React from "react";

const Logos = () => {
	return (
		<div className="container flex flex-col md:flex-row justify-between items-center gap-16 py-12 md:py-24">
			<div className="grid grid-cols-3 grid-rows-2 gap-12">
				<Image
					data-aos="fade-in"
					alt="Logo kratki"
					src="/kratki-logo.png"
					width={155}
					height={54}
				/>
				<Image
					data-aos="fade-in"
					data-aos-delay="100"
					alt="Logo kratki"
					src="/yellow-logo.png"
					width={155}
					height={54}
				/>
				<Image
					data-aos="fade-in"
					data-aos-delay="200"
					alt="Logo interstone"
					src="/interstone-logo.png"
					width={155}
					height={54}
				/>
				<Image
					data-aos="fade-in"
					data-aos-delay="300"
					alt="Logo promat"
					src="/promat-logo.png"
					width={155}
					height={54}
				/>
				<Image
					data-aos="fade-in"
					data-aos-delay="400"
					alt="Logo darco"
					src="/darco-logo.png"
					width={155}
					height={54}
				/>
				<Image
					data-aos="fade-in"
					data-aos-delay="500"
					alt="Logo laminam"
					src="/laminam-logo.png"
					width={155}
					height={54}
				/>
			</div>
			<div className="space-y-3">
				<h2
					className="max-w-[400px]"
					data-aos="fade-left"
					data-aos-delay="600"
				>
					Oferujemy produkty{" "}
					<span className="text-primary">znanych</span> marek
				</h2>
				<p
					className="max-w-[600px]"
					data-aos="fade-left"
					data-aos-delay="600"
				>
					Oferujemy nowoczesne wkłady kominkowe oraz piece spełniające
					wymagania ekoprojektu oraz wszelkie niezbędne akcesoria
					potrzebne do zbudowania wymarzonego kominka
				</p>
			</div>
		</div>
	);
};

export default Logos;
