import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "@/config/navbar";
import { EmailIcon, FacebookIcon, PhoneIcon } from "../ui/Icons";

export default function NavDesktop() {
	return (
		<div className="lg:block backdrop-blur fixed top-0 left-0 right-0 hidden z-10">
			<div className="bg-primary">
				<div className="container flex justify-end items-center py-2 gap-5">
					<a
						href="tel:+48609731374"
						className="flex text-light gap-2"
					>
						<PhoneIcon />
						609 731 374
					</a>
					<a
						href="tel:+48698879519"
						className="flex text-light gap-2"
					>
						<PhoneIcon />
						698 879 519
					</a>
					<span className="text-light">|</span>
					<a
						target="_blank"
						href="https://www.facebook.com/kominkilux/"
					>
						<FacebookIcon />
					</a>
					<a href="mailto:info@kominkilux.pl">
						<EmailIcon />
					</a>
				</div>
			</div>
			<div className="bg-dark">
				<div className="container flex justify-between items-center py-3">
					<NavLogo />
					<div className="flex gap-8 items-center">
						{navLinks.map((link, idx) => (
							<NavLink key={link.label + idx} {...link} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
