import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DPolG Schwaben Nord | Deutsche Polizeigewerkschaft",
  description:
    "Offizielle Website des Bezirksverbands DPolG Schwaben Nord – Nah am Dienst. Stark vor Ort. Vertretung für Polizistinnen, Polizisten und Tarifbeschäftigte im PP Schwaben Nord.",
  keywords: [
    "DPolG",
    "Schwaben Nord",
    "Polizeigewerkschaft",
    "Polizeipräsidium Schwaben Nord",
    "Augsburg",
    "Dillingen",
    "Donau-Ries",
    "Personalrat",
    "Polizei Bayern",
  ],
  authors: [{ name: "DPolG Bezirksverband Schwaben Nord" }],
  openGraph: {
    title: "DPolG Schwaben Nord | #FÜRDICHAMDRANSTEN",
    description:
      "Die starke Interessenvertretung für alle Kolleginnen und Kollegen im Polizeipräsidium Schwaben Nord.",
    type: "website",
    locale: "de_DE",
    images: ["/images/fuer-dich-am-dransten.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#0072BC] selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
