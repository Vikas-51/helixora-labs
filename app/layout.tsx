import type { Metadata, Viewport } from "next";
import { MotionRuntime } from "@/components/animation/MotionRuntime";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helixora-biotech.vercel.app"),
  title: {
    default: "Helixora Labs | Adaptive Biotechnology Platform",
    template: "%s | Helixora Labs"
  },
  description:
    "A premium biotechnology landing page for Helixora Labs, showcasing adaptive cell intelligence, translational research, and clinical-grade biotech systems.",
  keywords: [
    "biotechnology",
    "cell therapy",
    "synthetic biology",
    "drug discovery",
    "biotech research",
    "precision medicine"
  ],
  authors: [{ name: "Helixora Labs" }],
  creator: "Helixora Labs",
  openGraph: {
    title: "Helixora Labs | Adaptive Biotechnology Platform",
    description:
      "Explore a responsive, animation-driven biotechnology platform for cell intelligence and translational research.",
    url: "https://helixora-biotech.vercel.app",
    siteName: "Helixora Labs",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Helixora Labs | Adaptive Biotechnology Platform",
    description:
      "Premium biotech landing page with interactive scientific visuals and modern research storytelling."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F3EA"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <MotionRuntime>{children}</MotionRuntime>
      </body>
    </html>
  );
}
