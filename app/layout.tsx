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
  metadataBase: new URL("https://veloxdj.com"),
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
      "Faites-vous livrer vos plats préférés et réservez une course VTC depuis une seule application. Disponible sur l'App Store et Google Play. Chaque seconde compte.",
    type: "website",
    locale: "fr_FR",
    siteName: "Velox",
    url: "/",
    images: [
      { url: "/images/og-velox.png", width: 1200, height: 630, alt: "Velox — Livraison & VTC à Djibouti" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velox — Livraison de repas & VTC à Djibouti",
    description:
      "Livraison de repas et courses VTC à Djibouti, depuis une seule application. Disponible sur iPhone et Android.",
    images: ["/images/og-velox.png"],
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
