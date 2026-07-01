import type { Metadata } from "next";
import { Sora, Lora, Roboto } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lex Value AI | AI for Plaintiff PI Law Firms",
  description: "HIPAA-compliant AI platform built specifically for Plaintiff Personal Injury Law Firms. Automate medical chronologies and litigation intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${roboto.variable} ${lora.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background-warm selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}
