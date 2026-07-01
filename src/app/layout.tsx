import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaseChron AI | AI for Plaintiff PI Law Firms",
  description: "HIPAA-compliant AI platform built specifically for Plaintiff Personal Injury Law Firms. Automate medical chronologies and litigation intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background-warm selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}
