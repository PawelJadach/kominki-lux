import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/#hero">
			<Image
				alt="Kominki lux logo"
				src="/logo.png"
				width={151}
				height={67}
			/>
		</Link>
	);
}
