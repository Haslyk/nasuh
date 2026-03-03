import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat } from "next/font/google";
import WhatsappButton from "@/components/whatsapp-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Nasuh Ambalaj & Kağıt",
    template: "%s | Nasuh Ambalaj & Kağıt",
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
    siteName: "Nasuh Ambalaj & Kağıt",
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
