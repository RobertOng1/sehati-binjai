import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import SideNav from "@/components/SideNav";
import InstallPrompt from "@/components/InstallPrompt";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sehati Binjai — Cegah Stunting, Wujudkan Generasi Sehat",
  description:
    "Aplikasi pencegahan stunting di Kota Binjai. Kalkulator gizi anak berbasis standar WHO, edukasi nutrisi ibu hamil & baduta, serta panduan budidaya microgreen.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Sehati Binjai — Cegah Stunting, Wujudkan Generasi Sehat",
    description:
      "Aplikasi pencegahan stunting di Kota Binjai. Kalkulator gizi anak, edukasi nutrisi, dan panduan microgreen.",
    url: "https://sehati-binjai.my.id",
    siteName: "Sehati Binjai",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 930,
        alt: "Sehati Binjai — Cegah Stunting",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehati Binjai — Cegah Stunting",
    description:
      "Kalkulator gizi anak, edukasi nutrisi ibu hamil & baduta, panduan budidaya microgreen.",
    images: ["/thumbnail.png"],
  },
  icons: {
    icon: "/app-logo.ico",
    apple: "/app-logo-192-px.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sehati Binjai",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#106140",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload Material Symbols for faster icon loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="app-container">
          <SideNav />
          <main className="page-content">{children}</main>
          <BottomNav />
          <InstallPrompt />
        </div>
      </body>
    </html>
  );
}
