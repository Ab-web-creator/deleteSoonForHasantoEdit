import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Amiri, Roboto, Oswald } from "next/font/google";
import BottomNav from "./components/BottomNav";
import { agaArabesque } from "@/fonts/fonts";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://undamiz.de"),
  title: "Irsad mektebi",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "Irsad mektebi is a social learning platform for groups, courses, lessons, and collaborative growth.",
  openGraph: {
    title: "Irsad mektebi",
    description:
      "Irsad mektebi is a social learning platform for groups, courses, lessons, and collaborative growth.",
    url: "https://undamiz.de",
    siteName: "undamiz",
    type: "website",
    images: [
      {
        url: "/main-image.png",
        width: 1200,
        height: 630,
        alt: "teachandreach platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "teachandreach",
    description:
      "Undamiz platformasi online kurslar, testlar va suhbatlar uchun moslashtirilgan web-sahifadir",
    images: ["/main-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html
      lang="tr"
      className={`${amiri.variable} ${agaArabesque.variable} ${roboto.variable} ${oswald.variable} ${sans.variable} ${display.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <div>{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}