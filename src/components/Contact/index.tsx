import React from "react";
import {
	BigEmailIcon,
	BigPhoneIcon,
	ClockIcon,
	GuaranteeIcon,
	PlaceIcon,
	PriceIcon,
	TransportIcon,
} from "../ui/Icons";

const Contact = () => {
	return (
		<div className="bg-[#EBEBEB] py-12 md:py-24" id="contact">
			<div className="container">
				<p
					className="font-medium text-primary uppercase mb-2 text-center"
					data-aos="fade-down"
				>
					Zadzwoń i zamów swój wymarzony kominek już dziś!
				</p>
				<h2 className="mb-24 text-center" data-aos="fade-down">
					Skontaktuj się z nami
				</h2>
				<div className="flex flex-col md:flex-row md:items-start justify-center gap-8 md:gap-16 text-center">
					<div
						className="flex flex-col items-center gap-4"
						data-aos="fade-down"
						data-aos-delay="100"
					>
						<BigPhoneIcon />
						<p>
							609 731 374 <br />
							698 879 519
						</p>
					</div>
					<div
						className="flex flex-col items-center gap-4"
						data-aos="fade-down"
						data-aos-delay="200"
					>
						<PlaceIcon />
						<p>
							ul. Sułowska 40
							<br />
							51-180 Wrocław
						</p>
					</div>
					<div
						className="flex flex-col items-center gap-4"
						data-aos="fade-down"
						data-aos-delay="300"
					>
						<BigEmailIcon />
						<a href="mailto:info@kominkilux.pl">
							info@kominkilux.pl
						</a>
					</div>
					<div
						className="flex flex-col items-center gap-4"
						data-aos="fade-down"
						data-aos-delay="400"
					>
						<ClockIcon />
						<p className="flex flex-col gap-4">
							<span className="flex flex-col">
								<span>poniedziałek - piątek</span>
								<span>10.00 – 18.00</span>
							</span>
							<span className="flex flex-col">
								<span>sobota</span>
								<span>10.00 - 14.00</span>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
