import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "Kominki lux - ciepło które inspiruje",
			description:
				"Stwórz niepowtarzalną atmosferę dzięki naszym nowoczesnym i klasycznym kominkom, idealnie dopasowanym do Twojego wnętrza.",
			metadataBase: new URL("https://kominki-lux.vercel.app/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
