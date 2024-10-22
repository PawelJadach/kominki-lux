"use client";
import React from "react";
import { PlusIcon } from "../ui/Icons";

const offers = [
	{
		id: "wklady-kominkowe",
		title: "Wkłady kominkowe",
		description: () => (
			<div className="space-y-4">
				<p>
					Kominek poza walorami estetycznymi, posiada praktyczne cechy
					użytkowe, pozwalające ogrzać zarówno bezpośrednie sąsiedztwo
					kominka, jak i cały dom. Posiadamy w ofercie wkłady
					kominkowe, które od lat cieszą się największym zaufaniem
					wśród Klientów. Wszystkie oferowane wkłady objęte są
					gwarancją. W przypadku zakupu wkładu kominkowego z montażem
					dodatkowo udzielamy gwarancji na wykonane usługi.
				</p>
				<p>Kominki można podzielić na kilka typów:</p>
				<ul className="list-disc list-inside">
					<li>
						powietrzne (prostsza konstrukcja minimalizująca ryzyko
						awarii)
					</li>
					<li>
						z płaszczem wodnym (możliwość dogrzania wody grzewczej i
						użytkowej)
					</li>
					<li>
						wolnostojące (zajmują niewiele miejsca, nie wymagają
						obudowy)
					</li>
					<li>
						Najbardziej popularne są wkłady powietrzne. Ich
						niewątpliwą zaletą jest zdecydowanie mniejsza awaryjność
						w porównaniu z kominkami wodnymi oraz niższa cena.
						Dodatkowo wykorzystując system DGP możemy w prosty i
						tani sposób dogrzać pozostałą część domu.
					</li>
				</ul>
				<p>
					Poniżej prezentujemy producentów cieszących się największym
					zainteresowaniem. Istnieje również możliwość zamówienia oraz
					zamontowania kominków pozostałych firm. W tym celu prosimy o
					kontakt
				</p>
			</div>
		),
	},
	{
		id: "wklady-kominowe",
		title: "Wkłady kominowe",
		description: () => (
			<div className="space-y-4">
				<p>
					{" "}
					W trakcie budowy domu zdarza się, że projekt kominka zmienia
					się wielokrotnie. W przypadku kominów systemowych często na
					przeszkodzie stoi wlot spalin, uniemożliwiający prawidłowe
					podłączenie kominka bądź wymuszający zmianę projektu.
				</p>
				<p>
					Oferujemy możliwość przeniesienia zarówno miejsca wlotu
					spalin jak i wyczystki we wskazany przez inwestora punkt w
					kominach systemowych:
				</p>
				<ul className="list-disc list-inside">
					<li>ceramicznych (Schiedel, Plewa, Tona i inne)</li>
					<li>
						stalowych kwasoodpornych (Schiedel, Poujoulat, Wadex i
						inne)
					</li>
				</ul>
			</div>
		),
	},
	{
		id: "obudowy-kominkowe",
		title: "Obudowy kominkowe",
		description: () => (
			<div className="space-y-4">
				<p>
					{" "}
					Obudowa kominka, powinna spełniać głównie funkcję
					dekoracyjną pomieszczenia, w którym się znajduje. Od
					wystroju wnętrza zależy sposób montażu wkładu kominkowego i
					późniejszej obudowy.
				</p>
				<p>
					Nasza firma od ponad 10 lat stosuje płyty
					krzemianowo-wapniowe do budowy kominków. Są materiałem
					zarówno izolacyjnym, jak i konstrukcyjnym — pozwala to
					wyeliminować stosowanie konstrukcji stalowej i płyt
					gipsowych, co znacznie skraca czas montażu. Jest to produkt
					bezwłóknisty, niepowodujący alergii o znacznie lepszych
					parametrach niż wełna.
				</p>
				<p>Zalety zastosowania płyt krzemianowo-wapniowych:</p>
				<ul className="list-disc list-inside">
					<li>materiał konstrukcyjny i izolacyjny w jednym</li>
					<li>nie pylą — obojętne dla zdrowia</li>
					<li>50% szybszy montaż</li>
					<li>doskonały izolator — duże bezpieczeństwo</li>
					<li>duży zakres eksploatacji — do 1000°C</li>
				</ul>
			</div>
		),
	},
	{
		id: "kamien-naturalny",
		title: "Kamień naturalny",
		description: () => (
			<div className="space-y-4">
				<p>
					Najbardziej popularne kamienie stosowane przy wykończeniu
					wnętrz to marmur, granit i trawertyn. Również piaskowiec i
					łupek świetnie się prezentują wewnątrz budynków. Wszystkie
					cechuje duża różnorodność barw, mają jednak nieco inne
					zastosowanie.
				</p>

				<p>
					Marmury oraz trawertyny można stosować na posadzki,
					parapety, blaty łazienkowe, schody oraz jako elementy
					ozdobne kominka.
				</p>

				<p>
					Granit jest kamieniem o znacznej wytrzymałości mechanicznej.
					Niska nasiąkliwość ułatwia stosowanie go, jako blatów
					kuchennych, schodów, parapetów, wewnątrz oraz na zewnątrz
					budynków.
				</p>

				<p>
					W ostatnich latach na znaczeniu zyskują rzadsze kamienie
					takie jak onyks czy kwarc. Wyższa cena w stosunku do
					bardziej popularnych materiałów rekompensowana jest
					unikalnym układem barw oraz częściową przepuszczalnością
					światła — doskonale prezentują się w roli podświetlanych
					słupów czy półek.
				</p>
			</div>
		),
	},
	{
		id: "dystrybucja-ciepla",
		title: "Dystrybucja ciepła",
		description: () => (
			<div className="space-y-4">
				<p>
					W celu wykorzystania pełnych możliwości kominka oraz
					obniżenia kosztów ogrzewania domu warto zdecydować się na
					dystrybucję gorącego powietrza.
				</p>
				<p>
					Dobrze zaplanowany system DGP pozwala ogrzać praktycznie
					cały dom w bardzo krótkim czasie. Zalet systemu to jego
					niezależność od pozostałych źródeł ciepła, prostota całej
					instalacji oraz jej wydajność.
				</p>
				<p>
					Popularne kominki z płaszczem wodnym w przypadku awarii
					zmuszają nas do demontażu całego wkładu, co pociąga za sobą
					znaczne koszty. Zastosowanie suchej dystrybucji ciepła
					minimalizuje ryzyko awarii i kosztownej naprawy.
				</p>
				<p>
					System DGP możemy podzielić ze względu na sposób działania
					na dwa rodzaje:
				</p>
				<ul className="list-disc list-inside">
					<li>grawitacyjny</li>
					<li>wymuszony</li>
				</ul>
				<p>
					Najprostszy układ zakłada grawitacyjny obieg powietrza —
					sprawdzi się w mało rozbudowanych systemach (1 – 2 punkty).
					Korzyścią jest niższy koszt instalacji.
				</p>
				<p>
					Planując ogrzewanie większej ilości pomieszczeń warto
					zainwestować w turbinę wymuszającą obieg powietrza dodatkowo
					zwiększając wydajność całego systemu. Wentylator z
					zabezpieczeniem by-pass pozwoli na pracę systemu w przypadku
					ewentualnej awarii prądu.
				</p>{" "}
			</div>
		),
	},
];

const Offer = () => {
	const [openId, setOpenId] = React.useState<string | null>(null);

	return (
		<div className="container py-12 md:py-24" id="offer">
			<p
				className="font-medium text-primary uppercase mb-2 text-center"
				data-aos="fade-down"
			>
				To wszystko możesz dostać właśnie u nas
			</p>
			<h2 className="mb-24 text-center" data-aos="fade-down">
				Oferta
			</h2>
			<div>
				{offers.map((offer, index) => (
					<div
						key={offer.id}
						className="mb-8"
						data-aos="fade-in"
						data-aos-delay={index * 100}
					>
						<div
							className="cursor-pointer border border-[D6D6D6] hover:border-primary transition-all p-[30px]"
							onClick={() =>
								setOpenId((prev) =>
									prev === offer.id ? null : offer.id,
								)
							}
						>
							<p className="flex justify-between">
								<span className="text-xl">{offer.title}</span>
								<PlusIcon />
							</p>
							{openId === offer.id && (
								<div className="mt-8" data-aos="fade-in">
									{offer.description()}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Offer;
