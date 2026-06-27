import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velox.dj"),
  title: "Velox — Livraison de repas & VTC à Djibouti",
  description:
    "Velox, c'est Djibouti à portée de main. Faites-vous livrer vos plats préférés et réservez une course VTC depuis une seule application, simple et rapide.",
  keywords: [
    "livraison repas Djibouti",
    "VTC Djibouti",
    "taxi Djibouti",
    "Velox",
    "restaurant Djibouti",
    "application livraison",
  ],
  openGraph: {
    title: "Velox — Livraison de repas & VTC à Djibouti",
    description:
      "Faites-vous livrer vos plats préférés et réservez une course VTC depuis une seule application. Chaque seconde compte.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
