import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat } from "next/font/google";
import WhatsappButton from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
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
    <html lang="tr" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster position="top-right" />
        <Analytics />
        <WhatsappButton />
      </body>
    </html>
  );
}
