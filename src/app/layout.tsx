import type { Metadata } from "next";
import "./globals.css";
import { geist, satoshi } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import CustomCursor from "./components/CustomCursor";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcellogenovese.com";
const SITE_NAME = "Marcello Genovese";
const SITE_DEFAULT_TITLE =
  "Marcello Genovese — Product Executive · Technology Strategist · Advisor";
const SITE_DESCRIPTION =
  "Marcello Genovese is a Product Executive, Technology Strategist, and Advisor working with founders and leadership teams to build products that work, systems that scale, and businesses that last.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: "%s · Marcello Genovese",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "product strategy",
    "product executive",
    "technology strategist",
    "technology advisor",
    "founder advisor",
    "Marcello Genovese",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${satoshi.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col">
        <PageLoader />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
