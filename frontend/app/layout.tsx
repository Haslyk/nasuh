import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: {
    default: "GuneyMak | Hassas Muhendislik Cozumleri",
    template: "%s | GuneyMak",
  },
  description:
    "Endustriyel makine uretiminde lider — hidrolik presler, CNC tezgahlar, konveyor sistemleri ve daha fazlasi. 1987'den bu yana 40'tan fazla ulkeye ihracat.",
  keywords: [
    "endustriyel makine",
    "hidrolik pres",
    "CNC tezgah",
    "imalat",
    "Turkiye",
    "muhendislik",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "GuneyMak",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F3460",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
