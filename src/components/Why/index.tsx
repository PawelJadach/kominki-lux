import React from "react";
import { GuaranteeIcon, PriceIcon, TransportIcon } from "../ui/Icons";

const Why = () => {
	return (
		<div className="container py-12 md:py-24" id="why">
			<p
				className="font-medium text-primary uppercase mb-2 text-center"
				data-aos="fade-down"
			>
				Nasze filary
			</p>
			<h2 className="mb-24 text-center" data-aos="fade-down">
				Dlaczego warto nam zaufać
			</h2>
			<div className="grid md:grid-cols-3 items-center gap-16 text-center">
				<div
					className="flex flex-col items-center gap-4"
					data-aos="fade-down"
					data-aos-delay="100"
				>
					<TransportIcon />
					<h3>Szybki transport</h3>
					<p>
						Zapewniamay transport i wniesienie towarów. Nawet tych
						najcięższych.
					</p>
				</div>
				<div
					className="flex flex-col items-center gap-4"
					data-aos="fade-down"
					data-aos-delay="200"
				>
					<PriceIcon />
					<h3>Pewna cena</h3>
					<p>
						Kompletną wycenę otrzymujesz przed realizacją
						zamówienia.
					</p>
				</div>
				<div
					className="flex flex-col items-center gap-4"
					data-aos="fade-down"
					data-aos-delay="300"
				>
					<GuaranteeIcon />
					<h3>Gwarancja jakości</h3>
					<p>
						Pełne wsparcie Klientów, również po okresie
						gwarancyjnym.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Why;
