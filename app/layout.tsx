import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rishavraj.dev";
const title = "Rishav Raj — Data Analyst Portfolio";
const description =
  "Rishav Raj is a Data Analyst and Business Analytics enthusiast specializing in Python, SQL, Power BI, and Excel dashboard development. Explore his data analytics projects and experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Rishav Raj",
  },
  description,
  keywords: [
    "Rishav Raj",
    "Rishav Raj Data Analyst",
    "Rishav Raj Portfolio",
    "Data Analyst Portfolio India",
    "Business Analyst Portfolio",
    "Power BI Portfolio",
    "Python SQL Data Analyst",
  ],
  authors: [{ name: "Rishav Raj" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Rishav Raj Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
