import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Offer from "@/components/Offer";
import Realisations from "@/components/Realisations";
import Divider from "@/components/ui/Divider";
import Why from "@/components/Why";

export default function Home() {
	return (
		<>
			<Hero />
			<Divider />
			<Logos />
			<Divider />
			<About />
			<Divider />
			<Why />
			<Divider />
			<Offer />
			<Divider />
			<Realisations />
			<Contact />
		</>
	);
}
