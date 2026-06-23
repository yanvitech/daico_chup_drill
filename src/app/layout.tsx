import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAÏCO CHUP — Afrodrill | Drill Bénin",
  description:
    "DAÏCO CHUP, artiste afrodrill du Bénin. Découvre sa musique, ses clips et l'univers de AMIRI — le katana qui tranche les beats. Drill africaine, son unique.",
  keywords: [
    "Daïco Chup",
    "afrodrill",
    "drill Bénin",
    "drill africaine",
    "DORIMIN DRILL",
    "Djandjou 2K6",
    "AMIRI",
    "musique Bénin",
    "rap Bénin",
    "afrodrill Bénin",
  ],
  openGraph: {
    title: "DAÏCO CHUP — Afrodrill | Drill Bénin",
    description: "L'artiste afrodrill du Bénin. Univers katana. Son tranchant.",
    url: "https://daico-chup.vercel.app",
    siteName: "DAÏCO CHUP",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAÏCO CHUP — Afrodrill",
    description: "L'artiste afrodrill du Bénin. AMIRI coupe tout.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700;800&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Daïco Chup",
              genre: ["Afrodrill", "Drill", "Hip-Hop"],
              description:
                "Artiste afrodrill du Bénin, univers katana, son tranchant.",
              url: "https://daico-chup.vercel.app",
              sameAs: [
                "https://www.instagram.com/daico_chup",
                "https://www.tiktok.com/@daico_chup",
                "https://www.youtube.com/@daicochup",
                "https://audiomack.com/daico-chup",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
