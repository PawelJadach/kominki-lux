import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const About = () => {
	return (
		<div
			className="container flex flex-col md:flex-row justify-between items-center gap-16 py-12 md:py-24"
			id="about"
		>
			<Image
				data-aos="fade-right"
				alt="Kominek"
				src="/kominek-1.png"
				width={655}
				height={568}
			/>
			<div className="flex flex-col gap-6">
				<h2 data-aos="fade-left">
					Tworzymy <span className="text-primary">ciepło</span> i
					atmosferę <span className="text-primary">od lat.</span>
				</h2>
				<div className="space-y-2" data-aos="fade-left">
					<p className="max-w-[400px]">
						Nasza firma od ponad <b>15 lat</b> zajmuje się
						budową kominków, oraz sprzedażą wkładów kominkowych,
						piecyków wolnostojących czy akcesoriów kominkowych.
					</p>
					<p className="max-w-[400px]">
						Działamy głównie we <b>Wrocławiu</b> i na terenie{" "}
						<b>województwa dolnośląskiego.</b>
					</p>
					<p className="max-w-[400px]">
						Od wielu lat jesteśmy <b>oficjalnym dystrybutorem</b>{" "}
						marki <b>KRATKI</b> - znanego i cenionego producenta
						kominków, kratek oraz akcesoriów kominkowych.
					</p>
				</div>
				<Link data-aos="fade-left" href="/#contact">
					<Button>Skontaktuj się z nami</Button>
				</Link>
			</div>
		</div>
	);
};

export default About;
