import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UnitListsProvider } from "@/context/UnitListsContext";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cow Calc",
  description: "A new Call of War battle calculator, alternative to dxcalc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="WUSYAGml9ozuLxtQ4Avy0qtgvabeIJAc9B9HcSE24lM" />
      <Analytics/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UnitListsProvider>
          {children}
        </UnitListsProvider>
      </body>
    </html>
  );
}
